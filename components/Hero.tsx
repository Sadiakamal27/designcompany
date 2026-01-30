import React from "react";
import { Button } from "./ui/Button";
import { Section } from "./ui/Section";

export function Hero() {
  return (
    <Section className="flex items-center justify-center pt-32 pb-12 px-6 lg:px-8 relative">
      <div className="max-w-2xl mx-auto text-center">
        {/* Main Headline */}
        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-4 leading-normal tracking-tight animate-fade-in">
          Design, build &amp; ship interfaces that accelerate products
        </h1>

        {/* Subtitle */}
        <p
          className="text-xs sm:text-[11px] lg:text-xs text-muted mb-8 max-w-lg mx-auto leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          Clear your design roadmap, activate users and design experiences that
          retain them.
        </p>

        {/* CTA Button */}
        <div
          className="animate-fade-in flex flex-col items-center gap-4"
          style={{ animationDelay: "0.2s" }}
        >
          <Button
            variant="primary"
            size="sm"
            href="#contact"
            className="rounded-full px-8 text-[10px]"
          >
            Message
          </Button>

          <Button
            variant="ghost"
            href="https://wa.me/yournumber"
            className="text-[#25D366] underline hover:bg-transparent hover:opacity-80 p-0 h-auto font-medium text-[10px]"
          >
            Whatsapp message
          </Button>
        </div>
      </div>
    </Section>
  );
}
