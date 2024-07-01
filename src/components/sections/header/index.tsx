'use client';

import LinkComponent from '@/components/elements/link';
import useMediaQuery from '@/hooks/useMediaQuery';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const isMobile = useMediaQuery(640);

  return (
    <header className="wrapper py-7 bg-none sm:bg-gray-primary flex justify-between items-center sm:sticky top-0 w-full z-50">
      <Link href="/" className="flex gap-x-3 items-center mx-auto sm:mx-0">
        <Image
          alt="Logo"
          src="/assets/bamble-logo.svg"
          width={isMobile ? 102 : 156}
          height={isMobile ? 15 : 24}
        />
      </Link>
      <div className="sm:block hidden">
        <LinkComponent
          url="https://calendly.com/bamble-melissa/30min"
          text="Reserve your spot"
        />
      </div>
    </header>
  );
};

export default Header;
