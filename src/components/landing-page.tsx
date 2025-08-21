
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Github, Send, Briefcase, Code, Smile, User, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusMenu } from "./plus-menu";
import LightRays from "./LightRays";
import { useTheme } from "next-themes";

interface LandingPageProps {
  onStartChat: (message?: string) => void;
}

const suggestionChips = [
  { icon: User, text: "Me" },
  { icon: Briefcase, text: "Projects" },
  { icon: Code, text: "Skills" },
  { icon: Smile, text: "Fun" },
  { icon: User, text: "Contact" },
];

export function LandingPage({ onStartChat }: LandingPageProps) {
  const [inputValue, setInputValue] = useState("");
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onStartChat(inputValue || "Tell me about yourself");
  };

  const handleChipClick = (text: string) => {
    onStartChat(text);
  };

  const raysColor = theme === "dark" ? "#B1D4E0" : "#2E3440";

  return (
    <div className="flex flex-col h-full bg-background text-foreground">
      <div className="absolute inset-0 z-0 overflow-hidden">
        {mounted && (
           <LightRays
            key={theme} 
            raysColor={raysColor}
            raysOrigin="top-center"
            raysSpeed={0.4}
            lightSpread={1.5}
            rayLength={1.2}
            pulsating={false}
            fadeDistance={1.0}
            saturation={0.5}
            followMouse={false}
            mouseInfluence={0}
            noiseAmount={0.05}
            distortion={0}
          />
        )}
      </div>
      <div className="relative z-10 flex flex-col h-full">
        <header className="flex justify-end items-center p-4">
        </header>
        <main className="flex-1 flex flex-col items-center justify-center text-center p-4 -mt-16">
          <div className="w-full max-w-md mx-auto mb-8 relative">
            <Image
              src="/profile.png"
              alt="Tanmay's profile picture"
              width={180}
              height={180}
              className="mx-auto rounded-full"
            />
          </div>
          <p className="text-lg text-muted-foreground mb-2">Hey, I'm Tanmay 👋</p>
          <h1 className="text-4xl md:text-5xl font-bold max-w-lg mb-6 leading-tight">
            <span>Instead of browsing, just ask me anything</span>
          </h1>
        </main>
        <footer className="p-4 text-center">
          <div className="w-full max-w-md mx-auto mb-4">
            <form
              onSubmit={handleFormSubmit}
              className="relative flex items-center mb-4 gap-2"
            >
              <PlusMenu />
              <Input
                type="text"
                placeholder="Ask me anything..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full rounded-full pr-12 h-12 text-base"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full h-8 w-8"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
            <div className="flex flex-wrap justify-center gap-2">
              {suggestionChips.map(({ icon: Icon, text }) => (
                <Button
                  key={text}
                  variant="outline"
                  className="rounded-lg"
                  onClick={() => handleChipClick(text)}
                >
                  <Icon className="mr-2" />
                  {text}
                </Button>
              ))}
            </div>
          </div>
          <h2 className="text-8xl font-bold text-muted-foreground/10 select-none">
            <span className="hidden lg:inline">Tanmay Deorukhakar</span>
            <span className="inline lg:hidden">Tanmay</span>
          </h2>
        </footer>
      </div>
    </div>
  );
}
