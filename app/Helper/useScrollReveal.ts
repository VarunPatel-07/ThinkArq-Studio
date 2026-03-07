"use client";
import { useEffect } from "react";

/**
 * Observes all elements with the .scroll-reveal class and adds .visible
 * when they enter the viewport. Uses IntersectionObserver for performance.
 * Respects prefers-reduced-motion by adding .visible immediately.
 */
export function useScrollReveal() {
    useEffect(() => {
        // Skip animations if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const elements = document.querySelectorAll(".scroll-reveal");

        if (prefersReducedMotion) {
            elements.forEach((el) => el.classList.add("visible"));
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px",
            }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
}
