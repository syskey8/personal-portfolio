
"use client";

import { useState, useEffect } from "react";
import { Search, SquarePen } from "lucide-react";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import type { Persona, Message } from "@/lib/types";
import { ContactListItem } from "./contact-list-item";
import { Separator } from "../ui/separator";

interface ContactListProps {
  personas: Persona[];
  activePersona: Persona;
  onSelectPersona: (persona: Persona) => void;
  messages: Record<string, Message[]>;
}

export function ContactList({
  personas,
  activePersona,
  onSelectPersona,
  messages,
}: ContactListProps) {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString([], {
          hour: "numeric",
          minute: "2-digit",
        })
      );
    }, 1000); 

    // Set initial time
    setCurrentTime(
      new Date().toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
      })
    );

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex flex-col h-full w-full bg-secondary/50">
      <header className="p-3 border-b bg-background/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-sm font-semibold w-full text-center">
            {currentTime}
          </h1>
          <button>
            <SquarePen className="w-5 h-5" />
          </button>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search" className="pl-9 rounded-md h-9" />
        </div>
      </header>
      <ScrollArea className="flex-1">
        <div className="p-2 space-y-1">
          {personas.map((persona) => (
            <ContactListItem
              key={persona.id}
              persona={persona}
              isActive={activePersona.id === persona.id}
              onSelect={() => onSelectPersona(persona)}
              lastMessage={
                messages[persona.id]?.[messages[persona.id].length - 1]
              }
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
