import React from "react";
import { Section } from "./ui/Section";
import { getPortfolioItems, getSiteSettings } from "@/lib/sanity.queries";
import { ShowcaseItem } from "./ShowcaseItem";

export async function PortfolioShowcase() {
  // Fetch portfolio items and site settings from Sanity
  const [portfolioItems, siteSettings] = await Promise.all([
    getPortfolioItems(),
    getSiteSettings(),
  ]);

  // If no Sanity data, show a message
  if (!portfolioItems || portfolioItems.length === 0) {
    return (
      <Section className="py-24 lg:py-32">
        <div className="max-w-xl mx-auto text-center space-y-4">
          <h3 className="text-base font-medium text-muted">
            No portfolio items yet
          </h3>
          <p className="text-sm text-muted">
            Create some portfolio items in Sanity Studio to see them here.
          </p>
          <a
            href="http://localhost:3333"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            Open Sanity Studio
          </a>
        </div>
      </Section>
    );
  }

  // Default values if site settings not configured
  const sectionTitle = siteSettings?.portfolioSectionTitle || "What we do:";
  const sectionHeading =
    siteSettings?.portfolioSectionHeading ||
    "+7 years of experience in designing across the entire product ecosystem.";
  const sectionDescription =
    siteSettings?.portfolioSectionDescription ||
    "From crafting intuitive interfaces, to partnering with developers, and producing marketing materials across multiple channels.";

  return (
    <div className="bg-background">
      {portfolioItems.map((project: any, index: number) => (
        <React.Fragment key={project._id}>
          <ShowcaseItem project={project} isFirst={index === 0} index={index} />
          <Section className="py-24 lg:py-32">
            <div className="max-w-xl mx-auto text-center space-y-4">
              <h3 className="text-[10px] font-medium text-muted uppercase tracking-wider">
                {sectionTitle}
              </h3>
              <div className="space-y-4">
                <p className="text-base lg:text-lg text-foreground font-semibold leading-tight">
                  {sectionHeading}
                </p>
                <p className="text-xs text-muted leading-relaxed max-w-sm mx-auto">
                  {sectionDescription}
                </p>
              </div>
            </div>
          </Section>
        </React.Fragment>
      ))}
    </div>
  );
}
