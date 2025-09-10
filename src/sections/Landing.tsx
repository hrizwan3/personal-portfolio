import { Mail, Github, Linkedin, FileText } from "lucide-react";

export default function Landing() {
  return (
    <section
      id="landing"
      aria-label="Landing"
      className="flex min-h-screen flex-col items-center justify-center gap-6 scroll-mt-24 text-center"
    >
      <img
        src="/profile.jpg"
        alt="Hassan Rizwan"
        className="h-40 w-40 rounded-full border-4 border-neutral-200 object-cover shadow-lg dark:border-neutral-800"
      />

      <div>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Hassan Rizwan</h1>
        <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-300">
          Student at the University of Pennsylvania
        </p>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm font-medium">
        <a
          href="mailto:you@example.com"
          className="flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
        >
          <Mail size={18} /> Email
        </a>
        <a
          href="https://www.linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
        >
          <Linkedin size={18} /> LinkedIn
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
        >
          <Github size={18} /> GitHub
        </a>

        {/* Open in new tab */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
        >
          <FileText size={18} /> Resume
        </a>
      </div>
    </section>
  );
}
