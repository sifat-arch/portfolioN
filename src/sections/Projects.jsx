import React from "react";
import image1 from "/images/project-1.png";
import image2 from "/images/project-2.png";
import image3 from "/images/project-3.png";
import { ArrowUpRight } from "lucide-react";

import { FaGithub } from "react-icons/fa";
import AnimatedBorderButton from "../components/AnimatedBorderButton";

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
      <div className="container mx-auto px-6 relative z-10">
        {/* secton header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider animated-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an inpact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animate-delay-200">
            A selection of my recent work,from complex web application to
            innovative tools that solve real-world problems.
          </p>
        </div>
        {/* project grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              {/* image of the project */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt="project.title"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                {/* overlay links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
              {/* content */}
              <div className="p-6 space-y-4">
                <div className="flex flex-start justify-between ">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group:hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      className="px-4 py-1.5 rounded-full color-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                      key={tagIdx}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* viwe all cta */}
        <div className="text-center mt-12 animate-fade-in animated-delay-500">
          <AnimatedBorderButton>
            View ALl Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;
