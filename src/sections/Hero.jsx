import React from "react";
import Button from "../components/Button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import AnimatedBorderButton from "../components/AnimatedBorderButton";

const skills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Prisma ORM",
  "Redis",
  "MongoDB",
  "Tailwind CSS",
  "Shadcn UI",
  "TanStack Query",
  "REST API",
  "JWT",
  "Docker",
  "Git",
  "GitHub",
];

const Hero = () => {
  const handleContactSrcoll = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* backgorund image*/}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />

      {/* green dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20b2a6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/*left column-text */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary font-medium">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Full-Stack Developer | MERN & Next.js
              </span>
            </div>

            {/* headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight font-bold animate-fade-in animate-delay-200">
                Crafting <span className="text-primary glow-text">Digital</span>{" "}
                <br />
                Experience with <br />
                <span className="font-serif italic font-normal text-white">
                  precision
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animate-delay-400">
                Results-driven Full-Stack Developer skilled in building scalable
                web applications, RESTful APIs, and secure authentication
                systems with React, Next.js, Node.js, TypeScript, and PostgreSQL.
              </p>
            </div>

            {/* call to action */}
            <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-500">
              <Button size="lg" onClick={handleContactSrcoll}>
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <a
                href="/Fullstack_resume.pdf"
                download="Sifat_Ullah_FullStack_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AnimatedBorderButton>Download CV</AnimatedBorderButton>
              </a>
            </div>

            {/* social links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow Me: </span>
              {[
                {
                  icon: <FaGithub size={16} />,
                  href: "https://github.com/sifat-arch",
                  label: "GitHub",
                },
                {
                  icon: <FaLinkedin size={16} />,
                  href: "https://www.linkedin.com/in/sifat-ullah-dev/",
                  label: "LinkedIn",
                },
                {
                  icon: <FaTwitter size={16} />,
                  href: "#",
                  label: "Twitter",
                },
              ].map((social, i) => (
                <a
                  href={social.href}
                  key={i}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full glass hover:bg-primary/15 hover:text-primary transition-all duration-300 text-muted-foreground hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/*Right column-profile image & floating cards */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              {/* Subtle ambient glow behind profile */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/30 via-primary/10 to-transparent blur-2xl animate-pulse" />

              {/* Main portrait card */}
              <div className="relative glass-strong rounded-3xl p-3 glow-border border border-primary/20 shadow-2xl">
                <img
                  src="/portfolio-profile.png"
                  alt="Sifat Ullah - Full-Stack Developer"
                  className="w-full aspect-[4/5] object-cover rounded-2xl shadow-inner"
                />

                {/* Floating badge 1: Stats / Projects Completed (Top-Left) */}
                <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-6 glass-strong rounded-2xl p-3.5 shadow-2xl border border-white/10 backdrop-blur-xl animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary font-bold text-lg shadow-inner">
                      8+
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-semibold text-white tracking-wide">
                        Projects Completed
                      </div>
                      <div className="text-[11px] text-muted-foreground">
                        Full-Stack & Web
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge 2: Availability for work (Bottom-Right) */}
                <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-6 glass-strong rounded-2xl px-4 py-3 shadow-2xl border border-white/10 backdrop-blur-xl animate-float animate-delay-500">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-sm" />
                    </span>
                    <div className="text-left">
                      <div className="text-xs font-semibold text-white tracking-wide">
                        Available for work
                      </div>
                      <div className="text-[11px] text-emerald-400 font-medium">
                        Open to opportunities
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* skills marquee section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center tracking-wide uppercase">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, i) => (
                <div key={i} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-primary transition-colors cursor-default">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* scroll button */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary cursor-pointer transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
