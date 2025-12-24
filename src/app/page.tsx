import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/features/Hero";
import { ProblemSection } from "@/components/features/ProblemSection";
import { Comparison } from "@/components/features/Comparison";
import { Installation } from "@/components/features/Installation";
import { Features } from "@/components/features/Features";
import { AudioDemo } from "@/components/features/AudioDemo";
import { RoiCalculator } from "@/components/features/RoiCalculator";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary/30">
      <Header />
      <Hero />
      <ProblemSection />
      <Comparison />
      <Features />
      <AudioDemo />
      <RoiCalculator />
      <Installation />
      <Footer />
    </main>
  );
}
