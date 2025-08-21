
"use client";

import { useState } from "react";
import { MultiChatView } from "@/components/chat/multi-chat-view";
import { LandingPage } from "@/components/landing-page";

export default function Home() {
  const [showChat, setShowChat] = useState(false);
  const [initialMessage, setInitialMessage] = useState<string | undefined>(undefined);

  const handleStartChat = (message?: string) => {
    setInitialMessage(message || "Tell me about yourself");
    setShowChat(true);
  };

  return (
    <main className="h-screen w-screen overflow-hidden bg-background">
      {showChat ? (
        <MultiChatView initialMessage={initialMessage} />
      ) : (
        <LandingPage onStartChat={handleStartChat} />
      )}
    </main>
  );
}
