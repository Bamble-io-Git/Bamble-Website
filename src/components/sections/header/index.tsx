'use client';

import LinkComponent from '@/components/elements/link';
import useMediaQuery from '@/hooks/useMediaQuery';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const isMobile = useMediaQuery(640);

  return (
    <header
      className="wrapper py-5 md:py-7 bg-gray-primary flex justify-between items-center sm:sticky top-0 w-full px-5"
      style={{
        zIndex: 1000,
      }}
    >
      <Link href="/" className="flex gap-x-3 items-center">
        <Image
          alt="Logo"
          src="/assets/bamble-logo.svg"
          width={isMobile ? 113 : 167}
          height={isMobile ? 17 : 26}
        />
      </Link>
      <div className="">
        <LinkComponent url="/signup" text="Start now" />
      </div>
    </header>
  );
};

export default Header;
