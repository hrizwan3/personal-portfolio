import type { TabKey } from "../types";

const TABS: { label: TabKey; href: string }[] = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export default function NavBar({ active }: { active: TabKey }) {
  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200/60 bg-white/80 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-950/70">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <a href="#landing">
            <img
              src="/favicon.png"
              alt="HR Logo"
              className="h-8 w-8 rounded"
            />
          </a>
          <a
            href="#landing"
            className="font-semibold tracking-tight"
          >
            Hassan Rizwan
          </a>
        </div>

        {/* Nav links */}
        <nav
          aria-label="Primary"
          role="navigation"
          className="flex gap-1 rounded-full border border-neutral-200/70 p-1 dark:border-neutral-800"
        >
          {TABS.map((t) => {
            const selected = active === t.label;
            return (
              <a
                key={t.href}
                href={t.href}
                aria-current={selected ? "page" : undefined}
                className={
                  `rounded-full px-4 py-2 text-sm font-medium transition ` +
                  (selected
                    ? "bg-neutral-900 text-white shadow dark:bg-neutral-100 dark:text-neutral-900"
                    : "hover:bg-neutral-100 dark:hover:bg-neutral-900/50")
                }
              >
                {t.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
