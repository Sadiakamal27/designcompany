"use client";

import React from "react";
import { usePathname } from "next/navigation";

interface FooterProps {
  forceShow?: boolean;
}

export function Footer({ forceShow = false }: FooterProps) {
  const pathname = usePathname();

  // Don't show global footer on homepage since it's nested in the video section
  if (pathname === "/" && !forceShow) return null;

  return (
    <footer className={`py-16 ${forceShow ? "" : "bg-background"}`}>
      <div className="container mx-auto px-6 text-center">
        <p className="text-[10px] text-muted">
          © {new Date().getFullYear()} DesignCompany. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
