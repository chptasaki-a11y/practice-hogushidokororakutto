import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import about from '../../assets/use/about.jpg';

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section
      ref={ref}
      id="about"
      className="relative w-full py-20 md:py-28 bg-background-50"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className={`w-full lg:w-2/5 ${isVisible ? 'reveal-left visible' : 'reveal-left'}`}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full max-w-md mx-auto lg:max-w-none rounded-[56%_44%_52%_48%/48%_55%_45%_52%]">
              <img
                src={about}
                alt="ほぐし処らくっと 施術の様子 - 会津若松 リラクゼーション"
                title="ほぐし処らくっと 施術風景"
                className="w-full h-full object-cover object-top"
              />
              {/* <img
  src={tabHero}
  alt=""
  aria-hidden="true"
  className="absolute inset-0 hidden md:block w-full h-full object-cover object-center"
/> */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

              {/* Floating labels */}

            </div>
          </div>

          {/* Right - Text */}
          <div className={`w-full lg:w-1/2 ${isVisible ? 'reveal-right visible' : 'reveal-right'}`}>
            <p className="text-xs tracking-[0.3em] text-accent-500 font-sans mb-4">
              ABOUT
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary-800 leading-snug mb-6">
              自然素材の温もりに
              <br />
              包まれて、ほぐれる時間
            </h2>
            <div className="decorative-line-vertical h-12 ml-1 mb-6 hidden lg:block"></div>
            <p className="text-sm md:text-base text-foreground-600 font-sans leading-relaxed mb-6">
              個室の落ち着いたプライベート空間で、日々の疲れを癒す「まったりとした時間」を過ごしませんか？当店では、お客様が心からリラックスできる空間づくりを大切にし、熟練のスタッフが一人ひとりのお悩みやお好みに寄り添いながら、丁寧に心身をほぐしていきます。力加減や重点的にほぐしたい箇所なども、どうぞ気軽にお申し付けください。
            </p>
            <p className="text-sm md:text-base text-foreground-600 font-sans leading-relaxed mb-8">
              リーズナブルで通いやすく、駐車場や無料のお着替えも完備。お出かけついでにふらっと立ち寄れる身近な癒しの場所として、極上のリラックスタイムをご提供します。
            </p>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent-100/15 blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
    </section>
  );
}