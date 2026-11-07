import projects from '../data/projects';
import ProjectCard from './ProjectCard';

function ProjectsSection() {
  return (
    <section id="projects" className="w-full border-t border-gray-100 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full border border-primary-dark/60 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-primary-dark">
            Portfolio
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary-dark sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-500">
            A selection of web applications and systems built with modern web technologies.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
