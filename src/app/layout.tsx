import type { Metadata } from 'next';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import GTag from '@/scripts/google-tag';
import './globals.css';
import { montserrat, notoSans, ubuntu } from './theme/fonts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PHProvider from '@/lib/posthog';
import PosthogScript from '@/scripts/posthog';
import { pageMetadata } from './config';

export const metadata: Metadata = pageMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GTag />
      <PosthogScript />

      <body
        className={`${montserrat.variable} ${notoSans.variable} ${ubuntu.variable}`}
        id="portal"
      >
        <ToastContainer position="top-right" />
        <PHProvider>{children}</PHProvider>
      </body>

      <GoogleAnalytics gaId="G-VCRDL8EWYD" />
      <GoogleTagManager gtmId="GTM-KRPQNFLH" />
    </html>
  );
}
