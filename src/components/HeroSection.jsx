import { ArrowDown, Github, Linkedin, FileText, Mail } from 'lucide-react';
import profilePic from '../assets/profile.png';

function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center bg-white px-6 pb-24 pt-24 transition-colors duration-300 dark:bg-slate-950"
    >
      <div className="mx-auto w-full max-w-3xl text-center">
        {/* Profile photo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img
              src={profilePic}
              alt="Portrait of John Jay Moanes"
              className="h-32 w-32 rounded-full object-cover shadow-lg ring-2 ring-primary-dark/20 ring-offset-4 ring-offset-white transition-all duration-300 dark:ring-blue-400/30 dark:ring-offset-slate-950 sm:h-36 sm:w-36"
            />
            <span className="absolute bottom-1 right-1 flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-white bg-emerald-500 dark:border-slate-950"></span>
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl font-bold tracking-tight text-primary-dark transition-colors dark:text-white sm:text-5xl lg:text-6xl">
          Hi, I&apos;m John Jay Moanes.
        </h1>

        {/* Sub-headline */}
        <p className="mt-4 text-2xl font-bold text-primary-dark transition-colors dark:text-blue-400 sm:text-3xl">
          Full Stack Developer
        </p>

        {/* Description */}
        <p className="mt-5 text-base leading-relaxed text-gray-600 transition-colors dark:text-slate-300 sm:text-lg">
          Passionate about coding, building responsive web applications, and solving complex problems.
          <br />
          Always eager to learn new technologies and open to exciting opportunities.
        </p>

        {/* Social icons & action buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <div className="flex gap-2.5">
            <a
              href="https://github.com/jmoanes1"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-dark text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-dark/90 hover:shadow-md dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/johnjaymoanes-webdev"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-dark text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-dark/90 hover:shadow-md dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              <Linkedin size={20} />
            </a>
          </div>

          <a
            href="mailto:johnjaymoanes25@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary-dark shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            <Mail className="h-3.5 w-3.5" />
            Get in touch
          </a>

          <a
            href="/resume.pdf"
            download="John-Jay-D.-Moanes-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-xl bg-primary-dark px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-dark/90 hover:shadow-md dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500"
          >
            <FileText className="h-3.5 w-3.5" />
            Resume
          </a>
        </div>
      </div>

      {/* Scroll-down cue to Projects */}
      <a
        href="#projects"
        aria-label="Scroll down to Projects"
        className="group absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-primary-dark/60 transition-colors hover:text-primary-dark dark:text-slate-400 dark:hover:text-white"
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
