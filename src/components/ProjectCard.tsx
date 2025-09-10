import type { ProjectItem } from "../types";
import { Github, ExternalLink, FileText, Link as LinkIcon } from "lucide-react";

function linkIcon(label: string) {
  const l = label.toLowerCase();
  if (l.includes("github")) return <Github size={16} />;
  if (l.includes("code")) return <Github size={16} />;
  if (l.includes("demo")) return <ExternalLink size={16} />;
  if (l.includes("write-up") || l.includes("article")) return <FileText size={16} />;
  return <LinkIcon size={16} />;
}

export default function ProjectCard({ item }: { item: ProjectItem }) {
  return (
    <div className="flex flex-col justify-between rounded-3xl border border-neutral-200/70 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950">
      <div>
        <h3 className="text-lg font-semibold tracking-tight">{item.name}</h3>
        {item.time && (
          <p className="text-sm text-neutral-500 dark:text-neutral-400">{item.time}</p>
        )}
        <p className="mt-2 text-neutral-700 dark:text-neutral-300">{item.blurb}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {item.stack.map((s) => (
            <span
              key={s}
              className="rounded-full bg-neutral-100 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {item.links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-3">
          {item.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("/") ? "_self" : "_blank"}
              rel={l.href.startsWith("/") ? undefined : "noopener noreferrer"}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 underline underline-offset-4 hover:opacity-80 dark:text-neutral-100"
            >
              {linkIcon(l.label)} {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
