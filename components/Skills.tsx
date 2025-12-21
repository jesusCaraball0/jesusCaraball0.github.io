const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"],
  },
  {
    category: "ML/AI",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "OpenCV"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "TypeScript"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "GraphQL", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Tools & Others",
    skills: ["Git", "Docker", "AWS", "Linux", "CI/CD", "Jupyter"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.category}
              className="bg-gray-100 border border-gray-300 rounded-lg p-6 hover:border-gray-400 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-black mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm text-black hover:bg-gray-50 transition-colors"
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
