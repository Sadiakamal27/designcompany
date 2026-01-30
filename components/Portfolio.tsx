"use client";

import React, { useState } from "react";
import { Section, SectionHeader } from "./ui/Section";
import { Button } from "./ui/Button";
import { Card, CardTitle, CardDescription, CardContent } from "./ui/Card";
import portfolioData from "@/lib/portfolio-data.json";

export function Portfolio() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState("all");

  const categories = ["all", ...new Set(projects.map((p) => p.category))];
  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section id="work" className="bg-zinc-50">
      <SectionHeader
        title="Selected work"
        subtitle="Transforming ideas into exceptional digital experiences"
      />

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-12 justify-center">
        {categories.map((category) => (
          <Button
            key={category}
            variant={filter === category ? "primary" : "ghost"}
            size="sm"
            onClick={() => setFilter(category)}
            className={
              filter !== category ? "bg-white border border-border" : ""
            }
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group animate-scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Card hover className="h-full overflow-hidden p-0">
              {/* Project Image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-zinc-100 to-zinc-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-zinc-300 group-hover:scale-110 transition-transform duration-500">
                  {project.title.charAt(0)}
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-300" />
              </div>

              {/* Project Info */}
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-muted uppercase tracking-wider">
                    {project.category}
                  </span>
                  <svg
                    className="w-5 h-5 text-muted group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
                <CardTitle className="text-2xl mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-zinc-100 text-foreground text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </Section>
  );
}
