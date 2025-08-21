import { education } from "@/lib/data";
import { EducationCard } from "./education-card";

export function EducationDisplay() {
  return (
    <div className="space-y-4">
      {education.map((edu) => (
        <EducationCard key={edu.id} education={edu} />
      ))}
    </div>
  );
}
