import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import menuCard1 from '../../assets/use/menucard1.png';
import menuCard2 from '../../assets/use/menucard2.png';
import tabHero from '../../assets/use/tab-hero.png';

const menuCards = [
  {
    id: 'body-care',
    name: 'もみほぐし',
    description: 'お疲れの箇所を中心に、全身を丁寧にほぐします。',
    image: menuCard1,
    courses: [
      { duration: '60分', price: '4,000円' },
      { duration: '90分', price: '5,900円' },
    ],
  },
  {
    id: 'head-care',
    name: 'ヘッドケア',
    description: '頭まわりをじっくりケアし、目元や首肩の疲れにも寄り添います。',
    image: tabHero,
    courses: [{ duration: '45分', price: '5,000円' }],
  },
  {
    id: 'reflexology',
    name: 'リフレクソロジー',
    description: '足裏からふくらはぎまで、心地よい刺激で軽やかに整えます。',
    image: menuCard2,
    courses: [
      { duration: '30分', price: '3,300円' },
      { duration: '60分', price: '5,000円' },
    ],
  },
];

export default function MenuSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={ref}
      id="menu"
      className="relative w-full py-20 md:py-28 bg-background-100"
    >
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-200/30 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className={`flex flex-col text-left mb-12 md:mb-16 ${isVisible ? 'reveal visible' : 'reveal'}`}>
          <div>
            <p className="text-xs tracking-[0.3em] text-accent-500 font-sans mb-3">
              MENU
            </p>
            <h2 className="text-2xl md:text-3xl  lg:text-4xl font-heading font-bold text-primary-800">
              人気メニュー
            </h2>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-stretch">
          {menuCards.map((menu, index) => (
            <div
              key={menu.id}
              className={`flex flex-col h-full rounded-2xl overflow-hidden bg-background-50 group cursor-pointer ${isVisible ? 'reveal visible' : 'reveal'
                }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              data-product-shop
            >
              {/* Image */}
              <div className="relative w-full h-[220px] sm:h-[260px] md:h-[360px] overflow-hidden shrink-0">
                <img
                  src={menu.image}
                  alt={`${menu.name} - ほぐし処らくっと`}
                  title={`${menu.name} ほぐし処らくっと`}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${menu.id === 'head-care' ? 'object-[center_25%]' : 'object-top'
                    }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-xl md:text-xl font-heading font-bold text-background-50 mb-2 md:mb-3">
  {menu.name}
</h3>
                  <div className="space-y-2 min-h-0 md:min-h-[4.5rem]">
                    {menu.courses.map((course) => (
                      <div
                        key={course.duration}
                        className="flex items-center justify-between gap-3 text-background-50 font-sans"
                      >
                        <span className="text-base md:text-sm">{course.duration}</span>
                        <span className="text-lg md:text-base font-bold whitespace-nowrap">
                          {course.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="p-5 md:p-5">
                <p className="text-base leading-relaxed md:text-sm ... min-h-0 md:min-h-[4.5rem]">
                  {menu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}