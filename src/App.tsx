import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Landing from "./sections/Landing";
import Home from "./sections/Home";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import type { TabKey } from "./types";
import { Github, Linkedin } from "lucide-react";

export default function App() {
  const [active, setActive] = useState<TabKey>("Home");

  // dark mode + smooth scrolling
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("dark");
    root.classList.add("scroll-smooth");
  }, []);

  // scrollspy: highlight current section in navbar
  useEffect(() => {
    const sections = [
      { id: "home", label: "Home" as TabKey },
      { id: "experience", label: "Experience" as TabKey },
      { id: "projects", label: "Projects" as TabKey },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const match = sections.find((s) => s.id === visible.target.id);
          if (match) setActive(match.label);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <NavBar active={active} />

      <main className="mx-auto max-w-5xl px-4 py-10 space-y-14">
        <Landing />
        <Home />
        <Experience />
        <Projects />
      </main>

      <footer className="mx-auto max-w-5xl px-4 pb-16 pt-8 text-sm text-neutral-500">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Hassan Rizwan</span>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/hassan-rizwan3/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/hrizwan3/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
