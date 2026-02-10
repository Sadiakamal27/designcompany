import React from "react";

export function Footer() {
  return (
    <footer className="py-16 bg-background">
      <div className="container mx-auto px-6 text-center">
        <p className="text-[10px] text-muted">
          © {new Date().getFullYear()} DesignCompany. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
