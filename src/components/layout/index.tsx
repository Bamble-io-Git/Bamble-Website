import { ReactNode } from 'react';
import Header from '../sections/header';
import Footer from '../sections/footer';
import CookieConsent from '../elements/consent-cookie';

type TLayoutProps = { children: ReactNode };

const PageLayout = ({ children }: TLayoutProps) => {
  return (
    <div className="w-full">
      <Header />
      {children}
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default PageLayout;
