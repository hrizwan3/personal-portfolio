import ExperienceCard from "../components/ExperienceCard";
import { EXPERIENCE } from "../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-label="Experience"
      className="space-y-6 scroll-mt-24"
    >
      <h2 className="text-2xl font-bold tracking-tight border-b border-neutral-200 pb-2 dark:border-neutral-700">
        Experience
      </h2>
      {EXPERIENCE.map((item) => (
        <ExperienceCard key={`${item.company}-${item.role}`} item={item} />
      ))}
    </section>
  );
}
