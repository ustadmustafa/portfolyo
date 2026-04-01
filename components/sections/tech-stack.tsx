const techCategories = [
  {
    name: "Backend",
    technologies: ["C#", ".NET", "ASP.NET Core", "REST APIs"]
  },
  {
    name: "Frontend",
    technologies: ["JavaScript", "HTML", "CSS", "Tailwind CSS"]
  },
  {
    name: "Database & Tools",
    technologies: ["SQL Server", "Git", "GitHub", "Postman"]
  },
  {
    name: "Testing & Development",
    technologies: ["Unit Testing", "Visual Studio", "Swagger", "IIS"]
  },
  {
    name: "Currently Exploring",
    technologies: ["Go", "Python", "System Design", "Modern Web Development"]
  }
];

export function TechStack() {
  return (
    <section id="stack" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-2xl font-bold tracking-tight">Tech Stack</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category) => (
            <div 
              key={category.name}
              className="glass rounded-xl p-6"
            >
              <h3 className="text-sm font-medium text-primary mb-4 uppercase tracking-wider">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm font-medium hover:bg-secondary/80 transition-colors"
                  >
                    {tech}
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
