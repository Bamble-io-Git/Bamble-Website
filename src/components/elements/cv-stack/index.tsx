import Image from 'next/image';
import React, { useState } from 'react';
import Banner from '../banner';
import clsx from 'clsx';
import styles from './styles.module.css';

const CVStack = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <section
      className={clsx(
        styles.stack,
        'py-20 relative flex items-center justify-center overflow-hidden duration-300 transition-all p-0 no-scrollbar'
      )}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="absolute top-[25%] z-50 left-[14%]">
        <Banner text="AI Powered Tailor-made CV" type="star" />
      </div>
      <div className="absolute top-[65.7%] z-50 right-[14%]">
        <Banner text=" Ready within minutes" type="star" />
      </div>

      <div
        className="absolute top-[27%] z-40"
        style={{
          transition: '0.5s ease-in',
        }}
      >
        <Image
          src="/assets/rope.svg"
          className={clsx(isHover ? 'hidden' : 'block')}
          alt=""
          width={703}
          height={299}
          style={{
            transition: '0.5s ease-in',
          }}
        />
      </div>
      <div className="top-0 left-1/2 mx-auto">
        <div className="relative">
          <Image
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
        <div className="absolute top-[18%] left-[14.8%]">
          {!isHover ? (
            <Image
              src="/assets/cv2.svg"
              alt=""
              width={1030}
              height={694}
              style={{
                transition: '0.6s ease-in',
              }}
            />
          ) : (
            <Image
              src="/assets/cv-2-stand.svg"
              alt=""
              width={1000}
              height={694}
              style={{
                transition: '0.5s ease-in',
              }}
            />
          )}
        </div>

        <div className={clsx(!isHover ? 'top-[22%]' : 'top-[52%]', 'absolute')}>
          <Image
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
    </section>
  );
};

export default CVStack;
