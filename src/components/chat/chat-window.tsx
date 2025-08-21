
"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Send, Info } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChatMessage } from "./chat-message";
import { TypingIndicator } from "./typing-indicator";
import type { Message, Persona } from "@/lib/types";
import { mainChatFlow } from "@/ai/flows/main-chat-flow";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ContactInfoSheet } from "./contact-info-sheet";
import { ChatPlusMenu } from "./chat-plus-menu";
import { getComponentForResponse, getComponentResponse } from "@/lib/bot-responses";

interface ChatWindowProps {
  persona: Persona;
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Record<string, Message[]>>>;
  initialMessage?: string;
  onInitialMessageSent: () => void;
  onSidebarToggle: () => void;
}

let messageIdCounter = 0;

export function ChatWindow({ persona, messages, setMessages, initialMessage, onInitialMessageSent, onSidebarToggle }: ChatWindowProps) {
  const { toast } = useToast();
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const initialMessageSentRef = useRef(false);
  
  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector(
        "div[data-radix-scroll-area-viewport]"
      );
      if (viewport) {
        setTimeout(() => {
          viewport.scrollTop = viewport.scrollHeight;
        }, 100);
      }
    }
  };

  const processUserMessage = useCallback(async (messageText: string, currentPersonaId: string) => {
    setIsTyping(true);

    const componentKey = getComponentResponse(messageText);
    if (componentKey) {
        const component = getComponentForResponse(componentKey);
        if (component) {
            const newMessages: Message[] = [];

            const componentMessage: Message = {
                id: `${Date.now()}-${messageIdCounter++}`,
                sender: "bot",
                component: component,
                timestamp: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
            };
            newMessages.push(componentMessage);

            if (componentKey === 'photography') {
                const followUpMessage: Message = {
                    id: `${Date.now()}-${messageIdCounter++}`,
                    sender: 'bot',
                    text: 'More on @tanmay.init',
                    timestamp: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
                };
                newMessages.push(followUpMessage);
            }

            setMessages((prev) => ({
                ...prev,
                [currentPersonaId]: [...(prev[currentPersonaId] || []), ...newMessages],
            }));

            setIsTyping(false);
            return;
        }
    }

    try {
      const botResponse = await mainChatFlow({ 
        message: messageText,
        personaId: currentPersonaId 
      });
      
      const newBotMessage: Message = {
        id: `${Date.now()}-${messageIdCounter++}`,
        sender: "bot",
        timestamp: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
        text: botResponse.response
      };

      setMessages((prev) => {
        const currentMessages = prev[currentPersonaId] || [];
        return {
          ...prev,
          [currentPersonaId]: [...currentMessages, newBotMessage],
        }
      });

    } catch (error) {
      console.error("Failed to get AI response:", error);
      toast({
        title: "Error",
        description: `Could not get a response from the AI. Please try again. Details: ${error instanceof Error ? error.message : String(error)}`,
        variant: "destructive",
      });
      const errorMessage: Message = {
        id: `${Date.now()}-${messageIdCounter++}`,
        sender: "bot",
        text: `Sorry, an unexpected error occurred. Please try again later. (Details: ${error instanceof Error ? error.message : String(error)})`,
        timestamp: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
      };
       setMessages((prev) => {
        const currentMessages = prev[currentPersonaId] || [];
        return {
          ...prev,
          [currentPersonaId]: [...currentMessages, errorMessage],
        }
      });
    } finally {
      setIsTyping(false);
    }
  }, [setMessages, toast]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);
  
  useEffect(() => {
    if (initialMessage && !initialMessageSentRef.current) {
      initialMessageSentRef.current = true;

      const userMessage: Message = {
        id: `${Date.now()}-${messageIdCounter++}`,
        sender: "user",
        text: initialMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
        status: "Delivered",
      };
      
      setMessages(prev => ({ ...prev, [persona.id]: [userMessage] }));
      
      processUserMessage(initialMessage, persona.id);

      onInitialMessageSent();
    }
  }, [initialMessage, persona.id, processUserMessage, setMessages, onInitialMessageSent]);


  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    const userMessage: Message = {
      id: `${Date.now()}-${messageIdCounter++}`,
      sender: "user",
      text: inputValue,
      timestamp: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
      status: "Delivered",
    };

    setMessages((prev) => {
      const currentMessages = prev[persona.id] || [];
      return {
        ...prev,
        [persona.id]: [...currentMessages, userMessage],
      }
    });

    processUserMessage(inputValue, persona.id);
    setInputValue("");
  };

  return (
    <Sheet>
      <div className="flex flex-col h-full w-full bg-card">
        <header className="flex justify-between items-center p-3 border-b shrink-0">
          <div className="flex items-center gap-3">
             <button className="md:hidden" onClick={onSidebarToggle}>
                <Avatar className="h-10 w-10">
                <AvatarImage src={persona.avatar} alt={persona.name} />
                <AvatarFallback>{persona.name.charAt(0)}</AvatarFallback>
                </Avatar>
            </button>
             <div className="hidden md:block">
                <Avatar className="h-10 w-10">
                <AvatarImage src={persona.avatar} alt={persona.name} />
                <AvatarFallback>{persona.name.charAt(0)}</AvatarFallback>
                </Avatar>
            </div>
            <div>
              <h2 className="font-semibold text-sm">{persona.name}</h2>
              <p className="text-xs text-muted-foreground">online</p>
            </div>
          </div>
           <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
              <Info className="h-4 w-4" />
            </Button>
          </SheetTrigger>
        </header>
        <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isTyping && <TypingIndicator />}
          </div>
        </ScrollArea>
        <footer className="p-2 border-t shrink-0">
          <form
            onSubmit={handleSendMessage}
            className="flex items-center gap-2"
          >
            <ChatPlusMenu />
            <div className="relative flex-1">
                <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={persona.tagline}
                className="w-full rounded-full bg-input pr-12"
                />
                <Button
                type="submit"
                size="icon"
                className={cn("absolute right-1.5 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full transition-colors", 
                    inputValue.trim() ? "bg-primary text-primary-foreground" : "bg-transparent text-primary"
                )}
                >
                <Send className="h-4 w-4" />
                </Button>
            </div>
          </form>
        </footer>
        <SheetContent side="right" className="w-full max-w-md mx-auto p-0 rounded-l-2xl">
           <SheetHeader>
            <VisuallyHidden>
                <SheetTitle>Contact Information</SheetTitle>
                <SheetDescription>Details about {persona.name}.</SheetDescription>
            </VisuallyHidden>
            </SheetHeader>
          <ContactInfoSheet persona={persona} />
        </SheetContent>
      </div>
    </Sheet>
  );
}
