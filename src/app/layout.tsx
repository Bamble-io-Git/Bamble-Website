// import Footer from '@/components/sections/footer';
// import Header from '@/components/sections/header';
import type { Metadata } from 'next';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import GTag from '@/scripts/google-tag';
import './globals.css';
import { montserrat, notoSans } from './theme/fonts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PHProvider } from './providers';

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
      <GTag />
      {/* <PHProvider> */}
      <body
        className={`${montserrat.variable} ${notoSans.variable}`}
        id="portal"
      >
        <ToastContainer position="top-right" />
        {children}
      </body>
      {/* </PHProvider> */}

      <GoogleAnalytics gaId="G-VCRDL8EWYD" />
      <GoogleTagManager gtmId="GTM-KRPQNFLH" />
    </html>
  );
}
