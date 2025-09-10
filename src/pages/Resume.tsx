import { useEffect } from "react";

export default function Resume() {
  useEffect(() => {
    window.location.href = "/resume.pdf";
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-neutral-600 dark:text-neutral-300">
        Redirecting to resume...
      </p>
    </div>
  );
}
