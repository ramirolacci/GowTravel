import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollReveal = (deps: any[] = []) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Fade up reveal for headers, badges, sections
      const revealElements = document.querySelectorAll('.gsap-reveal');
      revealElements.forEach((el) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 40,
            scale: 0.98
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none'
            }
          }
        );
      });

      // 2. Stagger reveal for card grids (Packages, Destinations, Trust Badges, etc.)
      const staggerContainers = document.querySelectorAll('.gsap-stagger-container');
      staggerContainers.forEach((container) => {
        const items = container.querySelectorAll('.gsap-stagger-item');
        if (items.length > 0) {
          gsap.fromTo(
            items,
            {
              opacity: 0,
              y: 45,
              scale: 0.94
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.0,
              stagger: 0.16,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: container,
                start: 'top 85%',
                toggleActions: 'play none none none'
              }
            }
          );
        }
      });
    });

    return () => {
      ctx.revert();
    };
  }, deps);
};
