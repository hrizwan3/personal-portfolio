import type { ExperienceItem } from "../types";

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Amazon.com, Inc.",
    role: "Software Development Engineer Intern — Fixed Marketing Measurement",
    time: "Jun 2025 – Aug 2025",
    bullets: [
      "Designed a scalable outlier-detection/handling system in PySpark + TypeScript, cutting model runtimes from 1+ days to ~4 hours.",
      "Integrated pipelines into a distributed MLOps stack on SageMaker, improving reliability, reducing reruns, and accelerating deployments.",
    ],
  },
  {
    company: "University of Pennsylvania",
    role: "Graduate Teaching Assistant — CIS 5450: Big Data Analytics",
    time: "Aug 2024 – Present",
    bullets: [
      "Led recitations, office hours, and exam grading for 300+ students; authored/curated assignments to teach practical data science.",
      "Mentored 18 students end-to-end on ML projects: data acquisition, modeling, evaluation, and deployment.",
    ],
  },
  {
    company: "University of Pennsylvania",
    role: "Graduate Teaching Assistant — CIT 5950: Computer Systems Programming",
    time: "Dec 2024 – May 2025",
    bullets: [
      "Developed and graded C++ assignments on threading, synchronization, virtual memory, and networking.",
      "Ran recitations and office hours for 250+ students focused on OS concepts and systems debugging.",
    ],
  },
  {
    company: "University of Pennsylvania",
    role: "Undergraduate Teaching Assistant — Introduction to Computer Systems",
    time: "May 2024 – Dec 2025",
    bullets: [
      "Taught computer systems architecture, from transistors to C programming, preparing students for advanced computer systems courses.",
    ],
  },
  {
    company: "Penn Medicine — Physics & Instrumentation Group",
    role: "Deep Learning Intern",
    time: "Jun 2024 – Aug 2024",
    bullets: [
      "Enhanced Breast-PET reconstruction with a U-Net to correct limited-angle artifacts and deformations.",
      "Trained models on simulated and phantom data to reduce noise/artifacts, improving clinical image quality and diagnostic utility.",
    ],
  },
  {
    company: "Systematic Research Advisors, LLC",
    role: "Financial Data Science Intern",
    time: "May 2023 – Nov 2023",
    bullets: [
      "Built a robust ETL pipeline with Yahoo Finance API and automated ingestion via Azure Functions into a MySQL store.",
      "Developed a probability model with Pandas/NumPy/SQLAlchemy/SciPy to surface research insights for investments.",
    ],
  },
];
