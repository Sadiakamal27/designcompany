import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { PortfolioShowcase } from "@/components/PortfolioShowcase";
import { Footer } from "@/components/Footer";

// Revalidate every 10 seconds to see Sanity changes quickly
export const revalidate = 10;

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <PortfolioShowcase />
      </main>
      
    </>
  );
}
