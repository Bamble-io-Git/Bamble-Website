'use client';
import { useRef } from 'react';
import PageLayout from '../layout';
import Hero from '../sections/hero-new';
import GiveTeamLife2 from '../sections/cards';
import CVStack from '../elements/cv-stack';
import TurboChargeCareer from '../elements/turbocharge-career';
import LogoCarousel from '../sections/logos';
import dynamic from 'next/dynamic';
const LandingPageTemplate = () => {
  const ref = useRef<null | HTMLElement>(null);
  const handleScroll = () =>
    ref.current && ref?.current?.scrollIntoView({ behavior: 'smooth' });

  const BannerCTALazy = dynamic(() => import('../elements/banner-cta'), {
    ssr: false,
  });

  const FireWriterLazy = dynamic(() => import('../elements/fire-your-writer'), {
    ssr: false,
  });

  return (
    <PageLayout>
      <Hero handleScroll={handleScroll} />
      <CVStack />
      <FireWriterLazy />
      <GiveTeamLife2 handleScroll={handleScroll} />

      <TurboChargeCareer />

      <main className="relative min-h-[240px] flex flex-col justify-center bg-[#45A6FF] overflow-hidden mb-10">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-10">
          <h3 className="text-center font-primary text-2xl font-semibold">
            Part of amazing communities
          </h3>
          <div className="text-center">
            <LogoCarousel />
          </div>
        </div>
      </main>

      <BannerCTALazy />
    </PageLayout>
  );
};

export default LandingPageTemplate;
