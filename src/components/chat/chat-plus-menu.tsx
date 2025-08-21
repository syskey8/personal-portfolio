
"use client";

import { Home, Moon, Plus, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useTheme } from "next-themes";
import { socialLinks } from "@/lib/data";
import Link from "next/link";
import { useState } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Separator } from "../ui/separator";

export function ChatPlusMenu() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleGoHome = () => {
    window.location.href = "/";
  };

  const menuItems = [
    {
      icon: theme === "dark" ? Sun : Moon,
      text: `Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`,
      onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
    },
    {
      icon: Home,
      text: "Back to Home",
      onClick: handleGoHome,
    },
    ...socialLinks.map((link) => ({
      icon: link.icon,
      text: `Open ${link.name}`,
      href: link.url,
      onClick: () => {},
    })),
  ];

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Plus className="h-5 w-5" />
          <span className="sr-only">More options</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-64 p-2 rounded-2xl mb-2"
        align="start"
        side="top"
      >
        <VisuallyHidden>
          <h2>More Options</h2>
          <p>Toggle theme, go to homepage, and view social links.</p>
        </VisuallyHidden>
        <div className="grid gap-1">
          {menuItems.map((item, index) =>
            item.href ? (
              <Button
                key={index}
                variant="ghost"
                className="justify-start h-11 text-base font-normal"
                asChild
                onClick={() => setIsOpen(false)}
              >
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.text}
                </Link>
              </Button>
            ) : (
              <Button
                key={index}
                variant="ghost"
                className="justify-start h-11 text-base font-normal"
                onClick={() => {
                  item.onClick();
                  setIsOpen(false);
                }}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.text}
              </Button>
            )
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
