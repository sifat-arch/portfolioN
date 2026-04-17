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
          <div className="space-y-8 ">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase ">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl leading-tight font-bold animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                One Component at a time
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animate-delay-200">
              <p>
                I'm a passionate aspiring full-stack developer with a strong
                foundation in modern web technologies. I recently completed my
                studies and have been focusing on building real-world projects
                to sharpen my skills and understanding of web development.
              </p>

              <p>
                I specialize in the MERN stack, working with React, Next.js,
                Node.js, and MongoDB to create responsive and user-friendly web
                applications. I enjoy turning ideas into functional products and
                continuously improving my problem-solving abilities.
              </p>

              <p>
                Currently, I'm actively seeking opportunities to start my
                professional journey as a developer. I'm eager to learn, grow,
                and contribute to a team while expanding my knowledge in both
                frontend and backend development.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animate-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
              </p>
            </div>
          </div>
          {/* right column   */}

          <div className="grid sm:grid-cols-2 gap-6 items-start">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
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
