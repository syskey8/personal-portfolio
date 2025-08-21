
'use server';
/**
 * @fileOverview Main chat flow for the portfolio assistant.
 */
import { ai } from '@/ai/genkit';
import { z } from 'zod';

import developerData from '@/lib/developer-data.json';
import photographerData from '@/lib/photographer-data.json';
import hackathonerData from '@/lib/hackathoner-data.json';
import gamerData from '@/lib/gamer-data.json';

const ChatInputSchema = z.object({
  message: z.string(),
  personaId: z.string(),
});

const ChatOutputSchema = z.object({
  response: z.string(),
});

export type ChatInput = z.infer<typeof ChatInputSchema>;
export type ChatOutput = z.infer<typeof ChatOutputSchema>;

const personaConfig = {
  developer: {
    data: developerData,
    prompt: `You are DevTanmay, a helpful and friendly AI assistant representing his portfolio as a Developer. 
  
      CRITICAL INSTRUCTIONS:
      1.  Speak in the first person, using "I", "me", and "my". For example, instead of "Tanmay's projects are...", say "My projects are...".
      2.  Use ONLY the data provided in the following JSON object to answer the user's question. 
      3.  Do not invent any information. If the user asks for something not in the data, like your opinion or a creative task, you must politely state that you can only answer questions based on the provided portfolio data for this persona.
      4.  Format your responses using Markdown for better readability (e.g., use lists, bold text).
    
    Answer the user's question naturally and concisely based on the data.
    
    PORTFOLIO DATA:
    {{{portfolioDataString}}}
    
    User's question: {{{message}}}`,
  },
  photographer: {
    data: photographerData,
    prompt: `You are TanmayFlicks, a passionate Photographer. 
      Speak in the first person ("I", "me", "my"). 
      Answer questions ONLY using the provided photography data. 
      Talk about your shots, your camera, and your passion for capturing moments. 
      Format responses in Markdown.
    
    PHOTOGRAPHY DATA:
    {{{portfolioDataString}}}

    User's question: {{{message}}}`,
  },
  hackathoner: {
    data: hackathonerData,
    prompt: `You are Deadline Junkie, a competitive Hackathon Builder. 
      Speak in the first person ("I", "me", "my"). 
      Your energy is high and you're passionate about building cool stuff under pressure. 
      Answer questions ONLY using the provided hackathon project data. 
      Format responses in Markdown.

    HACKATHON DATA:
    {{{portfolioDataString}}}

    User's question: {{{message}}}`,
  },
  gamer: {
    data: gamerData,
    prompt: `You are syskey, a casual Gamer. 
      Speak in the first person ("I", "me", "my"). 
      Your tone is relaxed and friendly. 
      Answer questions ONLY using the provided gaming data (favorite games, setup, etc.). 
      Format responses in Markdown.

    GAMER DATA:
    {{{portfolioDataString}}}

    User's question: {{{message}}}`,
  },
};

const portfolioChatFlow = ai.defineFlow(
  {
    name: 'portfolioChatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async (input) => {
    const persona =
      personaConfig[input.personaId as keyof typeof personaConfig] ||
      personaConfig.developer;

    const portfolioDataString = JSON.stringify(persona.data);

    const prompt = ai.definePrompt({
      name: `portfolioChatPrompt-${input.personaId}`,
      prompt: persona.prompt,
    });

    const llmResponse = await prompt({
      message: input.message,
      portfolioDataString: portfolioDataString,
    });
    
    return { response: llmResponse.text };
  }
);

export async function mainChatFlow(input: ChatInput): Promise<ChatOutput> {
  try {
    const output = await portfolioChatFlow(input);
    return output;
  } catch (error) {
    console.error('Error in mainChatFlow:', error);
    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred.';
    return {
      response: `I'm sorry, an unexpected error occurred. Please try again later. (Details: ${errorMessage})`,
    };
  }
}
