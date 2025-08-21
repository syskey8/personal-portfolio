import type { Education } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

interface EducationCardProps {
  education: Education;
}

export function EducationCard({ education }: EducationCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start gap-4">
          <GraduationCap className="mt-1 h-6 w-6 text-primary" />
          <div>
            <CardTitle>{education.degree}</CardTitle>
            <CardDescription>{education.institution}</CardDescription>
            <p className="text-sm text-muted-foreground">{education.duration}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 text-sm">
            {education.university && <p><span className="font-semibold">University:</span> {education.university}</p>}
            {education.board && <p><span className="font-semibold">Board:</span> {education.board}</p>}
            {education.specialization && <p><span className="font-semibold">Specialization:</span> {education.specialization}</p>}
        </div>
      </CardContent>
    </Card>
  );
}
