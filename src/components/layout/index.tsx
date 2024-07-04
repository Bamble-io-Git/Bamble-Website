import { ReactNode } from 'react';

type TLayoutProps = { children: ReactNode };

const PageLayout = ({ children }: TLayoutProps) => {
  return <div className="w-full  px-5">{children}</div>;
};

export default PageLayout;
