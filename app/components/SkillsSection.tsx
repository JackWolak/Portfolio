export default function SkillsSection() {
  const skillGroups = [
    {
      label: "Languages & Frameworks",
      skills: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "TailwindCSS", "SQL", "Python", "Java"],
    },
    {
      label: "Platforms & Tools",
      skills: ["Zoho Creator", "Zoho Desk", "Deluge", "Git"],
    },
  ];

  return (
    <section className="bg-gray-800 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Skills</h2>
        <div className="flex flex-col gap-8">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4 text-center">
                {group.label}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-gray-700 p-4 sm:p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow hover:shadow-gray-500 text-sm sm:text-base text-gray-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
