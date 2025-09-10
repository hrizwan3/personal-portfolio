import type { ExperienceItem } from "../types";

export default function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <article className="rounded-3xl border border-neutral-200/70 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950">
      {/* Header */}
      <div className="md:grid md:grid-cols-[1fr_auto] md:items-baseline md:gap-x-3">
        {/* Company big + Role smaller underneath */}
        <div>
          <h3 className="text-lg font-semibold tracking-tight md:text-xl">
            {item.company}
          </h3>
          <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
            {item.role}
          </p>
        </div>

        {/* Time aligned right */}
        <span className="mt-1 block text-sm text-neutral-500 md:mt-0 md:text-right">
          {item.time}
        </span>
      </div>

      {/* Bullets */}
      <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-700 dark:text-neutral-300">
        {item.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </article>
  );
}
