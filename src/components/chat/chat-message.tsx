
"use client";

import type { Message } from "@/lib/types";
import { cn } from "@/lib/utils";
import ReactMarkdown from 'react-markdown';
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.sender === "user";

  const markdownStyles = `
    prose 
    prose-sm 
    dark:prose-invert 
    prose-headings:font-semibold 
    prose-a:text-primary 
    prose-p:before:hidden 
    prose-p:after:hidden 
    prose-li:marker:text-foreground
  `;

  const renderContent = () => {
    if (message.component) {
        // This is a special check for the PhotographyGallery which uses Dialog internally
        // We need to render it directly without wrapping it in another Dialog
        // A more robust solution might use a component type property on the message
        const componentType = (message.component as React.ReactElement)?.type as any;
        if (componentType?.name === 'PhotographyGallery') {
             return message.component;
        }

      if (React.isValidElement(message.component) && message.component.type === Dialog) {
        return (
          <Dialog>
            <DialogTrigger asChild>
              <div className="cursor-pointer">{/* This can be a preview */}</div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                 <VisuallyHidden>
                    <DialogTitle>Component View</DialogTitle>
                    <DialogDescription>Interactive component display.</DialogDescription>
                 </VisuallyHidden>
              </DialogHeader>
              {message.component}
            </DialogContent>
          </Dialog>
        );
      }
      return message.component;
    }
    
    if (isUser) {
      return <p className="text-sm">{message.text}</p>;
    }

    return (
      <ReactMarkdown className={markdownStyles}>
        {message.text}
      </ReactMarkdown>
    );
  };


  return (
    <div className="flex flex-col group">
       <div
        className={cn("flex items-end space-x-2", {
          "justify-end": isUser,
        })}
      >
        <div
          className={cn(
            "max-w-xs md:max-w-md lg:max-w-lg px-4 py-2.5 shadow-md",
            {
              "bg-primary text-primary-foreground rounded-t-2xl rounded-bl-2xl": isUser,
              "bg-secondary text-secondary-foreground rounded-t-2xl rounded-br-2xl": !isUser,
            }
          )}
        >
          {renderContent()}
        </div>
      </div>
       {(isUser || !isUser) && (
        <div className={cn("flex mt-1", { "justify-end": isUser, "justify-start": !isUser })}>
             <p className="text-xs text-muted-foreground pr-2">
                {isUser && message.status ? `${message.status} · ` : ''}
                {message.timestamp}
            </p>
        </div>
      )}
    </div>
  );
}

    