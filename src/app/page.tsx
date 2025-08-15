// import LandingPageTemplate from '@/components/template/LandingPageTemplate';

// import { pageMetadata } from './config';
// import { Metadata } from 'next';

// export const metadata: Metadata = pageMetadata();

// export default function Home() {
//   return (
//     <main className="flex justify-center">
//       <LandingPageTemplate />
//     </main>
//   );
// }

import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import ProgramSection from '@/components/ProgramSection';
import CurriculumSection from '@/components/CurriculumSection';
import BusinessImpactSection from '@/components/BusinessImpactSection';
import TestimonialSection from '@/components/TestimonialSection';
import WhatYouGetSection from '@/components/WhatYouGetSection';
import FinalCTASection from '@/components/FinalCTASection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <ProgramSection />
      <CurriculumSection />
      <BusinessImpactSection />
      <TestimonialSection />
      <WhatYouGetSection />
      <FinalCTASection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
