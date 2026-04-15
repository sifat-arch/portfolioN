import React from "react";
import Button from "../components/Button";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import AnimatedBorderButton from "../components/AnimatedBorderButton";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* backgorund image*/}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero Image"
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
              backgroundColor: "#20B2A6",
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
          {/*left colum-text  */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Dev Developer | MERN Stack
              </span>
            </div>

            {/* headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:7xl leading-tight font-bold animate-fade-in animate-delay-200">
                Crafting <span className="text-primary glow-text">Digital</span>{" "}
                <br />
                Experience with <br />
                <span className="font-serif italic font-normal text-white">
                  precision
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animate-delay-400">
                I am a MERN Stack web developer, skilled in building full-stack
                websites with modern, responsive, and user-friendly designs.I Im
                spacializing next.js and typescript and react.
              </p>
            </div>
            {/* call to action  */}
            <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-500">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>Download CV</AnimatedBorderButton>
            </div>
            {/* social links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow Me: </span>
              {[
                { icon: <FaGithub size={15}></FaGithub>, href: "#" },
                { icon: <FaLinkedin size={15}></FaLinkedin>, href: "#" },
                { icon: <FaTwitter size={15}></FaTwitter>, href: "#" },
              ].map((social, i) => (
                <a
                  href=""
                  key={i}
                  className="p-2 rounded-full glass hover:bg-primary-/10 hover:text-primary transition-all duration-300 "
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          {/*Right colum-text  */}
          <div className="relative animate-fade-in animation-delay-300 ">
            {/* profile image */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse-glow" />
              <div className="relative galss rounded-3xl p-2 glow-border">
                <img
                  src="/profile.jpg"
                  alt="profile"
                  className="w-full aspect-[4/5]ojbect-cover rounded-2xl"
                />

                {/* floating badge */}
                 <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                    <div>
                       <div/>
                       <span>Avilable for work</span>
                    </div>
                 </div>
                {/* stats badge */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
