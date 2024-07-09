//@ts-nocheck
import React, { useEffect, useState } from 'react';
import Banner from '../banner';
import Image from 'next/image';
import clsx from 'clsx';

const FireYourWriter = () => {
  // on mouse hover, start the animation
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);

  const numbersBig = {
    0: <Image src="/assets/b-1.svg" alt="" width={188} height={188} />,
    1: <Image src="/assets/b-2.svg" alt="" width={188} height={188} />,
    2: <Image src="/assets/b-3.svg" alt="" width={188} height={188} />,
    3: <Image src="/assets/b-4.svg" alt="" width={188} height={188} />,
  };

  useEffect(() => {
    if (startAnimation) {
      const interval = setInterval(() => {
        setSelectedIndex((currentIndex) => {
          if (currentIndex < 3) {
            return currentIndex + 1;
          } else {
            clearInterval(interval);
            setStartAnimation(false);
            setTimeout(() => {
              setSelectedIndex(0);
            }, 1000);
            return 3;
          }
        });
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [startAnimation]);

  return (
    <section className="py-8 sm:py-20 bg-[#FCFCFC] space-y-6">
      <div className="mx-auto max-w-[350px]">
        <Banner text="Our AI CV captures your potential" type="star" />
      </div>

      <div className="text-center py-5 space-y-4 mb-10 w-auto sm:max-w-[630px] mx-auto">
        <h2 className="gradient-primary font-bold text-3xl">
          Fire your writer! Build a quality <br /> CV stress-free.
        </h2>

        <p>
          Our AI CV is effortless, timesaving and impactful. Bamble’s AI
          showcases your professional potential and aligns with your career
          goals.
        </p>
      </div>

      <div className="mx-auto max-w-[1051px]">
        <div className="flex md:flex-row flex-col items-center gap-y-10 md:gap-y-0 gap-x-24">
          <div className="bg-[#F1F3F7] border w-full sm:w-[509px] h-[400px] sm:h-[385px] custom-border2 rounded-[16px] flex sm:flex-row flex-col overflow-hidden relative transition-all duration-300 animate-fade text-base">
            <div className="top-5  transition-all duration-300 animate-fade text-base left-1/2 absolute transform -translate-x-1/2 ">
              {numbersBig[Number(selectedIndex)]}
            </div>
            <div className="bg-[#D9D9D9] w-full sm:w-[409px] absolute top-[40%] left-1/2 transform -translate-x-1/2 h-[251px] rounded-none md:rounded-[15px] "></div>
          </div>
          <div className="w-auto sm:w-[482px] my-auto space-y-6">
            <div className="flex gap-x-3 items-center">
              <div>
                {selectedIndex === 0 && startAnimation ? (
                  <Image
                    src="/assets/goals.svg"
                    alt=""
                    width={40}
                    height={40}
                  />
                ) : (
                  <Image src="/assets/1.svg" alt="" width={40} height={40} />
                )}
              </div>
              <p
                onMouseEnter={() => setStartAnimation(true)}
                className={clsx(
                  selectedIndex === 0 && 'font-bold text-[#45A6FF]',
                  'transition-all duration-300 animate-fade text-base'
                )}
              >
                Tell us your goals
              </p>
            </div>
            <div className="flex gap-x-3 items-center">
              <div>
                {selectedIndex === 1 && startAnimation ? (
                  <Image src="/assets/mic.svg" alt="" width={40} height={40} />
                ) : (
                  <Image src="/assets/2.svg" alt="" width={40} height={40} />
                )}
              </div>
              <p
                onMouseEnter={() => setStartAnimation(true)}
                className={clsx(
                  selectedIndex === 1 && 'font-bold text-[#45A6FF]',
                  'transition-all duration-300 animate-fade text-base'
                )}
              >
                Describe your profile in voice notes
              </p>
            </div>
            <div className="flex gap-x-3 items-center">
              <div>
                {selectedIndex === 2 && startAnimation ? (
                  <Image
                    src="/assets/linkedin.svg"
                    alt=""
                    width={40}
                    height={40}
                  />
                ) : (
                  <Image src="/assets/3.svg" alt="" width={40} height={40} />
                )}
              </div>
              <p
                onMouseEnter={() => setStartAnimation(true)}
                className={clsx(
                  selectedIndex === 2 && 'font-bold text-[#45A6FF]',
                  'transition-all duration-300 animate-fade text-base'
                )}
              >
                Upload your existing resources (CV, LinkedIn)
              </p>
            </div>
            <div className="flex gap-x-3 items-center">
              <div>
                {selectedIndex === 3 && startAnimation ? (
                  <Image
                    src="/assets/download.svg"
                    alt=""
                    width={40}
                    height={40}
                  />
                ) : (
                  <Image src="/assets/4.svg" alt="" width={40} height={40} />
                )}
              </div>
              <p
                onMouseEnter={() => setStartAnimation(true)}
                className={clsx(
                  selectedIndex === 3 && 'font-bold text-[#45A6FF]',
                  'transition-all duration-300 animate-fade text-base'
                )}
              >
                Download and start applying!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FireYourWriter;
