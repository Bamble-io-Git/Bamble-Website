import { ReactNode } from 'react';
import Header from '../sections/header';
import Footer from '../sections/footer';

type TLayoutProps = { children: ReactNode };

const PageLayout = ({ children }: TLayoutProps) => {
  return (
    <div className="w-full">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
