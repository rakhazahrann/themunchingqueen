import gsap from 'gsap';

export function initAnimations() {
  const mm = gsap.matchMedia();
  mm.add(
    { all: 'all', reduceMotion: '(prefers-reduced-motion: reduce)', desktop: '(min-width: 860px)' },
    (context) => {
      const { reduceMotion, desktop } = context.conditions as { all: boolean; reduceMotion: boolean; desktop: boolean };
      if (reduceMotion) return;

      const hero = gsap.timeline({ defaults: { duration: .75, ease: 'power3.out' } });
      hero
        .from('.hero-copy > *', { autoAlpha: 0, y: 28, stagger: .08 })
        .from('.hero-pack', { autoAlpha: 0, y: 45, rotation: (index) => [-22, 12, 24][index] ?? 0, stagger: .09 }, '-=.45')
        .from('.sticker--hero', { autoAlpha: 0, scale: .65, rotation: -20, ease: 'back.out(1.7)' }, '-=.35');

      if (desktop) {
        gsap.to('.hero-pack--one', { y: -11, rotation: -9, duration: 4.1, repeat: -1, yoyo: true, ease: 'sine.inOut' });
        gsap.to('.hero-pack--two', { y: 10, rotation: 7, duration: 4.8, repeat: -1, yoyo: true, ease: 'sine.inOut' });
        gsap.to('.hero-pack--three', { y: -8, rotation: 10, duration: 3.9, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      }

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
