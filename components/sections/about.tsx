import { Code2, Server, Lightbulb, Blocks } from "lucide-react";

const highlights = [
  {
    icon: Server,
    title: "Backend Focus",
    description: "Focused on building backend applications, APIs, and practical systems that solve real problems."
  },
  {
    icon: Code2,
    title: "Clean & Purposeful Code",
    description: "I care about writing clear, maintainable code and improving the way I build software over time."
  },
  {
    icon: Blocks,
    title: "Learning by Building",
    description: "I enjoy exploring new technologies and improving my skills through hands-on projects and experimentation."
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "I like turning ideas into working products and finding simple solutions to real development challenges."
  }
];

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-2xl font-bold tracking-tight">About Me</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a backend-focused software developer who enjoys building practical applications and turning ideas into real projects. I’m especially interested in creating clean, functional systems and improving my skills by working on real-world problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
            I like learning by building — whether it’s developing APIs, experimenting with new technologies, or working on projects that help me grow as an engineer. I care about writing code that is understandable, maintainable, and built with purpose.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
            Outside of coding, I enjoy exploring new tools, working on side projects, and continuously improving myself as a developer.
            </p>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div 
                key={item.title}
                className="glass rounded-lg p-5 hover:border-primary/30 transition-colors"
              >
                <item.icon className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
