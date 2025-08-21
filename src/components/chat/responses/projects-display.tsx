import { projects } from "@/lib/data";
import { ProjectCard } from "./project-card";

export function ProjectsDisplay() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
