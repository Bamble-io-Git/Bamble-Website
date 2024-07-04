import Image from 'next/image';
import Link from 'next/link';
import { SOCIAL_LINKS } from './mocks/data';

const Socials = () => {
  return (
    <div className="flex gap-x-8 items-center">
      {SOCIAL_LINKS.map(({ logo, url }, index) => (
        <Link
          href={url}
          key={url}
          target="_blank"
          className="bg-[#45A6FF] rounded-md p-2 w-[26px] h-[26px]"
        >
          <Image alt="" src={logo} width={18} height={24} />
        </Link>
      ))}
    </div>
  );
};

export default Socials;
