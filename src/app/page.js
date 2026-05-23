import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticlesBg from "@/components/ParticlesBg";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-cyber-bg overflow-x-hidden flex flex-col">
      {/* Background Interactive Particles System */}
      <ParticlesBg />

      {/* Floating Sticky Header */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
