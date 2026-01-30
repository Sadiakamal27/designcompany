import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { PortfolioShowcase } from "@/components/PortfolioShowcase";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <PortfolioShowcase />
      </main>
      <Footer />
    </>
  );
}
