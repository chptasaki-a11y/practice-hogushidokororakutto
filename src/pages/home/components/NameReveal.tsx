import { useState, useEffect } from 'react';

interface NameRevealProps {
  onComplete: () => void;
}

export default function NameReveal({ onComplete }: NameRevealProps) {
  const [phase, setPhase] = useState<'appear' | 'hold' | 'fade'>('appear');

  useEffect(() => {
    const appearTimer = setTimeout(() => setPhase('hold'), 1800);
    const fadeTimer = setTimeout(() => setPhase('fade'), 2800);
    const completeTimer = setTimeout(() => onComplete(), 3800);

    return () => {
      clearTimeout(appearTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background-50 transition-opacity duration-1000 ease-in-out ${
        phase === 'fade' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        <div
          className={`transition-all duration-1000 ${
            phase === 'appear'
              ? 'name-reveal-animation'
              : ''
          }`}
        >
          <p className="text-sm tracking-[0.3em] text-primary-400 font-sans mb-6">
            RELAXATION SALON
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-800 tracking-wider">
            ほぐし処
            <span className="block mt-2 text-5xl md:text-6xl lg:text-7xl text-primary-600">
              らくっと
            </span>
          </h1>
          <div className="mt-8 decorative-line w-48 mx-auto"></div>
        </div>
      </div>
    </div>
  );
}