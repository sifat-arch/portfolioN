import { useEffect } from "react";

/**
 * Custom hook that observes elements with `.reveal`, `.reveal-left`,
 * `.reveal-right`, and `.reveal-scale` classes and activates them
 * as they enter the viewport during scrolling.
 */
export const useScrollAnimation = () => {
  useEffect(() => {
    const selector = ".reveal, .reveal-left, .reveal-right, .reveal-scale";
    const elements = document.querySelectorAll(selector);

    if (!("IntersectionObserver" in window)) {
      // Fallback for older environments: reveal immediately
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};
