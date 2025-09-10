
export default function Home() {
  return (
    <section id="home" aria-label="About" className="space-y-8 scroll-mt-24">
      <h2 className="text-2xl font-bold tracking-tight border-b border-neutral-200 pb-2 dark:border-neutral-700">
        About Me
      </h2>

      <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
        <p>
          I'm an Accelerated Master's student in Computer Science at the
          University of Pennsylvania, where I also completed my undergraduate
          degree with a minor in Mathematics. I'm passionate about computer
          systems, distributed computing, and AI, and I enjoy tackling
          challenges that combine infrastructure with intelligence at scale.
        </p>
        <p>
          In industry, I worked at Amazon on MLOps infrastructure,
          building scalable pipelines to make models faster and more reliable.
          On campus, I've taught graduate-level courses in Big Data Analytics
          and Computer Systems Programming, where I led recitations, mentored
          projects, and supported hundreds of students in mastering
          data-intensive systems and low-level programming.
        </p>
        <p>
          Outside of work and academics, I enjoy listening to music, watching
          movies and documentaries, and spending time outdoors hiking and
          kayaking.
        </p>
      </div>
    </section>
  );
}
