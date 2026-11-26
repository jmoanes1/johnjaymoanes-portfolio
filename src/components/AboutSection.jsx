import { Code2, Server, Database, Layout, Wrench } from 'lucide-react';

function AboutSection() {
  const skillCategories = [
    {
      name: 'Front-End',
      icon: Layout,
      skills: ['React.js', 'Redux', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5', 'CSS3'],
    },
    {
      name: 'Back-End',
      icon: Server,
      skills: ['Python', 'Django', 'Node.js', 'REST APIs'],
    },
    {
      name: 'Databases',
      icon: Database,
      skills: ['PostgreSQL', 'MySQL', 'Database Design'],
    },
    {
      name: 'CMS & Growth',
      icon: Code2,
      skills: ['WordPress', 'Website Customization', 'SEO Optimization'],
    },
    {
      name: 'Tools & Design',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'AWS', 'Figma (UI/UX)', 'Adobe Photoshop', 'Illustrator'],
    },
  ];

  return (
    <section id="about" className="relative w-full scroll-mt-24 border-t border-slate-900 bg-slate-950 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
            About & Technical Stack
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Skills & Background
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Web Developer passionate about building responsive, functional, and user-centric web applications.
            Skilled in modern full-stack workflows using Python, Django, React.js, and PostgreSQL.
          </p>
        </div>

        {/* Clean Skills Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.name}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/70"
              >
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-sm font-semibold tracking-wide text-white">
                      {cat.name}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-slate-800 bg-slate-950/80 px-2.5 py-1 text-xs font-medium text-slate-300 transition-colors group-hover:border-slate-700 group-hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
