import React from "react";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* left column */}
          <div className="space-y-8 reveal-left">
            <div>
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl leading-tight font-bold text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                One Component at a time
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate full-stack developer with a strong foundation
                in modern web technologies. I have been focusing on building
                production-grade, scalable full-stack applications with clean
                architecture and seamless user experiences.
              </p>

              <p>
                I specialize in building full-stack platforms using React, Next.js,
                TypeScript, Node.js, Express.js, PostgreSQL, Prisma ORM, and
                MongoDB. I enjoy turning complex real-world requirements into
                intuitive, performant products.
              </p>

              <p>
                Currently, I'm actively seeking opportunities to contribute to
                innovative teams, grow professionally, and build impactful
                software solutions.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
              </p>
            </div>
          </div>

          {/* right column */}
          <div className="grid sm:grid-cols-2 gap-6 items-start reveal-right">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl border border-border/50 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1"
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
