import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

function ProjectCard({ project }) {
  const isGithubActive = project.githubUrl && project.githubUrl !== '#';
  const isLiveDemoActive = project.liveDemoUrl && project.liveDemoUrl !== '#';

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:shadow-2xl hover:shadow-blue-500/5">
      {/* Project Thumbnail with subtle white glass hover overlay */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950/60">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />

        {/* Clean white translucent overlay with action pills */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-white/90 p-4 opacity-0 backdrop-blur-sm transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          <a
            href={project.liveDemoUrl}
            target={isLiveDemoActive ? '_blank' : undefined}
            rel={isLiveDemoActive ? 'noopener noreferrer' : undefined}
            aria-label={`Live demo of ${project.title}`}
            className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider shadow-sm transition-all duration-200 ${
              isLiveDemoActive
                ? 'bg-slate-950 text-white hover:bg-slate-800 hover:shadow-md'
                : 'pointer-events-none cursor-not-allowed bg-gray-200 text-gray-400'
            }`}
          >
            <span>Live Demo</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          <a
            href={project.githubUrl}
            target={isGithubActive ? '_blank' : undefined}
            rel={isGithubActive ? 'noopener noreferrer' : undefined}
            aria-label={`GitHub repository for ${project.title}`}
            className={`inline-flex items-center gap-1.5 rounded-full border border-gray-300 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-900 shadow-sm transition-all duration-200 hover:bg-gray-100 hover:shadow-md ${
              isGithubActive
                ? ''
                : 'pointer-events-none cursor-not-allowed border-gray-200 text-gray-400'
            }`}
          >
            <Github className="h-3.5 w-3.5" />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
            {project.category || 'Web Application'}
          </span>
          <div className="flex items-center gap-2">
            {isLiveDemoActive && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
                className="text-slate-400 transition-colors hover:text-white"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
            {isGithubActive && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repo"
                className="text-slate-400 transition-colors hover:text-white"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <h3
          title={project.title}
          className="mt-2 text-xl font-bold tracking-tight text-white transition-colors group-hover:text-blue-400"
        >
          {project.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-800/80 pt-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-800 bg-slate-950/70 px-2.5 py-0.5 text-[11px] font-medium text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
