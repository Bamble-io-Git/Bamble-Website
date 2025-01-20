import Image from 'next/image';
import React, { useState } from 'react';
import Banner from '../banner';
import clsx from 'clsx';
import styles from './styles.module.css';
import useMediaQuery from '@/hooks/useMediaQuery';

const CVStack = () => {
  const [isHover, setIsHover] = useState(false);
  const isMobile = useMediaQuery(640);
  return (
    <section className={clsx(styles.stack, 'py-12 sm:mb-0 mb-10')}>
      <div
        className="relative flex items-center justify-center overflow-hidden duration-300 transition-all p-0 no-scrollbar max-w-[1030px] mx-auto"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className="absolute top-[25%] z-50 md:left-[12%] left-[20%]">
          <Banner text="AI Powered Tailor-made CV" type="star" />
        </div>
        <div className="absolute top-[60.7%] z-50 right-[32%] md:right-[12%]">
          <Banner text="Ready within minutes" type="star" />
        </div>

        <div
          className="absolute top-[27%] z-40"
          style={{
            transition: '0.5s ease-in',
          }}
        >
          <Image
            priority
            src="/assets/rope.svg"
            className={clsx(
              isHover
                ? 'hidden transition-all duration-500 animate-fade'
                : 'block transition-all duration-500 animate-fade',
              isMobile
                ? 'hidden transition-all duration-500 animate-fade'
                : 'block transition-all duration-500 animate-fade'
            )}
            alt=""
            width={633}
            height={299}
            style={{
              transition: '0.5s ease-in',
            }}
          />
        </div>
        <div className="top-0 left-1/2 mx-auto">
          <div className="relative">
            <Image
              priority
              src="/assets/cv-1-stand.svg"
              className={clsx(
                isHover ? 'transform skew-y-0' : styles.skewRight,
                'z-20'
              )}
              style={{
                transition: '0.5s ease-in',
              }}
              alt=""
              width={1000}
              height={694}
            />{' '}
          </div>
          <div
            className={clsx(
              isHover ? 'left-[2.8%]' : '',
              'absolute top-[18%] w-full'
            )}
          >
            {!isHover ? (
              <Image
                priority
                src="/assets/cv2.svg"
                alt=""
                width={1030}
                height={694}
                style={{
                  transition: '0.5s ease-in',
                }}
              />
            ) : (
              <Image
                priority
                src="/assets/cv-2-stand.svg"
                alt=""
                className="-mx-3.5"
                width={1000}
                height={694}
                style={{
                  transition: '0.5s ease-in',
                }}
              />
            )}
          </div>

          <div
            className={clsx(!isHover ? 'top-[13.8%]' : 'top-[42%]', 'absolute')}
          >
            <Image
              priority
              src="/assets/cv3.svg"
              className={!isHover ? styles.skewDown : ''}
              alt=""
              width={1000}
              height={694}
              style={{
                transition: '0.5s ease-in',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVStack;
