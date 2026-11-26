import projects from '../data/projects';
import ProjectCard from './ProjectCard';

function ProjectsSection() {
  return (
    <section id="projects" className="relative w-full scroll-mt-24 border-t border-slate-900 bg-slate-950 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
            Selected Works
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Featured Projects
          </h2>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
