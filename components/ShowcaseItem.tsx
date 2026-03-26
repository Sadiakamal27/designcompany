"use client";

import React, { useRef, useEffect, useState } from "react";
import { Button } from "./ui/Button";
import Image from "next/image";
import { getImageUrl, getImageAlt } from "@/lib/contentful.client";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface ShowcaseItemProps {
  project: any;
  isFirst?: boolean;
  index: number;
}

export function ShowcaseItem({ project, isFirst, index }: ShowcaseItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const stickyPoint = 81;
        const sticky = rect.top <= stickyPoint;
        setIsSticky(sticky);

        const currentScrollY = window.scrollY;
        if (Math.abs(currentScrollY - lastScrollY.current) > 10) {
          setIsExpanded(false);
          lastScrollY.current = currentScrollY;
        }
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }

        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {});
          } else {
            videoRef.current.pause();
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      },
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isExpanded]);

  const tags =
    project.tags && project.tags.length > 0
      ? project.tags
      : project.category
        ? [project.category]
        : [];

  const uploadedVideoUrl = project.videoUrl && (
    !project.videoUrl.includes("youtube.com") &&
    !project.videoUrl.includes("youtu.be") &&
    !project.videoUrl.includes("vimeo.com")
      ? project.videoUrl
      : null
  );

  return (
    <div ref={sectionRef}>
      <div className={`${isFirst ? "pb-24 lg:pb-32 pt-0" : "py-24 lg:py-32"}`}>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start px-4 sm:px-6 lg:px-8">
          {/* Left Column - Sticky Description */}
          <div className="lg:col-span-3 sticky top-20 z-10 bg-background py-4 lg:top-40 lg:py-0 lg:bg-transparent lg:z-auto">
            <div
              className={`transition-opacity transition-transform duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <div className={`transition-all duration-500 overflow-hidden ${
                isSticky && !isExpanded ? "max-h-12 lg:max-h-none opacity-50 lg:opacity-100" : "max-h-[1000px] opacity-100"
              }`}>
                <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-4">
                  {project.title}
                </h2>
                <div className="text-[11px] lg:text-xs text-foreground mb-8 leading-relaxed">
                  {typeof project.description === 'object' ? (
                    documentToReactComponents(project.description)
                  ) : (
                    <p>{project.description || project.shortDescription || ""}</p>
                  )}
                </div>

                {tags.length > 0 && (
                  <div className="space-y-4 mb-12">
                    <h4 className="text-[9px] font-bold text-foreground uppercase tracking-widest">
                      Partnered on:
                    </h4>
                    <ul className="space-y-2">
                      {tags.map((tag: string, idx: number) => (
                        <li key={idx} className="flex items-center gap-2 text-foreground transition-all">
                          <span className="text-muted text-[10px]">→</span>
                          <span className="text-[10px]">{tag}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

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

              {/* Mobile "Read More" Toggle */}
              {isSticky && !isExpanded && (
                <button 
                  onClick={() => setIsExpanded(true)}
                  className="lg:hidden mt-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-primary animate-pulse"
                >
                  Read info <span className="text-xs">↓</span>
                </button>
              )}
              {isSticky && isExpanded && (
                 <button 
                  onClick={() => setIsExpanded(false)}
                  className="lg:hidden mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-muted hover:text-foreground"
                 >
                   Hide info <span className="text-xs">↑</span>
                 </button>
              )}
            </div>
          </div>

          {/* Center Column - Large Media */}
          <div className="lg:col-span-9 lg:col-start-4 relative">
            <div
              className={`w-full space-y-8 transition-opacity transition-transform duration-1000 delay-200 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <div className="relative aspect-[4/5] lg:aspect-[16/10] bg-zinc-50 rounded-lg overflow-hidden group shadow-sm border border-border/50">
                {uploadedVideoUrl ? (
                  <video ref={videoRef} className="w-full h-full object-cover" playsInline muted loop>
                    <source src={uploadedVideoUrl} type="video/mp4" />
                  </video>
                ) : project.videoUrl ? (
                  project.videoUrl.includes("youtube.com") ||
                  project.videoUrl.includes("youtu.be") ||
                  project.videoUrl.includes("vimeo.com") ? (
                    <iframe
                      src={project.videoUrl}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                      <source src={project.videoUrl} type="video/mp4" />
                    </video>
                  )
                ) : project.mainImage ? (
                  <Image
                    src={getImageUrl(project.mainImage, 1200, 900)}
                    alt={getImageAlt(project.mainImage, project.title)}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority={isFirst}
                  />
                ) : project.images && project.images.length > 0 ? (
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority={isFirst}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-zinc-100">
                    <span className="text-[10px] text-muted uppercase tracking-widest">{project.title}</span>
                  </div>
                )}
              </div>

              {/* Gallery images */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="grid grid-cols-1 gap-8">
                  {project.gallery.map((image: any, idx: number) => (
                    <div key={idx} className="relative aspect-[4/3] bg-zinc-50 rounded-lg overflow-hidden border border-border/30 group/img">
                      <Image
                        src={getImageUrl(image, 1200, 900)}
                        alt={getImageAlt(image, `${project.title} detail ${idx + 1}`)}
                        fill
                        className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                        sizes="100vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/5 transition-colors duration-300" />
                    </div>
                  ))}
                </div>
              )}

              {/* Rich Text Content */}
              {project.content && (
                <div className="pt-8 border-t border-border/30 px-4 sm:px-6 lg:px-8">
                  <div className="prose prose-sm lg:prose-base prose-zinc dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                    {typeof project.content === 'object' ? (
                      documentToReactComponents(project.content)
                    ) : (
                      <p>{project.content}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
