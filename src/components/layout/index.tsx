import { ReactNode } from "react";

const PageLayout = ({ children }: { children: ReactNode }) => {
  return <div className="lg:max-w-[923px] w-full">{children}</div>;
};

export default PageLayout;
