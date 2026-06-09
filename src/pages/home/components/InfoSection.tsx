
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import gaikan2 from '../assets/ほぐし処らくっと素材/使う素材/gaikan2.jpg';

export default function InfoSection() {
  const imageAnim = useScrollAnimation(0.1);
  const infoAnim = useScrollAnimation(0.1);

  return (
    <section id="info" className="relative w-full bg-background-50 p-12">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
        {/* Left - Map/Image Area */}
        <div
          ref={imageAnim.ref}
          className={`md:w-1/2 relative min-h-[300px] md:min-h-0 overflow-hidden transition-all duration-1000 ease-out ${imageAnim.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            }`}
        >
          <img
            src={gaikan2}
            alt="ほぐし処らくっと 外観"
            className="absolute inset-0 w-full h-full object-cover object-center rounded-2xl"
          />

          <div className="absolute inset-0  pointer-events-none bg-gradient-to-r from-white/45 to-transparent flex flex-col justify-end p-8 md:p-12">

          </div>
        </div>

        {/* Right - Info Area */}
        <div
          ref={infoAnim.ref}
          className={`md:w-1/2 bg-background-50 px-6 md:px-8 lg:px-16 py-12 md:py-14 lg:py-16  flex flex-col justify-center transition-all duration-1000 delay-200 ease-out ${infoAnim.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
            }`}
        >
          <p className="text-xs tracking-[0.3em] text-accent-500 font-sans mb-3 text-center lg:text-left">
            INFORMATION
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary-800 tracking-wider text-center lg:text-left">
            基本情報
          </h2>


          {/* Info list */}
          <div className="space-y-2 mb-8">
            {/* Hours */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-background-50">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <i className="ri-time-line text-primary-500 text-lg"></i>
              </div>
              <div>
                <p className="text-sm font-medium text-primary-700 font-sans mb-1">
                  営業時間
                </p>
                <p className="text-sm text-foreground-600 font-sans leading-relaxed">
                  10:00 〜 21:00（最終受付 20:00）
                  <br />
                  <span className="text-xs text-foreground-400">
                    ※メニューによっては20時受付可能な場合がありますので、<br />お気軽にお問合せください
                  </span>
                </p>
              </div>
            </div>

            {/* Holiday */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-background-50">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <i className="ri-calendar-line text-primary-500 text-lg"></i>
              </div>
              <div>
                <p className="text-sm font-medium text-primary-700 font-sans mb-1">
                  定休日
                </p>
                <p className="text-sm text-foreground-600 font-sans">
                  不定休
                </p>
              </div>
            </div>

            {/* Seats */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-background-50">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <i className="ri-home-smile-line text-primary-500 text-lg"></i>
              </div>
              <div>
                <p className="text-sm font-medium text-primary-700 font-sans mb-1">
                  席数
                </p>
                <p className="text-sm text-foreground-600 font-sans">
                  3床
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-background-50">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <i className="ri-phone-line text-primary-500 text-lg"></i>
              </div>
              <div>
                <p className="text-sm font-medium text-primary-700 font-sans mb-1">
                  お電話番号
                </p>
                <a
                  href="tel:0242937248"
                  className="text-lg font-bold text-foreground-600 font-sans hover:text-primary-700 transition-colors"
                >
                  024-293-7248
                </a>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}