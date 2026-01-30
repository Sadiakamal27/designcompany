"use client";

import React, { useRef, useEffect, useState } from "react";
import { Section } from "./ui/Section";
import { Button } from "./ui/Button";
import Image from "next/image";
import portfolioData from "@/lib/portfolio-data.json";

interface ShowcaseProject {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  videoUrl: string;
  images: string[];
  tags: string[];
  year: string;
  client: string;
}

export function PortfolioShowcase() {
  const { showcaseProjects } = portfolioData as {
    showcaseProjects: ShowcaseProject[];
  };

  return (
    <div className="bg-background">
      {showcaseProjects.map((project, index) => (
        <React.Fragment key={project.id}>
          <ShowcaseItem project={project} isFirst={index === 0} index={index} />
          <Section className="py-24 lg:py-32">
            <div className="max-w-xl mx-auto text-center space-y-4">
              <h3 className="text-[10px] font-medium text-muted uppercase tracking-wider">
                What we do:
              </h3>
              <div className="space-y-4">
                <p className="text-base lg:text-lg text-foreground font-semibold leading-tight">
                  +7 years of experience in designing across the entire product
                  ecosystem.
                </p>
                <p className="text-xs text-muted leading-relaxed max-w-sm mx-auto">
                  From crafting intuitive interfaces, to partnering with
                  developers, and producing marketing materials across multiple
                  channels.
                </p>
              </div>
            </div>
          </Section>
        </React.Fragment>
      ))}
    </div>
  );
}

function ShowcaseItem({
  project,
  isFirst,
  index,
}: {
  project: ShowcaseProject;
  isFirst?: boolean;
  index: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef}>
      <div
        className={`container mx-auto px-6 lg:px-8 ${isFirst ? "pb-24 lg:pb-32 pt-0" : "py-24 lg:py-32"}`}
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column - Sticky Description */}
          <div className="lg:col-span-4 lg:sticky lg:top-40">
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <p className="text-[11px] lg:text-xs text-foreground mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-4 mb-12">
                <h4 className="text-[9px] font-bold text-foreground uppercase tracking-widest">
                  Partnered on:
                </h4>
                <ul className="space-y-2">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-foreground transition-all"
                    >
                      <span className="text-muted text-[10px]">→</span>
                      <span className="text-[10px]">{tag}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="p-0 h-auto font-semibold text-[10px] hover:bg-transparent hover:opacity-70 group"
              >
                Work together
                <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Button>
            </div>
          </div>

          {/* Center Column - Large Media */}
          <div className="lg:col-span-6">
            <div
              className={`w-full space-y-8 transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <div className="relative aspect-[4/5] lg:aspect-[16/10] bg-zinc-50 rounded-lg overflow-hidden group shadow-sm mx-auto border border-border/50">
                {project.videoUrl ? (
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={project.videoUrl} type="video/mp4" />
                  </video>
                ) : project.images && project.images.length > 0 ? (
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={isFirst}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-zinc-100">
                    <span className="text-[10px] text-muted uppercase tracking-widest">
                      {project.title}
                    </span>
                  </div>
                )}
              </div>

              {/* Grid of images below the main media */}
              <div className="grid grid-cols-1 gap-8">
                {(project.images && project.images.length > 1
                  ? project.images.slice(1)
                  : project.images
                )
                  .slice(0, 3)
                  .map((image, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-[4/3] bg-zinc-50 rounded-lg overflow-hidden border border-border/30 group/img"
                    >
                      <Image
                        src={
                          image && !image.includes("placeholder")
                            ? image
                            : `https://images.unsplash.com/photo-${
                                [
                                  "1498050108023-c5249f4df085", // code
                                  "1555066931-4365d14bab8c", // laptop
                                  "1581291518066-66487e6d0a7f", // mobile
                                  "1517694712202-14dd9538aa97", // imac
                                  "1522202176988-66273c2fd55f", // meeting
                                  "1519389950473-47ba0277781c", // dev
                                ][(index * 3 + idx) % 6]
                              }?auto=format&fit=crop&w=1200&q=80`
                        }
                        alt={`${project.title} detail ${idx + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/5 transition-colors duration-300" />
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Right Column - Spacer to show centering */}
          <div className="hidden lg:block lg:col-span-2" />
        </div>
      </div>
    </div>
  );
}
