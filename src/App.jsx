import Navbar from "@/layout/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";

import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";
import LearningJourney from "./sections/LearningJourney";
import WhatICanDo from "./sections/WhatICanDo";
function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <LearningJourney />
        <WhatICanDo />
        <Contact />
      </main>
    </div>
  );
}

export default App;
