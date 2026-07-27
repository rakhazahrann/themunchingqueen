import gsap from 'gsap';

export function initAnimations() {
  const mm = gsap.matchMedia();
  mm.add(
    { all: 'all', reduceMotion: '(prefers-reduced-motion: reduce)' },
    (context) => {
      const { reduceMotion } = context.conditions as { all: boolean; reduceMotion: boolean };
      if (reduceMotion) return;

      const hero = gsap.timeline({ defaults: { duration: .75, ease: 'power3.out' } });
      hero.from('.hero-copy > *', { autoAlpha: 0, y: 28, stagger: .08 });

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          gsap.fromTo(entry.target, { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: .65, ease: 'power2.out', clearProps: 'visibility,transform,opacity' });
          observer.unobserve(entry.target);
        });
      }, { threshold: .12 });
      document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
      return () => observer.disconnect();
    }
  );
  return () => mm.revert();
}
