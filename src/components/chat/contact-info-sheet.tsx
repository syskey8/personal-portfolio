
"use client";

import type { Persona } from "@/lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

interface ContactInfoSheetProps {
  persona: Persona;
}

export function ContactInfoSheet({ persona }: ContactInfoSheetProps) {
  return (
    <div className="bg-card text-card-foreground">
      <div className="flex flex-col items-center p-6 space-y-3">
        <Avatar className="h-35 w-35">
          <AvatarImage src={persona.avatar} alt={persona.name} />
          <AvatarFallback>{persona.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h2 className="text-xl font-semibold">{persona.name}</h2>
          <p className="text-sm text-muted-foreground">{persona.tagline}</p>
        </div>
      </div>
      <Separator />
      <div className="p-6">
        <p className="text-sm text-muted-foreground mb-4">
            {persona.description}
        </p>
        <h3 className="text-sm font-semibold mb-3 text-primary">I can talk about:</h3>
        <ul className="space-y-3">
          {persona.topics.map((topic, index) => (
            <li key={index} className="flex items-center text-sm">
              <topic.icon className="h-4 w-4 mr-3 text-muted-foreground" />
              <span>{topic.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
