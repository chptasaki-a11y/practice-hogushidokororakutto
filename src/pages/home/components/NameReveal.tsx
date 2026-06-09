import { useState, useEffect } from 'react';
import logo from '../../assets/use/logo.png';

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
          <img src={logo} alt="ほぐし処らくっと" className="w-64 h-64 h-auto mx-auto" />
          <div className="mt-8 decorative-line w-48 mx-auto"></div>
        </div>
      </div>
    </div>
  );
}