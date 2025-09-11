import type { ProjectItem } from "../types";

export const PROJECTS: ProjectItem[] = [
  {
    name: "MotionMend",
    time: "September 2024 – May 2025",
    blurb:
      "Senior design project built in a team of five: a remote physical therapy platform to support patients recovering from knee surgery. The system integrates a wearable IMU-based device for motion tracking, an iOS app (developed in Swift) for guided exercises, and a secure therapist dashboard for monitoring. Cloud-backed storage and real-time visualization enable feedback loops that improve patient engagement, compliance, and post-surgery outcomes.",
    stack: ["Swift", "C++", "iOS", "Cloud", "IMU Sensors"],
    links: [
      { label: "GitHub", href: "https://github.com/peterbpro/Motion-Mend-SeniorDesign" }
    ],
  },
  {
    name: "PennCloud",
    time: "November 2024 – December 2024",
    blurb:
      "Developed a distributed cloud platform in a team of four, allowing users to upload, download, and manage files. Core services were implemented in C++, with a front-end built in HTML, CSS, and JavaScript. The project extended into a mail server supporting SMTP and POP3 protocols, and a chatroom server with multicast communication. The chat system implemented unordered, FIFO, and total order multicast, providing robust real-time group communication alongside storage and mail capabilities.",
    stack: ["C++", "HTML", "CSS", "JavaScript", "SMTP/POP3", "Multicast"],
    links: [
      { label: "GitHub", href: "https://github.com/mtp0326/PennCloud" },
    ],
  },
  {
    name: "OAT Compiler",
    time: "January 2024 – May 2024",
    blurb:
      "Built a compiler for Oat, a simplified C-like language, using OCaml. The compiler employed OCamllex and Menhir to generate a lexer and parser, and produced LLVM IR that could be compiled down to x86 assembly. Robust type-checking was implemented to support advanced features such as structs and function pointers, ensuring both correctness and strong type safety.",
    stack: ["OCaml", "LLVM IR", "x86"],
    links: [],
  },
  {
    name: "SuccessStories",
    time: "November 2024 – December 2024",
    blurb:
      "Designed SuccessStories, a career guidance platform aimed at addressing the lack of accessible mentorship for college students. The application offered scheduling tools to connect with alumni, discussion forums for peer-to-peer support, and curated articles with resume and interview advice. Built through iterative design with user testing and Figma/React prototypes, the project emphasized usability, inclusivity, and a clean interface. It was later highlighted in a Medium article as a showcase of user-centered design.",
    stack: ["React", "Figma", "Lucide React", "Prototyping"],
    links: [
      {
        label: "Article",
        href: "https://medium.com/@hrizwan5472013/empowering-career-guidance-with-successstories-jie-cheng-myron-kharkover-hassan-rizwan-550391045d8a",
      },
    ],
  },
  {
    name: "PennOS",
    time: "November 2023 – December 2023",
    blurb:
      "Created a UNIX-like operating system in C, complete with system calls, a FAT-style file system, process scheduling, and an integrated shell. Implemented round-robin scheduling and support for both built-in commands and user programs. The project provided an environment to explore OS concepts including concurrency, file management, and resource allocation.",
    stack: ["C", "Linux", "File Systems", "Scheduling"],
    links: [
      { label: "GitHub", href: "https://github.com/lukashchu/PennOS" },
    ],
  },
  {
    name: "QuickConvert",
    time: "April 2024 – May 2024",
    blurb:
      "Built QuickConvert, a Chrome extension that lets users highlight a currency and instantly see it converted into a target currency. The extension uses the CurrencyLayer API for live exchange rates, cached every eight hours to minimize requests. Users can select their desired target currency in a popup menu, providing a lightweight and efficient browsing tool.",
    stack: ["JavaScript", "Chrome API", "CurrencyLayer API"],
    links: [
      { label: "GitHub", href: "https://github.com/grantwells10/quick-convert" },
    ],
  },
  {
    name: "AutoAvenue",
    time: "April 2024 – May 2024",
    blurb:
      "Developed a full-stack car review and search platform indexing more than 600,000 vehicles. Implemented optimized SQL queries and ranking logic that reduced query latency from over 30 seconds to under one second. The platform provided a React front-end and Node.js backend connected to a MySQL database, allowing seamless browsing, searching, and reviewing of vehicles.",
    stack: ["MySQL", "React", "Node.js", "SQL"],
    links: [
      { label: "GitHub", href: "https://github.com/hrizwan3/AutoAvenue" },
    ],
  },
  {
    name: "RISC-V Pipeline",
    time: "January 2024 – May 2024",
    blurb:
      "Collaborated on a 5-stage RISC-V processor implemented in SystemVerilog. The design incorporated branch prediction, integrated memory, and hazard handling. Built in a Dockerized environment, the processor was tested against a suite of RISC-V assembly programs to ensure correctness and efficiency. Pipeline stages and the datapath were optimized to achieve high throughput and robust performance.",
    stack: ["RISC-V", "SystemVerilog", "Docker"],
    links: [],
  },
  {
    name: "Flight Delays and Cancellations",
    time: "December 2023",
    blurb:
      "Analyzed airline data in a three-person project to predict delays and cancellations. Applied machine learning techniques including Random Forests, Naive Bayes, Logistic Regression, and Neural Networks using Python libraries such as Pandas, Scikit-Learn, and TensorFlow. Focused on identifying predictive variables like date, time, and flight routes to improve model accuracy.",
    stack: ["Python", "Pandas", "Scikit-Learn", "TensorFlow"],
    links: [
      { label: "GitHub", href: "https://github.com/hrizwan3/Flight-Cancellations" },
    ],
  },
  {
    name: "Movie Grapher",
    time: "May 2024",
    blurb:
      "Implemented Movie Grapher, a tool for analyzing and recommending movies based on a graph of movies and actors from the IMDb database. The dataset was cleaned with Pandas, while the main logic was implemented in Java. Features included recommending movies based on favorites, finding actor or movie distances, and applying graph algorithms like triadic closure and neighborhood overlap to generate insights.",
    stack: ["Java", "Python", "Pandas", "Graph Algorithms"],
    links: [
      { label: "GitHub", href: "https://github.com/hrizwan3/Movie-Grapher" },
    ],
  },
  {
    name: "Sudoku Solver",
    time: "December 2023",
    blurb:
      "Built a command-line Sudoku solver and player in C++. The solver applied backtracking with arc-consistency algorithms to efficiently find solutions to complex puzzles. This project combined algorithm design with systems-level programming to create a practical and fast puzzle-solving application.",
    stack: ["C++", "Algorithms", "Backtracking"],
    links: [
      { label: "GitHub", href: "https://github.com/hrizwan3/Sudoku-Game-Solver" },
    ],
  },
];
