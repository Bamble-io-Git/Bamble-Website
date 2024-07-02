import Image from 'next/image';
import React from 'react';
import Banner from '../banner';

const CVStack = () => {
  return (
    <section className="relative flex items-center justify-center  overflow-scroll">
      <div className="absolute top-[25%] z-50 left-[14%]">
        <Banner text="AI Powered Tailor-made CV" type="star" />
      </div>
      <div className="absolute top-[59.7%] z-50 right-[14%]">
        <Banner text=" Ready within minutes" type="star" />
      </div>

      <div className="absolute top-[25%] z-40">
        <Image
          src="/assets/rope.svg"
          className="z-40"
          alt=""
          width={703}
          height={299}
        />{' '}
      </div>
      <div className="top-0 left-1/2 mx-auto">
        <div className="relative">
          <Image
            src="/assets/cv1.svg"
            className="skew-y-2 z-20"
            alt=""
            width={1000}
            height={694}
          />{' '}
        </div>
        <div className="absolute top-[18%] left-[14.8%]">
          <Image
            src="/assets/cv2.svg"
            className="z-10"
            alt=""
            width={1030}
            height={694}
          />{' '}
        </div>

        <div className="absolute top-[32%]">
          <Image
            src="/assets/cv3.svg"
            className="skew-y-2"
            alt=""
            width={1000}
            height={694}
          />
        </div>
      </div>
    </section>
  );
};

export default CVStack;
