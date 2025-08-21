
"use client";
import { useState } from "react";
import { Code, Camera, Sword, Gamepad2 } from 'lucide-react';
import { ContactList } from "./contact-list";
import { ChatWindow } from "./chat-window";
import type { Message, Persona } from "@/lib/types";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const personas: Persona[] = [
  {
    id: "developer",
    name: "DevTanmay",
    avatar: "/developer.png",
    tagline: "Let's talk code and projects.",
    prompt: "You are DevTanmay...",
    description: "This is my professional side. Ask me about my skills, projects, work experience, and career goals. I can provide details about my tech stack, past internships, and future aspirations.",
    topics: [
      { icon: Code, text: "Skills & Technologies" },
      { icon: Code, text: "Projects & Code" },
      { icon: Code, text: "Experience & Internships" },
      { icon: Code, text: "Resume & Career Goals" },
    ]
  },
  {
    id: "photographer",
    name: "TanmayFlicks",
    avatar: "/photographer.png",
    tagline: "Ask me about my best shots.",
    prompt: "You are TanmayFlicks...",
    description: "This is my creative side. I love capturing sunsets and candid moments. Ask me about my photography style, the gear I use, or my favorite places to shoot.",
    topics: [
      { icon: Camera, text: "Photography Style" },
      { icon: Camera, text: "Favorite Photos" },
      { icon: Camera, text: "Camera Gear" },
      { icon: Camera, text: "Inspiration" },
    ]
  },
  {
    id: "hackathoner",
    name: "Deadline Junkie",
    avatar: "/hackathoner.png",
    tagline: "Building cool stuff under pressure.",
    prompt: "You are Deadline Junkie...",
    description: "This is my competitive and innovative side. I thrive in high-pressure environments. Ask me about my hackathon wins, the projects I've built in 48 hours, and my strategies for success.",
    topics: [
      { icon: Sword, text: "Hackathon Wins" },
      { icon: Sword, text: "High-Pressure Projects" },
      { icon: Sword, text: "CTF Competitions" },
      { icon: Sword, text: "Building & Pitching" },
    ]
  },
  {
    id: "gamer",
    name: "syskey",
    avatar: "/gamer.png",
    tagline: "GGs only. Ask me about games",
    prompt: "You are syskey...",
    description: "This is my fun and relaxed side. I see the world in terms of levels, XP, and achievements. Ask me about my favorite games, my epic Minecraft builds, or my gaming setup.",
    topics: [
      { icon: Gamepad2, text: "Favorite Games" },
      { icon: Gamepad2, text: "Minecraft Builds" },
      { icon: Gamepad2, text: "Gaming Philosophy" },
      { icon: Gamepad2, text: "PC Setup" },
    ]
  },
];

interface MultiChatViewProps {
  initialMessage?: string;
}

export function MultiChatView({ initialMessage: initialMessageFromProps }: MultiChatViewProps) {
  const [activePersona, setActivePersona] = useState<Persona>(personas[0]);
  const [messages, setMessages] = useState<Record<string, Message[]>>({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentInitialMessage, setCurrentInitialMessage] = useState<string | undefined>(initialMessageFromProps);

  const handleSelectPersona = (persona: Persona) => {
    setActivePersona(persona);
    setIsSidebarOpen(false); // Close sidebar on selection
  };
  
  const handleInitialMessageSent = () => {
    setCurrentInitialMessage(undefined);
  };

  return (
    <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
      <div className="flex h-full w-full">
        <div className="hidden md:block w-full max-w-xs border-r">
          <ContactList
            personas={personas}
            activePersona={activePersona}
            onSelectPersona={handleSelectPersona}
            messages={messages}
          />
        </div>
        <div className="flex-1">
          <ChatWindow
            key={activePersona.id}
            persona={activePersona}
            messages={messages[activePersona.id] || []}
            setMessages={setMessages}
            initialMessage={currentInitialMessage}
            onInitialMessageSent={handleInitialMessageSent}
            onSidebarToggle={() => setIsSidebarOpen((prev) => !prev)}
          />
        </div>
        <SheetContent side="left" className="p-0 w-4/5 max-w-xs">
           <SheetHeader>
              <VisuallyHidden>
                <SheetTitle>Personas List</SheetTitle>
                <SheetDescription>Select a persona to chat with.</SheetDescription>
              </VisuallyHidden>
            </SheetHeader>
          <ContactList
            personas={personas}
            activePersona={activePersona}
            onSelectPersona={handleSelectPersona}
            messages={messages}
          />
        </SheetContent>
      </div>
    </Sheet>
  );
}
