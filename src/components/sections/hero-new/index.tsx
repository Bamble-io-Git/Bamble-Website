'use client';
import Button from '@/components/elements/button';
import Card from '@/components/elements/cards/card';
import LinkComponent from '@/components/elements/link';
import useMediaQuery from '@/hooks/useMediaQuery';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { performanceIndex } from './data';
import Banner from '@/components/elements/banner';

const Hero = ({ handleScroll }: { handleScroll: () => void }) => {
  const [selectedCard, setSelectedCard] = useState(0);

  const handleSelectCard = useCallback(() => {
    setSelectedCard((previousState) =>
      previousState === performanceIndex.length - 1 ? 0 : previousState + 1
    );
  }, []);

  useEffect(() => {
    const intervalId = setInterval(handleSelectCard, 1200);

    return () => clearInterval(intervalId);
  }, [handleSelectCard]);

  return (
    <section className="mt-5">
      <div className="flex justify-center flex-col text-center gap-y-6 pt-5 sm:pt-12 pb-20 max-w-[667px] mx-auto px-1 sm:px-7 md:px-0 z-10">
        <div className="mx-auto sm:block hidden">
          <Banner text="Free for first 1,000 users!" />
        </div>

        <h1
          className="text-transparent bg-clip-text bg-gradient-to-br from-blue-200 to-blue-900 text-[36px] sm:text-[64px] font-bold bg-gradient-to-r from-blue-500 bg-clip-text"
          style={{
            lineHeight: 1.2,
          }}
        >
          Create high-quality CV in 3 clicks
        </h1>

        <h2 className="text-black text-base sm:text-[14px] font-primary   sm:leading-7 font-normal z-10">
          Bamble’s AI CV increases your chances of getting that first interview
          and landing your dream job! Don’t waste time on poor,
          non-representative and sub-par CVs.
        </h2>

        <div className="flex flex-col sm:flex-row justify-center gap-5 pt-6 pb-7 sm:mx-0 mx-auto z-10">
          <div>
            <LinkComponent
              url="https://forms.gle/jonCj7M5zsM6Y8vy9"
              text="Reserve your spot"
            />
          </div>

          <div className="my-auto  sm:block hidden">
            <Image height={30} width={2} src="/assets/divi.svg" alt="" />
          </div>

          <div className="my-auto mx-auto block sm:hidden">
            <Image height={2} width={30} src="/assets/div-hor.svg" alt="" />
          </div>
          <div className="block">
            <div className="relative block h-[32px] left-[40%] sm:left-0 sm:w-auto w-[40px] mb-3 sm:mb-auto">
              <Image
                height={30}
                width={30}
                src="/assets/face-1.png"
                className="rounded-full absolute top-0 left-0"
                alt=""
              />
              <Image
                width={30}
                height={30}
                src="/assets/face-2.png"
                className="rounded-full absolute top-0 left-3"
                alt=""
              />{' '}
              <Image
                width={30}
                height={30}
                src="/assets/face-3.png"
                className="rounded-full absolute top-0 left-6"
                alt=""
              />
            </div>

            <div>
              <span className="text-[#45A6FF] font-bold"> 780 people</span>
              <span className="text-[#45A6FF]">
                {' '}
                have guaranteed their spot{' '}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;