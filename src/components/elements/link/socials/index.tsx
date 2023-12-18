import Image from "next/image";
import Link from "next/link";
import { SOCIAL_LINKS } from "./mocks/data";

const Socials = () => {
  return (
    <div className="flex gap-x-8 items-center">
      {SOCIAL_LINKS.map(({ logo, url }, index) => (
        <Link href={url} key={url} target="_blank">
          <Image
            alt=""
            src={logo}
            width={index == -0 ? 9.3 : 18.6}
            height={24}
          />
        </Link>
      ))}
    </div>
  );
};

export default Socials;
