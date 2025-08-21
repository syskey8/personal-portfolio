import { allSkills } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SkillsDisplay() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Skillset</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {allSkills.map((skill) => (
            <div
              key={skill}
              className="px-3 py-1 rounded-full text-sm font-medium bg-secondary text-secondary-foreground transition-transform hover:scale-110 animate-skill-badge-glow shadow-accent"
            >
              {skill}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
