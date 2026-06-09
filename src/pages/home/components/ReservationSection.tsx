import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import reservationBack from '../../assets/use/reservationback.jpg';

export default function ReservationSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref}
      id="reservation"
      className="relative w-full py-20 md:py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={reservationBack}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-foreground-950/80"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
        <div className={isVisible ? 'reveal visible' : 'reveal'}>
          <p className="text-xs tracking-[0.3em] text-accent-300 font-sans mb-4">
            RESERVATION
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-background-50 leading-tight mb-6">
            ご予約はこちら
          </h2>
          <p className="text-sm md:text-base text-background-50/70 font-sans leading-relaxed max-w-lg mx-auto mb-10">
            お電話にてご予約承っております。お気軽にご連絡ください。
          </p>

          <div className="flex flex-col items-center gap-5">
            {/* 電話番号（上） */}
            <a
              href="tel:0242937248"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-background-50 text-primary-700 font-sans text-lg tracking-wider whitespace-nowrap cursor-pointer hover:bg-background-100 transition-colors duration-300 group"
            >
              <i className="ri-phone-line text-xl group-hover:scale-110 transition-transform duration-300"></i>
              024-293-7248
            </a>
            <p className=" text-xs text-background-50/50 font-sans">
              営業時間 10:00〜21:00（最終受付 20:00）
            </p>

            <p className="mt-10 text-sm md:text-base text-background-50/70 font-sans leading-relaxed max-w-lg mx-auto mb-5">
              ホットペッパービューティーやインスタグラムでの予約も可能です。
              <br />ぜひご覧ください。
            </p>
            {/* Instagram・ホットペッパー（下） */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.instagram.com/hogushichurakutsuto?igsh=dzFkdXdyb3U5Zmhs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-background-50 text-primary-700  font-sans text-base font-medium whitespace-nowrap cursor-pointer hover:opacity-90 transition-opacity duration-300 group"
              >
                <span className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-instagram-line text-xl group-hover:scale-110 transition-transform duration-300"></i>
                </span>
                Instagram
              </a>

              <a
                href="https://beauty.hotpepper.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-background-50 text-primary-700 font-sans text-base font-medium whitespace-nowrap cursor-pointer hover:opacity-90 transition-opacity duration-300 group"
              >
                <span className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-store-2-line text-xl group-hover:scale-110 transition-transform duration-300"></i>
                </span>
                Hotpepper
              </a>
            </div>
          </div>



          <div className="mt-8 w-24 h-px bg-background-50/30 mx-auto"></div>

        </div>
      </div>
    </section>
  );
}