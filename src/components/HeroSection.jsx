import profilePic from '../assets/profile.png';
import { Github, Linkedin, Mail } from 'lucide-react';

function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-light-bg via-white to-light-bg">
      {/* Overlay background (adds depth and keeps content readable) — painted first, behind decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/80 via-white/50 to-transparent"></div>

      {/* Decorative background orbs — painted above overlay so they're visible */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-primary/30 to-primary-dark/20 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-gradient-to-br from-primary/25 to-primary/30 blur-3xl"></div>
        <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl"></div>
        <div className="absolute -bottom-16 -left-12 h-56 w-56 rounded-full bg-gradient-to-br from-primary-dark/12 to-transparent blur-3xl"></div>
      </div>

      {/* Subtle radial gradient for depth — painted above overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_#F3F6FA_0%,_transparent_70%)]"></div>

      {/* Subtle dot pattern for texture — painted above overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
        <div className="absolute top-20 left-1/4 h-1 w-1 rounded-full bg-primary-dark/15"></div>
        <div className="absolute top-36 right-1/3 h-1.5 w-1.5 rounded-full bg-primary/10"></div>
        <div className="absolute bottom-40 left-1/3 h-2 w-2 rounded-full bg-primary/15"></div>
        <div className="absolute top-1/2 left-1/2 h-1.5 w-1.5 rounded-full bg-primary-dark/10"></div>
        <div className="absolute bottom-20 right-1/4 h-1 w-1 rounded-full bg-primary/15"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-3xl px-6 text-center">
        {/* Profile Picture */}
        <div className="mb-8 flex justify-center">
          <img
            src={profilePic}
            alt="John Jay Moanes profile photo"
            className="h-40 w-40 rounded-full border-2 border-light-bg bg-light-bg object-cover shadow-md transition-shadow duration-300 hover:shadow-lg"
          />
        </div>

        {/* Professional Label */}
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
          Aspiring Junior Web Developer
        </p>

        {/* Name */}
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-primary-dark sm:text-5xl">
          John Jay Moanes
        </h1>

        {/* Description */}
        <p className="mx-auto max-w-xl text-lg leading-relaxed text-gray-600">
          I'm a flexible and resourceful person who loves exploring new
          challenges and learning along the way. I'm always striving to improve
          and give my best in everything I do.
        </p>

        {/* Primary Call-to-Action: smoothly scroll down to the projects section */}
        <div className="mt-12">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-md bg-primary-dark px-8 py-3 text-sm font-medium text-white shadow-sm transition-colors duration-200 hover:opacity-90 hover:shadow"
          >
            View Project
          </a>
        </div>

        {/* Social / Contact Links */}
        <div className="mt-10 flex justify-center gap-5">
          <a
            href="https://github.com/jmoanes1"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full text-gray-500 ring-1 ring-gray-200 transition-colors hover:bg-light-bg hover:text-primary-dark"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/johnjaymoanes-webdev"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full text-gray-500 ring-1 ring-gray-200 transition-colors hover:bg-light-bg hover:text-primary-dark"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:johnjaymoanes25@gmail.com"
            aria-label="Email"
            className="flex h-11 w-11 items-center justify-center rounded-full text-gray-500 ring-1 ring-gray-200 transition-colors hover:bg-light-bg hover:text-primary-dark"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
