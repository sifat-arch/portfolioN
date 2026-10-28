import React from "react";
import rentnestImg from "/images/rentnest.png";
import coloshipImg from "/images/coloship.png";
import image1 from "/images/project-1.png";
import image2 from "/images/project-2.png";
import image3 from "/images/project-3.png";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import AnimatedBorderButton from "../components/AnimatedBorderButton";

const projects = [
  {
    title: "RentNest",
    subtitle: "Full-Stack House Rental Platform",
    description:
      "A multi-role rental platform enabling tenants to search and book properties, and landlords to manage listings. Features JWT authentication with HTTP-only cookies, Google OAuth, strict RBAC, and Stripe payment gateway.",
    image: rentnestImg,
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Stripe",
      "JWT",
    ],
    link: "https://rentnest-frontend-two.vercel.app/",
    github: "https://github.com/sifat-arch/rentnest-frontend",
  },
  {
    title: "ColoShip",
    subtitle: "Full-Stack Parcel Delivery & Logistics Platform",
    description:
      "A logistics and parcel delivery platform with role-based portals for Customers, Couriers, and Admins. Features real-time tracking, status updates, task assignment, Redis OTP auth, Nodemailer, online payments, and COD support.",
    image: coloshipImg,
    tags: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "TanStack Query",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    link: "https://coloship-frontend.vercel.app/",
    github: "https://github.com/sifat-arch/coloship-frontend",
  },
  {
    title: "Garments-Orders",
    subtitle: "Full-Stack E-Commerce Application",
    description:
      "A full-stack e-commerce platform enabling customers to order apparel and sellers to manage inventory listings, with JWT authentication, RBAC, Stripe payments, and end-to-end order tracking.",
    image: image2,
    tags: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Stripe",
      "JWT",
    ],
    link: "https://garments-orders.web.app/",
    github: "https://github.com/sifat-arch/fontend-Garments-Order",
  },
  {
    title: "InsightAI",
    subtitle: "AI-Powered Content Platform",
    description:
      "An AI-powered content platform with smart generation tools, summaries, plagiarism detection, and secure authentication.",
    image: image1,
    tags: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Better Auth",
      "Gemini AI",
      "News API",
    ],
    link: "https://insight-ai-ochre.vercel.app/",
    github: "https://github.com/sumai-suchi/insight-ai/tree/development",
  },
  {
    title: "TraVelEase",
    subtitle: "Travel & Tour Booking Platform",
    description:
      "A travel booking platform with secure authentication, responsive design, and smooth booking management across all devices.",
    image: image3,
    tags: ["React.js", "Express.js", "Node.js", "MongoDB", "Firebase"],
    link: "https://vermillion-baklava-a12b2a.netlify.app/",
    github: "https://github.com/sifat-arch/B12-A10_TravelEase-clint",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* section header */}
        <div className="text-center mx-auto max-w-3xl mb-16 reveal">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Featured Work
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Projects that{" "}
            <span className="font-serif italic font-normal text-white">
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground">
            A selection of my recent full-stack work, from scalable logistics and
            rental platforms to high-performance web applications.
          </p>
        </div>

        {/* project grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group glass rounded-2xl overflow-hidden reveal border border-border/50 hover:border-primary/40 transition-all duration-500 flex flex-col justify-between hover:-translate-y-1.5 shadow-lg hover:shadow-primary/10"
              style={{ transitionDelay: `${(i % 2) * 120}ms` }}
            >
              <div>
                {/* image of the project */}
                <div className="relative overflow-hidden aspect-video bg-surface">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* overlay links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        title="Live Demo"
                        className="p-3.5 rounded-full glass hover:bg-primary hover:text-primary-foreground text-white transition-all transform hover:scale-110 shadow-lg"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        title="View Source Code"
                        className="p-3.5 rounded-full glass hover:bg-primary hover:text-primary-foreground text-white transition-all transform hover:scale-110 shadow-lg"
                      >
                        <FaGithub className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      {project.subtitle && (
                        <p className="text-xs text-primary font-medium uppercase tracking-wider mb-1">
                          {project.subtitle}
                        </p>
                      )}
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {project.link ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline"
                          >
                            {project.title}
                          </a>
                        ) : (
                          project.title
                        )}
                      </h3>
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* tags */}
              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      className="px-3 py-1 rounded-full bg-surface/80 text-xs font-medium border border-border/60 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
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

        {/* view all cta */}
        <div className="text-center mt-12 reveal">
          <a
            href="https://github.com/sifat-arch"
            target="_blank"
            rel="noreferrer"
            className="inline-block"
          >
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5 ml-1" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
