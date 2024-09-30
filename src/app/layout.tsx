import type { Metadata } from 'next';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import GTag from '@/scripts/google-tag';
import './globals.css';
import { montserrat, notoSans, ubuntu } from './theme/fonts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

      <body
        className={`${montserrat.variable} ${notoSans.variable} ${ubuntu.variable}`}
        id="portal"
      >
        <ToastContainer position="top-right" />
        {children}
      </body>

      <GoogleAnalytics gaId="G-VCRDL8EWYD" />
      <GoogleTagManager gtmId="GTM-KRPQNFLH" />
    </html>
  );
}
