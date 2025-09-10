import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-label="Projects"
      className="space-y-6 scroll-mt-24"
    >
      <h2 className="text-2xl font-bold tracking-tight border-b border-neutral-200 pb-2 dark:border-neutral-700">
        Projects
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((item) => (
          <ProjectCard key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}
