import Socials from "@/components/elements/link/socials";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-purple-primary py-20 mx-auto">
      <div className="flex justify-center flex-wrap">
        <Image
          src="/assets/bamble-white.svg"
          width={305}
          height={55}
          alt=""
          className="mb-10 sm:mb-0"
        />
        <Image
          src="/assets/footer-demarcator.svg"
          width={3}
          height={2}
          alt=""
          className="ml-0 mr-8 hidden sm:block"
        />

        <Socials />
      </div>

      <p className="text-center text-xl text-white-primary mt-12">
        © 2022 BambleTech| Recruitment
      </p>
    </footer>
  );
};

export default Footer;
