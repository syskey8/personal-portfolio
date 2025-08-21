
import React from "react";
import { PhotographyGallery } from "@/components/chat/responses/photography-gallery";
import { ResumeCard } from "@/components/chat/responses/resume-card";

type ComponentKey = 
  | "resume"
  | "photography";

const keywordMap: { [key: string]: ComponentKey } = {
  // Resume Triggers
  "resume": "resume",
  "cv": "resume",

  // Photography Triggers
  "photo": "photography",
  "photos": "photography",
  "photography": "photography",
  "gallery": "photography",
  "shots": "photography",
  "pictures": "photography",
};

export const getComponentResponse = (userInput: string): ComponentKey | null => {
  const normalizedInput = userInput.toLowerCase().trim();
  
  // Check for whole words first for better accuracy
  const words = normalizedInput.split(/\s+/);
  for (const word of words) {
    if (keywordMap[word]) {
      return keywordMap[word];
    }
  }

  // Check for keywords as substrings for broader matching
  for (const keyword in keywordMap) {
    if (normalizedInput.includes(keyword)) {
      return keywordMap[keyword];
    }
  }

  return null;
};

export const getComponentForResponse = (key: ComponentKey): React.ReactNode => {
    switch (key) {
        case "resume": return <ResumeCard />;
        case "photography": return <PhotographyGallery />;
        default: return null;
    }
}
