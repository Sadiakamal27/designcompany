"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md  shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-center h-20">
          {/* Centered Logo */}
          <Link
            href="/"
            className="text-sm font-bold text-foreground hover:opacity-80 transition-opacity"
          >
            DesignCompany
          </Link>
        </div>
      </div>
    </nav>
  );
}
