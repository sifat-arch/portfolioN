import React from "react";
import image1 from "/images/project-1.png";
import image2 from "/images/project-2.png";
import image3 from "/images/project-3.png";

const projects = [
  {
    title: "InsightAI",
    description:
      "An AI-powered content platform with smart generation tools, summaries, plagiarism detection, and secure authentication.",
    image: image1,
    tags: [
      "Next.js",
      "Typescript",
      "Mongodb",
      "Better Auth",
      "Gemini AI",
      "News API",
    ],
    link: "https://insight-ai-ochre.vercel.app/",
    github: "https://github.com/sumai-suchi/insight-ai/tree/development",
  },
  {
    title: "Garments-Orders",
    description:
      "A full-stack e-commerce platform with secure authentication, Stripe payments, product management, and responsive user interface.",
    image: image2,
    tags: ["React", "Express.js", "Mongodb", "Stripe", "Firebase"],
    link: "https://garments-orders.web.app/",
    github: "https://github.com/sifat-arch/fontend-Garments-Order",
  },
  {
    title: "TraVelEase",
    description:
      "A travel booking platform with secure authentication, responsive design, and smooth booking management across all devices.",
    image: image3,
    tags: ["React", "Express.js", "Mongodb", "Firebase"],
    link: "https://vermillion-baklava-a12b2a.netlify.app/",
    github: "https://github.com/sifat-arch/B12-A10_TravelEase-clint",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10"></div>
    </section>
  );
};

export default Projects;
