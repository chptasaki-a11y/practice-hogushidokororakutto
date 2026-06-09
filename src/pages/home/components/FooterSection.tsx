import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function FooterSection() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
  ref={ref}
  className="relative w-full bg-primary-400"
>
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-6">
        <div className={`flex flex-col lg:flex-row gap-12 lg:gap-16 ${isVisible ? 'reveal visible' : 'reveal'}`}>
          {/* Left - Brand */}
          <div className="w-full lg:w-[28%]">
            <h3 className="text-xl font-heading font-bold text-background-50 mb-3">
              ほぐし処らくっと
            </h3>
           
            {/* SNS Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/hogushichurakutsuto?igsh=dzFkdXdyb3U5Zmhs"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-9 h-9 rounded-full bg-background-50/15 flex items-center justify-center cursor-pointer hover:bg-background-50/25 transition-colors duration-300"
                aria-label="Instagram"
              >
                <i className="ri-instagram-line text-background-50 text-lg"></i>
              </a>
              <a
                href="https://beauty.hotpepper.jp/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-9 h-9 rounded-full bg-background-50/15 flex items-center justify-center cursor-pointer hover:bg-background-50/25 transition-colors duration-300"
                aria-label="ホットペッパービューティー"
              >
                <i className="ri-store-2-line text-background-50 text-lg"></i>
              </a>
            </div>
          </div>

          {/* Center - Menu Links */}
          <div className="w-full lg:w-[18%]">
            <h4 className="text-sm font-bold text-background-50 font-sans tracking-wider mb-4">
              MENU
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="text-xs md:text-sm text-background-50/60 font-sans hover:text-background-50 transition-colors duration-300 cursor-pointer"
                >
                  人気メニュー
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-xs md:text-sm text-background-50/60 font-sans hover:text-background-50 transition-colors duration-300 cursor-pointer"
                >
                  当店について
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('interior')}
                  className="text-xs md:text-sm text-background-50/60 font-sans hover:text-background-50 transition-colors duration-300 cursor-pointer"
                >
                  店内紹介
                </button>
              </li>
            </ul>
          </div>

          {/* Right-1 - Info Links */}
          <div className="w-full lg:w-[18%]">
            <h4 className="text-sm font-bold text-background-50 font-sans tracking-wider mb-4">
              INFO
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('info')}
                  className="text-xs md:text-sm text-background-50/60 font-sans hover:text-background-50 transition-colors duration-300 cursor-pointer"
                >
                  基本情報
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('access')}
                  className="text-xs md:text-sm text-background-50/60 font-sans hover:text-background-50 transition-colors duration-300 cursor-pointer"
                >
                  アクセス
                </button>
              </li>
            </ul>
          </div>

          {/* Right-2 - Reserve Links */}
          <div className="w-full lg:w-[18%]">
            <h4 className="text-sm font-bold text-background-50 font-sans tracking-wider mb-4">
              RESERVE
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('reservation')}
                  className="text-xs md:text-sm text-background-50/60 font-sans hover:text-background-50 transition-colors duration-300 cursor-pointer"
                >
                  ご予約
                </button>
              </li>
              <li>
                <a
                  href="tel:0242937248"
                  className="text-xs md:text-sm text-background-50/60 font-sans hover:text-background-50 transition-colors duration-300"
                >
                  お電話
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-background-50/15 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-xs text-background-50/40 font-sans">
            &copy; 2026 ほぐし処らくっと. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}