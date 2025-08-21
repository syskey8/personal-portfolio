import { experiences } from "@/lib/data";
import { ExperienceCard } from "./experience-card";

export function ExperienceDisplay() {
  return (
    <div className="space-y-4">
      {experiences.map((exp) => (
        <ExperienceCard key={exp.id} experience={exp} />
      ))}
    </div>
  );
}
