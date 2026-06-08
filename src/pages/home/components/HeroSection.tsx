import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import spHero from '../assets/ほぐし処らくっと素材/使う素材/sp-hero.png';
import tabHero from '../assets/ほぐし処らくっと素材/使う素材/tab-hero.png';

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
  ref={ref}
  id="hero"
 className="relative w-full min-h-screen md:min-h-[130vh] overflow-hidden"
>
 {/* Background image */}
<div className="absolute inset-0">
  <img
    src={spHero}
    alt=""
    aria-hidden="true"
    className="absolute inset-0 md:hidden w-full h-full object-cover object-center"
  />
  <img
    src={tabHero}
    alt=""
    aria-hidden="true"
    className="absolute inset-0 hidden md:block w-full h-full object-cover object-center"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-background-50 via-background-50/30 to-transparent"></div>
</div>
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent-100/30 blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-40 right-20 w-48 h-48 rounded-full bg-secondary-100/20 blur-3xl" style={{ animation: 'subtleFloat 6s ease-in-out infinite' }}></div>

      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, oklch(var(--primary-300)) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      ></div>

      {/* Main content */}
      <div
  className={`absolute bottom-20 md:bottom-28 left-0 right-0 z-10 px-5 md:px-10 lg:px-16`}
>
  <div className="max-w-xl text-left">
  <h1
  className={`reveal hero-text-glow ${isVisible ? 'visible' : ''} text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-background-50 tracking-wide leading-tight mb-4`}
  style={{ transitionDelay: '3.5s' }}
>
  日々の疲れを、
  <br />
  <span className="text-background-50">ほぐす。</span>
</h1>
<p
  className={`reveal hero-text-glow ${isVisible ? 'visible' : ''} text-sm md:text-base text-primary-800 font-sans max-w-md leading-relaxed`}
  style={{ transitionDelay: '4s' }}
>
  匠のもみほぐしで
  <br />
  「まったり」とした時間をお届けします。
</p>
  </div>
</div>
      {/* Scroll indicator */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground-400">
        <span className="text-xs tracking-widest font-sans">SCROLL</span>
        <div className="w-5 h-8 rounded-full border border-foreground-300/40 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-foreground-400 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}