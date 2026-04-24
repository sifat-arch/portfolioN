import React from "react";
import { BsGithub } from "react-icons/bs";

import { FaFacebook } from "react-icons/fa";

import { LiaLinkedin } from "react-icons/lia";

// লজিক এবং ডেটা আলাদা রাখা ভালো practice
const socialLinks = [
  {
    icon: BsGithub,
    href: "https://github.com/sifat-arch",
    label: "GitHub",
  },
  {
    icon: LiaLinkedin,
    href: "https://www.linkedin.com/in/sifat-ullah-dev/",
    label: "LinkedIn",
  },
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/profile.php?id=100051482000726",
    label: "Facebook",
  },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#"
              className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
            >
              SU<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Pedro Machado. All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-transparent bg-secondary hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
