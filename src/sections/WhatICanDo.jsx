import React from "react";
import { Code2, Database, ShieldCheck, Globe, Layers } from "lucide-react";

const whatICanDo = [
  {
    title: "Build Responsive & Modern UI",
    desc: "Creating stunning, mobile-first interfaces using React and Tailwind CSS.",
    icon: Code2,
  },
  {
    title: "Full-Stack Applications",
    desc: "Developing scalable full-stack applications with Next.js and MongoDB.",
    icon: Database,
  },
  {
    title: "Secure Authentication",
    desc: "Implementing robust authentication systems with JWT and NextAuth.js.",
    icon: ShieldCheck,
  },
  {
    title: "API Integration",
    desc: "Expertise in REST APIs, GraphQL, and dynamic data handling.",
    icon: Globe,
  },
  {
    title: "Reusable Components",
    desc: "Designing scalable, maintainable, and reusable component architectures.",
    icon: Layers,
  },
];

const WhatICanDo = () => {
  return (
    <section className="py-20  text-white" id="what-i-can-do">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            I Can Do
          </div>
          <h2 className="text-4xl mb:text-5xl font-bold mt-4 mb-5 animate-fade-in animation-delay-100 text-secondary-foreground">
            What I Can{" "}
            <span className="font-serif italic font-normal text-white">Do</span>
          </h2>
          <p className="text-muted-foreground animate-muted-froeground animate-fade-in aniation-delay-200">
            Delivering high-quality solutions using modern technologies to solve
            real-world problems.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatICanDo.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 overflow-hidden hover:border-[var(--hover-border)] animate-fade-in"
                style={{
                  animationDelay: `${(idx + 1) * 150}ms`,
                  "--hover-border": "#20b2a6",
                }}
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 flex items-center justify-center bg-white/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary/60 group-hover:text-primary transition-colors" />
                  </div>

                  {/* Number */}
                  <div className="text-5xl font-bold text-white/10 absolute top-6 right-6 group-hover:text-white/20 transition-colors">
                    {String(idx + 1).padStart(2, "0")}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 tracking-tight group-hover:text-[#20b2a6] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="leading-relaxed transition-colors text-muted-foreground">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom shine effect with secondary foreground color */}
                <div
                  className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700"
                  style={{ backgroundColor: "#20b2a6" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatICanDo;
