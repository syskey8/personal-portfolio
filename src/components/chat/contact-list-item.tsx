
"use client";

import { cn } from "@/lib/utils";
import type { Persona, Message } from "@/lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface ContactListItemProps {
  persona: Persona;
  isActive: boolean;
  onSelect: () => void;
  lastMessage?: Message;
}

export function ContactListItem({
  persona,
  isActive,
  onSelect,
  lastMessage,
}: ContactListItemProps) {
  
  const truncateText = (text: string | undefined, length: number) => {
    if (!text) return "";
    if (text.length <= length) return text;
    return text.substring(0, length) + "...";
  };
  
  return (
    <button
      onClick={onSelect}
      className={cn(
        "flex items-center w-full text-left gap-3 p-2.5 rounded-lg transition-colors",
        isActive
          ? "bg-primary text-primary-foreground"
          : "hover:bg-accent"
      )}
    >
      <Avatar className="h-11 w-11">
        <AvatarImage src={persona.avatar} alt={persona.name} />
        <AvatarFallback>{persona.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-1 overflow-hidden">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-sm truncate">{persona.name}</p>
          <p className={cn("text-xs", isActive ? "text-primary-foreground/80" : "text-muted-foreground")}>
            {lastMessage?.timestamp}
          </p>
        </div>
        <p className={cn("text-xs truncate", isActive ? "text-primary-foreground/90" : "text-muted-foreground")}>
          {truncateText(lastMessage?.text || persona.tagline, 35)}
        </p>
      </div>
    </button>
  );
}
