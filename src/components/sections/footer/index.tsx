import Socials from '@/components/elements/link/socials';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="mx-auto px-10 md:px-40 border-t w-screen">
      <div className="flex lg:flex-row flex-col items-center justify-center lg:justify-between gap-0 lg:gap-5 flex-wrap border-b py-12">
        <Image
          src="/assets/Bamble-Logo.svg"
          width={134}
          height={21}
          alt=""
          className="mb-10 md:mb-0"
        />

        <Socials />
      </div>

      <div className="flex justify-center text-[#090923] gap-x-3 py-6 text-sm  md:text-base font-normal">
        <p>Copyright © 2024 Bamble</p>
        <p> All Rights Reserved</p>
        <p className="underline lg:block hidden">Terms and Conditions</p>
        <p className="underline lg:block hidden">Privacy Policy</p>
      </div>

      <div className="lg:hidden  flex justify-center gap-x-5 mb-6">
        <p className="underline text-[#45A6FF]">Terms and Conditions</p>
        <p className="underline text-[#45A6FF]">Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
