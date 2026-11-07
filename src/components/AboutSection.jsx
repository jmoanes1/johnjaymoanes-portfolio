function AboutSection() {
  const technologies = ['Python', 'Django', 'React.js', 'Node.js', 'JavaScript', 'Tailwind CSS', 'PostgreSQL'];

  return (
    <section id="about" className="w-full border-t border-gray-100 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="inline-block rounded-full border border-primary-dark/60 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-primary-dark">
          About
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary-dark sm:text-4xl">
          About Me
        </h2>
        <p className="mt-6 text-base leading-relaxed text-gray-500 sm:text-lg">
          I&apos;m a web developer passionate about building responsive, functional, and
          user-friendly web applications. I work with Python, Django, React.js, and modern
          web technologies to create practical solutions. I&apos;m always eager to learn new
          technologies, take on challenges, and continuously improve my development skills.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-primary-dark/15 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-primary-dark/70"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
