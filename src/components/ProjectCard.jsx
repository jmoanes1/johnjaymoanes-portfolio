import { ExternalLink, Github, ImagePlus } from 'lucide-react';

function ProjectCard({ project }) {
  const isGithubActive = project.githubUrl && project.githubUrl !== '#';
  const isLiveDemoActive = project.liveDemoUrl && project.liveDemoUrl !== '#';

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-primary-dark/15 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary-dark/30 hover:shadow-lg">
      {/* Project Thumbnail Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-50">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          loading="eager"
          decoding="async"
        />

        {/* Hover Overlay with GitHub / Live Demo / Full Screenshot Actions */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-primary-dark/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex items-center gap-2.5">
            <a
              href={project.liveDemoUrl}
              target={isLiveDemoActive ? '_blank' : undefined}
              rel={isLiveDemoActive ? 'noopener noreferrer' : undefined}
              aria-label={`Live demo of ${project.title}`}
              className={`inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-xs font-semibold uppercase tracking-widest transition-colors ${
                isLiveDemoActive
                  ? 'border-white/80 text-white hover:bg-white hover:text-primary-dark'
                  : 'pointer-events-none cursor-not-allowed border-white/30 text-white/40'
              }`}
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              target={isGithubActive ? '_blank' : undefined}
              rel={isGithubActive ? 'noopener noreferrer' : undefined}
              aria-label={`GitHub repository for ${project.title}`}
              className={`inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-xs font-semibold uppercase tracking-widest transition-colors ${
                isGithubActive
                  ? 'border-white/80 text-white hover:bg-white hover:text-primary-dark'
                  : 'pointer-events-none cursor-not-allowed border-white/30 text-white/40'
              }`}
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
          <a
            href={project.image}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/60 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-primary-dark"
          >
            <ImagePlus className="h-3.5 w-3.5" />
            View Full Screenshot
          </a>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-primary-dark/60">
          {project.category || 'Web App'}
        </p>

        <h3 className="mb-2.5 text-lg font-bold tracking-tight text-primary-dark">
          {project.title}
        </h3>

        <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-500">
          {project.description}
        </p>

        {/* Technology Badges */}
        <div className="mb-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-primary-dark/15 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-primary-dark/70"
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
            className={`inline-flex flex-1 items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-xs font-semibold uppercase tracking-widest transition-colors duration-200 ${
              isLiveDemoActive
                ? 'border-primary-dark/70 bg-white text-primary-dark hover:bg-primary-dark hover:text-white'
                : 'pointer-events-none cursor-not-allowed border-gray-200 text-gray-400'
            }`}
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target={isGithubActive ? '_blank' : undefined}
            rel={isGithubActive ? 'noopener noreferrer' : undefined}
            aria-label={`GitHub repository for ${project.title}`}
            className={`inline-flex flex-1 items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-xs font-semibold uppercase tracking-widest transition-colors duration-200 ${
              isGithubActive
                ? 'border-primary-dark/70 bg-white text-primary-dark hover:bg-primary-dark hover:text-white'
                : 'pointer-events-none cursor-not-allowed border-gray-200 text-gray-400'
            }`}
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
