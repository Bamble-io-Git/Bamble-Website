"use client";
import LinkComponent from "@/components/elements/link";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";

const Header = () => {
  const isMobile = useMediaQuery(640);

  return (
    <header className="wrapper py-7 bg-none sm:bg-gray-primary flex justify-between items-center sm:sticky top-0 w-full z-20 ">
      <div className="flex gap-x-3 items-center mx-auto sm:mx-0">
        <Image
          alt="Logo"
          src="/assets/bamble-logo.svg"
          width={isMobile ? 32 : 50}
          height={isMobile ? 39 : 61}
        />
        <Image
          alt="Logo"
          src="/assets/bamble-black-logo.svg"
          width={isMobile ? 102 : 156}
          height={isMobile ? 15 : 24}
        />
      </div>
      <div className="sm:block hidden">
        <LinkComponent
          url="https://calendly.com/bamble-melissa/30min"
          text="Book a call"
        />
      </div>
    </header>
  );
};

export default Header;
