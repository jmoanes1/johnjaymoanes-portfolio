import { useState, useRef } from 'react';
import { ArrowDown, Github, Linkedin, FileText, Mail, Sparkles } from 'lucide-react';
import profilePic from '../assets/profile.png';

function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-slate-950 px-6 pb-20 pt-28 sm:pt-32"
    >
      {/* Interactive cursor-tracking radial glow animation */}
      <div
        className="pointer-events-none absolute -inset-[100px] transition-opacity duration-700 ease-out"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}% ${mousePos.y}%, rgba(59, 130, 246, ${
            isHovered ? 0.16 : 0.08
          }), transparent 75%)`,
        }}
      />

      {/* Ambient background particles/glows */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[450px] w-[450px] animate-pulse rounded-full bg-blue-600/10 blur-[130px] sm:h-[600px] sm:w-[600px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
        {/* Availability Badge with hover pulse */}
        <div className="group/badge mb-6 inline-flex cursor-pointer items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-4 py-1.5 text-xs text-slate-300 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-emerald-500/40 hover:bg-slate-900 hover:text-white hover:shadow-lg hover:shadow-emerald-500/10">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          <span className="transition-colors group-hover/badge:text-emerald-300">Available for new opportunities</span>
          <Sparkles className="h-3 w-3 text-emerald-400 opacity-0 transition-opacity duration-300 group-hover/badge:opacity-100" />
        </div>

        {/* Profile Avatar with glow and 3D hover tilt / scale */}
        <div className="mb-8 flex justify-center">
          <div className="group/avatar relative cursor-pointer">
            {/* Hover aura glow behind avatar */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 blur-md transition-all duration-500 group-hover/avatar:opacity-70 group-hover/avatar:blur-lg" />
            <img
              src={profilePic}
              alt="Portrait of John Jay Moanes"
              className="relative h-28 w-28 rounded-full object-cover shadow-2xl ring-2 ring-slate-800 ring-offset-4 ring-offset-slate-950 transition-all duration-500 ease-out group-hover/avatar:scale-110 group-hover/avatar:ring-blue-400 sm:h-32 sm:w-32"
            />
          </div>
        </div>

        {/* Headline with interactive gradient hover shimmer */}
        <h1 className="group/name cursor-default text-3xl font-extrabold tracking-tight text-white transition-all duration-300 sm:text-5xl lg:text-6xl">
          <span className="inline-block transition-transform duration-300 group-hover/name:-translate-y-0.5">
            John Jay Moanes
          </span>
        </h1>

        {/* Role title with interactive glow on hover */}
        <div className="group/role mt-3 inline-block cursor-default">
          <p className="text-lg font-semibold tracking-wide text-blue-400 transition-all duration-300 group-hover/role:text-blue-300 group-hover/role:drop-shadow-[0_0_12px_rgba(96,165,250,0.5)] sm:text-xl">
            Full Stack Developer
          </p>
        </div>

        {/* Clean description with subtle highlight on hover */}
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-400 transition-colors duration-300 hover:text-slate-300 sm:text-base">
          Building responsive web applications and clean digital experiences with modern web technologies, Python, and React.
        </p>

        {/* Action Buttons & Links with refined hover physics */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="#contact"
            className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-blue-600 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/40 active:translate-y-0"
          >
            <Mail className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:rotate-12" />
            <span>Get In Touch</span>
          </a>

          <a
            href="/resume.pdf"
            download="John-Jay-D.-Moanes-Resume.pdf"
            className="group/resume inline-flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-900/90 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-800 hover:text-white hover:shadow-lg hover:shadow-blue-500/10 active:translate-y-0"
          >
            <FileText className="h-3.5 w-3.5 transition-transform duration-300 group-hover/resume:scale-110" />
            <span>Resume</span>
          </a>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/jmoanes1"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900/80 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-800 hover:text-white hover:shadow-md hover:shadow-white/5 active:translate-y-0"
            >
              <Github size={18} className="transition-transform duration-300 hover:scale-110" />
            </a>
            <a
              href="https://www.linkedin.com/in/johnjaymoanes-webdev"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900/80 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-800 hover:text-blue-400 hover:shadow-md hover:shadow-blue-500/10 active:translate-y-0"
            >
              <Linkedin size={18} className="transition-transform duration-300 hover:scale-110" />
            </a>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Cue with bounce on hover */}
      <a
        href="#projects"
        aria-label="Scroll down to Projects"
        className="group absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5 text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:text-blue-400"
      >
        <span className="text-[10px] font-semibold uppercase tracking-widest transition-colors group-hover:text-slate-300">
          Explore
        </span>
        <ArrowDown className="h-4 w-4 animate-bounce transition-transform group-hover:scale-125" />
      </a>
    </section>
  );
}

export default HeroSection;
