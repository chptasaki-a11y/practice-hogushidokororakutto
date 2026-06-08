import { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import NameReveal from './components/NameReveal';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import InteriorSection from './components/InteriorSection';
import InfoSection from './components/InfoSection';
import AccessSection from './components/AccessSection';
import ReservationSection from './components/ReservationSection';
import FooterSection from './components/FooterSection';

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  const handleRevealComplete = useCallback(() => {
    setShowContent(true);
  }, []);

  // Prevent body scroll during name reveal
  useEffect(() => {
    if (!showContent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showContent]);

  return (
    <>
      {/* Name reveal overlay */}
      {!showContent && <NameReveal onComplete={handleRevealComplete} />}

      {/* Main LP content */}
      <div
        className={`transition-opacity duration-1000 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {showContent && <Header />}
        <main>
          {/* SEO structured data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'LocalBusiness',
                name: 'ほぐし処らくっと',
                description:
                  '福島県会津若松市にある完全予約制のリラクゼーションサロン。もみほぐし・ヘッドケア・リフレクソロジーをご提供しています。',
                image: '',
                telephone: '+81242937248',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: '八角町13-45',
                  addressLocality: '会津若松市',
                  addressRegion: '福島県',
                  postalCode: '965-0024',
                  addressCountry: 'JP',
                },
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: 37.4948,
                  longitude: 139.9298,
                },
                openingHoursSpecification: [
                  {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: [
                      'Monday',
                      'Tuesday',
                      'Wednesday',
                      'Thursday',
                      'Friday',
                    ],
                    opens: '10:00',
                    closes: '21:00',
                  },
                  {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Saturday', 'Sunday'],
                    opens: '10:00',
                    closes: '21:00',
                  },
                ],
                priceRange: '¥3,300〜¥5,900',
              }),
            }}
          />

          {/* FAQ structured data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: '予約は必要ですか？',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'はい、当店は完全予約制です。お電話または予約フォームよりご予約をお願いいたします。',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: '駐車場はありますか？',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'はい、店舗前に駐車スペースをご用意しております。',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'どんなメニューがありますか？',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'もみほぐし（60分 ¥4,000 / 90分 ¥5,900）、ヘッドケア（45分 ¥5,000）、リフレクソロジー（30分 ¥3,300 / 60分 ¥5,000）をご用意しております。',
                    },
                  },
                ],
              }),
            }}
          />

          {/* Sections */}
          <HeroSection />
          <AboutSection />
          <MenuSection />
          <InteriorSection />
          <InfoSection />
          <AccessSection />
          <ReservationSection />
        </main>
        <FooterSection />
      </div>
    </>
  );
}