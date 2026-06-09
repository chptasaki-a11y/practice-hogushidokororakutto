import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { interiorImages } from '@/mocks/menu';
import interior1 from '../../../assets/use/interior1.jpg';
import reservationback from '../../../assets/use/reservationback.jpg';
import interior2 from '../../../assets/use/interior2.jpg';
import interior3 from '../../../assets/use/interior3.jpg';

const interiorPhotos = [interior1, reservationback, interior2, interior3];
const marqueePhotos = [...interiorPhotos, ...interiorPhotos];

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
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary-800">
            店内のご案内
          </h2>
        </div>
        </div>

        {/* 見出しの外に出すと画面幅いっぱいに流せる */}
      <div
        className={`overflow-hidden ${isVisible ? 'reveal visible' : 'reveal'}`}
      >
        <div className="interior-marquee-track gap-6 px-4">
          {marqueePhotos.map((src, index) => (
           <div
           key={index}
           className="group flex-shrink-0 w-[300px] md:w-[360px] rounded-2xl overflow-hidden aspect-[4/3]"
         >
           <img
             src={src}
             alt={`店内写真 ${(index % interiorPhotos.length) + 1}`}
             className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
           />
         </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 decorative-line"></div>
    </section>
  );
}
