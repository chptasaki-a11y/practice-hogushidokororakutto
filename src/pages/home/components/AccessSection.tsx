import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function AccessSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref}
      id="access"
      className="relative w-full py-20 md:py-28 bg-background-50"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-200/30 to-transparent"></div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
        <div className="flex flex-col items-center gap-10 md:gap-12">
          {/* テキスト（上） */}
          <div className={isVisible ? 'reveal visible' : 'reveal'}>
            <p className="text-xs tracking-[0.3em] text-accent-500 font-sans mb-3">
              ACCESS
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary-800 mb-6">
              アクセス
            </h2>

            <p className="text-sm md:text-base text-foreground-600 font-sans leading-relaxed mb-4">
              〒965-0024
              <br />
              福島県会津若松市八角町13-45
            </p>

            <p className="text-sm text-foreground-500 font-sans leading-relaxed max-w-lg mx-auto">
              JR会津若松駅より車で約6分。駐車場3台。
              <br />
              『クスリのアオキ八角店』様のお隣。『シャトレーゼ飯盛店』様の向かいです。
            </p>
          </div>

          {/* 地図（下） */}
          <div className={`w-full max-w-6xl ${isVisible ? 'reveal visible' : 'reveal'}`}>
            <div className="relative rounded-2xl overflow-hidden aspect-[2/1] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.965294722153!2d139.9298!3d37.4948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDI5JzQxLjMiTiAxMznCsDU1JzQ3LjMiRQ!5e0!3m2!1sja!2sjp!4v1690000000000!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ほぐし処らくっと 周辺地図"
                className="w-full h-full"
              ></iframe>

              {/* バッジも中央寄せにする場合 */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-2 px-4">
                <span className="px-3 py-1.5 rounded-full bg-background-50/80 backdrop-blur-sm text-xs text-foreground-700 font-sans whitespace-nowrap border border-background-200/50">
                  <i className="ri-train-line mr-1"></i>
                  会津若松駅
                </span>
                <span className="px-3 py-1.5 rounded-full bg-background-50/80 backdrop-blur-sm text-xs text-foreground-700 font-sans whitespace-nowrap border border-background-200/50">
                  <i className="ri-car-line mr-1"></i>
                  車で約6分
                </span>
                <span className="px-3 py-1.5 rounded-full bg-background-50/80 backdrop-blur-sm text-xs text-foreground-700 font-sans whitespace-nowrap border border-background-200/50">
                  駐車場あり
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}