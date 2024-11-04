import LandingPageTemplate from '@/components/template/LandingPageTemplate';

import { pageMetadata } from './config';
import { Metadata } from 'next';

export const metadata: Metadata = pageMetadata();

export default function Home() {
  return (
    <main className="flex justify-center">
      <LandingPageTemplate />
    </main>
  );
}
