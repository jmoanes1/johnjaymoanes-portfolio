import { useState } from 'react';
import { ExternalLink, Github, ImagePlus, KeyRound, Copy, Check } from 'lucide-react';

function ProjectCard({ project }) {
  const [copied, setCopied] = useState(false);
  const isGithubActive = project.githubUrl && project.githubUrl !== '#';
  const isLiveDemoActive = project.liveDemoUrl && project.liveDemoUrl !== '#';
  const hasDemoAccount =
    project.demoAccount && project.demoAccount.username && project.demoAccount.password;

  const handleCopyCredentials = () => {
    if (!hasDemoAccount) return;
    const text = `Username: ${project.demoAccount.username}\nPassword: ${project.demoAccount.password}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Project Thumbnail Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-50">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          loading="eager"
          decoding="async"
        />

        {/* Hover Overlay with View High-Res Action */}
        <div className="absolute inset-0 flex items-center justify-center bg-primary-dark/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <a
            href={project.image}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-primary-dark shadow-md transition-colors hover:bg-gray-50"
          >
            <ImagePlus className="h-4 w-4 text-primary" />
            View Full Screenshot
          </a>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-gray-400">
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
              className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-xs font-medium text-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Demo Account Box */}
        {hasDemoAccount && (
          <div className="mb-5 flex items-center justify-between gap-3 rounded-lg bg-light-bg px-3.5 py-2.5">
            <div className="min-w-0">
              <span className="mb-0.5 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                <KeyRound className="h-3 w-3" />
                Demo Account
              </span>
              <p className="truncate font-mono text-xs text-gray-600">
                {project.demoAccount.username}
                <span className="mx-1.5 text-gray-300">/</span>
                {project.demoAccount.password}
                {project.demoAccount.role && (
                  <span className="ml-2 font-sans text-[11px] text-gray-400">
                    ({project.demoAccount.role.trim()})
                  </span>
                )}
              </p>
            </div>
            <button
              type="button"
              onClick={handleCopyCredentials}
              aria-label="Copy demo credentials"
              className="flex shrink-0 items-center gap-1.5 rounded-md border border-gray-200 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:border-gray-300 hover:text-primary-dark cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  Copy
                </>
              )}
            </button>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-auto flex gap-3">
          <a
            href={project.liveDemoUrl}
            target={isLiveDemoActive ? '_blank' : undefined}
            rel={isLiveDemoActive ? 'noopener noreferrer' : undefined}
            aria-label={`Live demo of ${project.title}`}
            className={`inline-flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
              isLiveDemoActive
                ? 'bg-primary-dark text-white hover:bg-primary-dark/90'
                : 'pointer-events-none cursor-not-allowed bg-gray-100 text-gray-400'
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
            className={`inline-flex flex-1 items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
              isGithubActive
                ? 'border-gray-200 bg-white text-primary-dark hover:border-gray-300 hover:bg-gray-50'
                : 'pointer-events-none cursor-not-allowed border-gray-100 bg-gray-100 text-gray-400'
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
