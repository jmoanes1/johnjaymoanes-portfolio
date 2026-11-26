function AboutSection() {
  const technicalSkills = {
    'Front-End': ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Redux', 'Tailwind CSS'],
    'Back-End': ['Python', 'Django', 'Node.js'],
    'Databases': ['MySQL', 'PostgreSQL'],
    'CMS & Optimization': ['WordPress', 'Website Customization', 'SEO Optimization'],
    'Tools & Platforms': ['Git', 'GitHub', 'AWS', 'Figma', 'Adobe Photoshop', 'Illustrator', 'InDesign'],
  };

  return (
    <section id="about" className="w-full scroll-mt-20 border-t border-gray-100 bg-white py-20 transition-colors duration-300 dark:border-slate-800/80 dark:bg-slate-900 sm:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <span className="inline-block rounded-full border border-primary-dark/60 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-primary-dark transition-colors dark:border-blue-400/60 dark:text-blue-400">
            About
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary-dark transition-colors dark:text-white sm:text-4xl">
            About Me
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-600 transition-colors dark:text-slate-300 sm:text-lg">
            Web Developer with hands-on experience developing responsive websites and functional web applications using Python, Django, React.js, JavaScript, HTML, CSS, and PostgreSQL. Skilled in building management systems, implementing CRUD operations, database management, UI development, and troubleshooting technical issues. Also experienced in WordPress website management, customization, and optimization. Passionate about creating practical, user-friendly web solutions and continuously improving development skills.
          </p>
        </div>

        {/* Skills Grouping */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(technicalSkills).map(([category, skills]) => (
            <div
              key={category}
              className="rounded-2xl border border-gray-100 bg-gray-50/70 p-5 backdrop-blur-sm transition-all duration-300 hover:border-blue-200/60 hover:shadow-sm dark:border-slate-800 dark:bg-slate-800/50 dark:hover:border-slate-700"
            >
              <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-primary-dark dark:text-blue-400">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-primary-dark/15 bg-white px-2.5 py-1 text-[11px] font-medium text-primary-dark/80 transition-colors dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
