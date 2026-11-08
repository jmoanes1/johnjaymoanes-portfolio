import { ArrowDown, Github, Linkedin } from 'lucide-react';
import profilePic from '../assets/profile.png';

function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center bg-white px-6 pb-24 pt-20"
    >
      <div className="mx-auto w-full max-w-3xl text-center">
        {/* Profile photo */}
        <div className="mb-8 flex justify-center">
          <img
            src={profilePic}
            alt="Portrait of John Jay Moanes"
            className="h-32 w-32 rounded-full object-cover shadow-md ring-2 ring-primary-dark/20 ring-offset-4 ring-offset-white sm:h-36 sm:w-36"
          />
        </div>

        {/* Headline */}
        <h1 className="text-4xl font-bold tracking-tight text-primary-dark sm:text-5xl lg:text-6xl">
          Hi, I&apos;m John Jay Moanes.
        </h1>

        {/* Sub-headline */}
        <p className="mt-4 text-2xl font-bold text-primary-dark sm:text-3xl">
          Full Stack Developer
        </p>

        {/* Description */}
        <p className="mt-5 text-base leading-relaxed text-gray-500 sm:text-lg">
          Passionate about coding and solving complex problems.
          <br />
          I love to learn new things and always open to new opportunities.
        </p>

        {/* Social icons & action buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <div className="flex gap-3">
            <a
              href="https://github.com/jmoanes1"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-dark text-white transition-opacity duration-200 hover:opacity-90"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/johnjaymoanes-webdev"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-dark text-white transition-opacity duration-200 hover:opacity-90"
            >
              <Linkedin size={22} />
            </a>
          </div>

          <a
            href="mailto:johnjaymoanes25@gmail.com"
            className="rounded-lg border border-primary-dark/70 px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-primary-dark transition-colors duration-200 hover:bg-primary-dark hover:text-white"
          >
            Get in touch
          </a>
          <a
            href="/resume.pdf"
            download="John-Jay-D.-Moanes-Resume.pdf"
            className="rounded-lg border border-primary-dark/70 px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-primary-dark transition-colors duration-200 hover:bg-primary-dark hover:text-white"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Scroll-down cue to Projects */}
      <a
        href="#projects"
        aria-label="Scroll down to Projects"
        className="group absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-primary-dark/60 transition-colors hover:text-primary-dark"
      >
        <span className="text-[10px] font-semibold uppercase tracking-widest">
          Projects
        </span>
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}

export default HeroSection;
