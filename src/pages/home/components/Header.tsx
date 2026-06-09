import { useState, useEffect } from 'react';
import logo from '../../assets/use/logo.png';

const navLinks = [

  { id: 'about', label: '当店について' },
  { id: 'menu', label: 'メニュー' },
  { id: 'interior', label: '店内紹介' },
  { id: 'info', label: '基本情報' },
  { id: 'access', label: 'アクセス' },
  { id: 'reservation', label: 'ご予約' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-background-50/95 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.05)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <img src={logo} alt="ほぐし処らくっと" className="w-14 h-14" />
         
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-3 py-2 rounded-full text-xs font-sans tracking-wider whitespace-nowrap cursor-pointer transition-all duration-300 ${
                  scrolled
                    ? 'text-foreground-600 hover:text-primary-600 hover:bg-primary-50'
                    : 'text-foreground-600 hover:text-primary-600 hover:bg-primary-50/50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:0242937248"
              className="ml-3 px-5 py-2 rounded-full bg-primary-500 text-background-50 text-xs font-sans font-medium tracking-wider whitespace-nowrap cursor-pointer hover:bg-primary-600 transition-colors duration-300"
            >
              <i className="ri-phone-line mr-1.5"></i>
              024-293-7248
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center cursor-pointer text-foreground-700 hover:bg-background-200 transition-colors"
            aria-label="メニューを開く"
          >
            <i className={`text-lg ${mobileOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-background-50/98 backdrop-blur-md border-t border-background-200/50 px-4 py-4">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="w-full text-left px-4 py-3 rounded-xl text-sm font-sans text-foreground-700 hover:bg-primary-50 hover:text-primary-600 cursor-pointer transition-colors duration-200 whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:0242937248"
              className="mt-2 w-full px-4 py-3 rounded-xl bg-primary-500 text-background-50 text-sm font-sans font-medium text-center cursor-pointer hover:bg-primary-600 transition-colors duration-300 whitespace-nowrap"
            >
              <i className="ri-phone-line mr-2"></i>
              024-293-7248
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}