import { ReactNode } from "react";

const PageLayout = ({ children }: { children: ReactNode }) => {
  return <div className=" w-full">{children}</div>;
};

export default PageLayout;

// xl:max-w-[923px]
