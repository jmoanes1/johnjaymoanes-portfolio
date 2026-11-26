import { ExternalLink, Github } from 'lucide-react';

function ProjectCard({ project }) {
  const isGithubActive = project.githubUrl && project.githubUrl !== '#';
  const isLiveDemoActive = project.liveDemoUrl && project.liveDemoUrl !== '#';

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/90 dark:hover:border-slate-700 dark:hover:shadow-2xl dark:hover:shadow-blue-500/5">
      {/* Project Thumbnail Image with Clean White Overlay on Hover */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 dark:bg-slate-800">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />

        {/* Clean White Overlay with Quick Actions (UX enhanced) */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-white/85 p-4 opacity-0 backdrop-blur-sm transition-all duration-300 ease-in-out group-hover:opacity-100 dark:bg-slate-950/85">
          <a
            href={project.liveDemoUrl}
            target={isLiveDemoActive ? '_blank' : undefined}
            rel={isLiveDemoActive ? 'noopener noreferrer' : undefined}
            aria-label={`Live demo of ${project.title}`}
            className={`inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-wider shadow-sm transition-all duration-200 ${
              isLiveDemoActive
                ? 'bg-primary-dark text-white hover:bg-primary-dark/90 hover:shadow-md dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500'
                : 'pointer-events-none cursor-not-allowed bg-gray-200 text-gray-400 dark:bg-slate-800 dark:text-slate-600'
            }`}
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Live Demo
          </a>

          <a
            href={project.githubUrl}
            target={isGithubActive ? '_blank' : undefined}
            rel={isGithubActive ? 'noopener noreferrer' : undefined}
            aria-label={`GitHub repository for ${project.title}`}
            className={`inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-dark shadow-sm transition-all duration-200 hover:bg-gray-50 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800' ${
              isGithubActive
                ? ''
                : 'pointer-events-none cursor-not-allowed border-gray-200 text-gray-400 dark:border-slate-800 dark:text-slate-600'
            }`}
          >
            <Github className="h-3.5 w-3.5" />
            GitHub
          </a>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-primary-dark/60 dark:text-blue-400">
          {project.category || 'Web Application'}
        </p>

        <h3
          title={project.title}
          className="mb-2.5 truncate text-lg font-bold tracking-tight text-primary-dark transition-colors dark:text-white"
        >
          {project.title}
        </h3>

        <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-600 transition-colors dark:text-slate-400">
          {project.description}
        </p>

        {/* Technology Badges */}
        <div className="mb-6 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-gray-700 transition-colors dark:border-slate-800 dark:bg-slate-800/80 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-auto flex gap-3">
          <a
            href={project.liveDemoUrl}
            target={isLiveDemoActive ? '_blank' : undefined}
            rel={isLiveDemoActive ? 'noopener noreferrer' : undefined}
            aria-label={`Live demo of ${project.title}`}
            className={`inline-flex flex-1 items-center justify-center gap-2 rounded-lg border px-3.5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
              isLiveDemoActive
                ? 'border-primary-dark/70 bg-white text-primary-dark hover:bg-primary-dark hover:text-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:bg-blue-600 dark:hover:text-white'
                : 'pointer-events-none cursor-not-allowed border-gray-200 text-gray-400 dark:border-slate-800 dark:text-slate-600'
            }`}
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target={isGithubActive ? '_blank' : undefined}
            rel={isGithubActive ? 'noopener noreferrer' : undefined}
            aria-label={`GitHub repository for ${project.title}`}
            className={`inline-flex flex-1 items-center justify-center gap-2 rounded-lg border px-3.5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
              isGithubActive
                ? 'border-primary-dark/70 bg-white text-primary-dark hover:bg-primary-dark hover:text-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:bg-blue-600 dark:hover:text-white'
                : 'pointer-events-none cursor-not-allowed border-gray-200 text-gray-400 dark:border-slate-800 dark:text-slate-600'
            }`}
          >
            <Github className="h-3.5 w-3.5" />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
