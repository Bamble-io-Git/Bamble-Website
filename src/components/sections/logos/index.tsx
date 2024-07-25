import useMediaQuery from '@/hooks/useMediaQuery';
import Image from 'next/image';

export default function LogoCarousel() {
  const isMobile = useMediaQuery(640);
  const logos = [
    { src: '/assets/dj.jpg', alt: 'DJ' },
    { src: '/assets/eit.png', alt: 'EIT' },
    { src: '/assets/had.png', alt: 'HAD' },
  ];

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden py-10 justify-center">
      <ul
        className="flex flex-col md:flex-row space-y-10 md:space-y-0 items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none "
        aria-hidden="true"
      >
        {logos.map((logo, index) => (
          <li key={index}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={index === 1 && !isMobile ? 400 : 120}
              height={20}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
