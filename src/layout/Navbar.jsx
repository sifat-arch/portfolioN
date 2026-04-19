import React, { useEffect, useState } from "react";
import Button from "@/components/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#learning-journey", label: "Learning Journey" },
  { href: "#what-i-can-do", label: "What I Can Do" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed z-50 top-0 left-0 right-0 transition-all duration-500 ${isScroll ? "glass-strong py-3" : "bg-transparent py-5"}`}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          SU <span className="text-primary">.</span>
        </a>
        {/* dasktop nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* cta button */}
        <div className="hidden md:block">
          <Button size="sm">Contact me</Button>
        </div>

        {/* mobile menu button */}

        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {/* mobile menu */}

      <div className="md:hidden glass-strong ">
        {isOpen && (
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4 animate-fade-in">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}
            <Button onClick={() => setIsOpen(false)}>Contact me</Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
