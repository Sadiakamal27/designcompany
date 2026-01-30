import React from "react";
import portfolioData from "@/lib/portfolio-data.json";

export function Footer() {
  const { projects } = portfolioData;

  return (
    <footer className="py-24 bg-background">
      <div className="container mx-auto px-6 text-center">
        <p className="text-xs font-medium text-foreground mb-8">
          Previous clients:
        </p>
        <div className="flex flex-col items-center gap-2">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground underline hover:text-foreground transition-colors"
            >
              {project.title}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
