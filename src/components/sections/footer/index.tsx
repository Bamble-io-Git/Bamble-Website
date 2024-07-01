import Socials from '@/components/elements/link/socials';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="mx-auto px-40 border-t w-screen">
      <div className="flex justify-between flex-wrap border-b py-12">
        <Image
          src="/assets/Bamble-Logo.svg"
          width={134}
          height={21}
          alt=""
          className="mb-10 sm:mb-0"
        />

        <Socials />
      </div>

      <div className="flex justify-center text-[#090923] gap-x-3 py-6 text-base font-normal">
        <p>Copyright © 2024 Bamble</p>
        <p> All Rights Reserved</p>
        <p className="underline">Terms and Conditions</p>
        <p className="underline">Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
