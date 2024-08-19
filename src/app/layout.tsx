// import Footer from '@/components/sections/footer';
// import Header from '@/components/sections/header';
import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
// import GTag from '@/scripts/google-tag';
import './globals.css';
import { montserrat, notoSans } from './theme/fonts';
export const metadata: Metadata = {
  title: 'Bamble',
  description: 'Create AI powered high-quality CV in 3 clicks',
  applicationName: 'Bamble CV Creator',
  generator: 'Next.js',
  keywords: 'CV, Resume, AI, CV Builder, Resume Builder',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${notoSans.variable}`}
        id="portal"
      >
        {/* <GTag /> */}

        {children}
      </body>
      <GoogleAnalytics gaId="G-TJESG59G90" />
    </html>
  );
}
