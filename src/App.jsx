import React from "react";
import Navbar from "@/layout/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import LearningJourney from "./sections/LearningJourney";
import WhatICanDo from "./sections/WhatICanDo";
import Footer from "./layout/Footer";
import { ScrollProgressBar, ScrollToTop } from "./components/ScrollFeatures";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

function App() {
  useScrollAnimation();

  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <ScrollProgressBar />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <LearningJourney />
        <WhatICanDo />
        <Contact />
        <Footer />
      </main>

      <ScrollToTop />
    </div>
  );
}

export default App;
