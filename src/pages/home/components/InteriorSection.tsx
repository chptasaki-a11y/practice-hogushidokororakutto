import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { interiorImages } from '@/mocks/menu';
// import tabHero from '../assets/ほぐし処らくっと素材/使う素材/tab-hero.png';
// import tabHero from '../assets/ほぐし処らくっと素材/使う素材/tab-hero.png';
// import tabHero from '../assets/ほぐし処らくっと素材/使う素材/tab-hero.png';

export default function InteriorSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref}
      id="interior"
      className="relative w-full py-20 md:py-28 bg-background-50"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className={`mb-12 md:mb-16 ${isVisible ? 'reveal visible' : 'reveal'}`}>
          <p className="text-xs tracking-[0.3em] text-accent-500 font-sans mb-3">
            INTERIOR
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary-800 inline-flex items-center gap-3">
            店内のご案内
            <span className="w-7 h-7 flex items-center justify-center">
              <i className="ri-leaf-line text-secondary-400 text-xl"></i>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {interiorImages.map((img, index) => (
            <div
              key={img.id}
              className={`group rounded-2xl overflow-hidden bg-background-100 ${
                isVisible ? 'reveal visible' : 'reveal'
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={`https://readdy.ai/api/search-image?query=$%7Bimg.imageQuery%7D&width=800&height=600&seq=${img.imageSeq}&orientation=landscape`}
                  alt={`${img.title} - ほぐし処らくっと`}
                  title={`${img.title} ほぐし処らくっと`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base md:text-lg font-heading font-bold text-primary-800 mb-2">
                  {img.title}
                </h3>
                <p className="text-sm text-foreground-600 font-sans leading-relaxed">
                  {img.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 decorative-line"></div>
    </section>
  );
}