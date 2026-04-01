"use client";

import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "Celeriter",
    description: "A real-time chat platform built with SignalR, featuring secure authentication, email verification, and instant messaging.",
    tags: [".NET 8", "SignalR", "PostgreSQL", "Docker"],
    liveUrl: "https://celeriterclient.mustafaalbayrak.dev/",
    githubUrl: "https://github.com/ustadmustafa/Celeriter"
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-2xl font-bold tracking-tight">Featured Projects</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article 
              key={project.name}
              className="group glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <div className="flex items-center gap-2">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`View ${project.name} on GitHub`}
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`View ${project.name} live demo`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-2 py-1 rounded bg-secondary/50 text-xs font-mono text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
