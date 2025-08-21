import type { Experience } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Briefcase } from "lucide-react";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start gap-4">
          <Briefcase className="mt-1 h-6 w-6 text-primary" />
          <div>
            <CardTitle>{experience.position}</CardTitle>
            <CardDescription>
              {experience.company} · {experience.type}
            </CardDescription>
            <p className="text-sm text-muted-foreground">{experience.duration}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-2">{experience.description}</p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
          {experience.responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </CardContent>
      {experience.skills && experience.skills.length > 0 && (
        <CardFooter className="flex flex-wrap gap-2">
            {experience.skills.map((skill) => (
                <div key={skill} className="px-2 py-0.5 text-xs rounded-full bg-secondary text-secondary-foreground">
                    {skill}
                </div>
            ))}
        </CardFooter>
      )}
    </Card>
  );
}
