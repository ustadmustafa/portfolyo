import { Github, Linkedin, Mail, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/ustadmustafa" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/mustafaalbayrak3938/" },
  { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@mustafaalbayrak8957" },
  { name: "Email", icon: Mail, href: "mailto:albayrak.mustafa2001@gmail.com" }
];

export function Footer() {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Let&apos;s Connect</h2>
          <p className="text-muted-foreground">
            Open to discussing projects, opportunities, or just having a chat about tech.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map((link) => (
            <Button
              key={link.name}
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              asChild
            >
              <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                <link.icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Designed & Built by Mustafa Albayrak
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
