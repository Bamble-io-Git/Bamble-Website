import React from 'react';
import Banner from '../banner';
import LinkComponent from '../link';
import Image from 'next/image';
import useMediaQuery from '@/hooks/useMediaQuery';

const TurboChargeCareer = () => {
  const isMobile = useMediaQuery(640);
  return (
    <section className="py-5 sm:py-20">
      <div className="mx-auto max-w-[380px]">
        <Banner
          lg
          text="3000+ Jobseekers are using Bamble’s Career Co-pilot "
          type="pen"
        />
      </div>
      <div className="text-center py-6">
        <h2 className="text-[30px] gradient-primary -mb-1 sm:-mb-4 font-bold">
          We help job candidates{' '}
        </h2>
        <h2 className="text-[30px] gradient-primary font-bold">succeed!</h2>
      </div>

      <div className="custom-border2 rounded-[20px] flex md:flex-row flex-col  md:w-[880px] mx-auto my-3 sm:my-12">
        <div className="w-auto md:w-[473px] px-3 md:px-10 py-16 flex-col space-y-10 ">
          <div className="max-w-[280px]">
            <Banner text="Free for all users!" />
          </div>
          <p className="text-base w-[90%] sm:w-[75%]">
            {/* Landing your dream job costs the same as paying for Netflix! */}
            Price: Free
          </p>

          <p className="sm:w-full w-[90%] md:w-[85%] relative">
            {/* <span className="text-[60px] font-bold text-gradient">€7.99</span>
            <span className="w-[35%] md:w-[53%] h-[8px] bg-red-500 absolute md:top-3 top-2 left-0"></span>
            <span className="text-base text-black font-bold pl-1">
              /fixed price
            </span> */}
          </p>

          <div className="max-w-[100%] sm:max-w-[70%]">
            <LinkComponent text="Start now for free!" url="/signup" />
          </div>
        </div>

        <div
          className="min-w-fit md:w-[520px] custom-border2 pl-8 pr-5 py-16 sm:py-36 flex-col space-y-4 sm:space-y-5 bg-[#F7FAFC]"
          style={{
            borderRadius: isMobile ? '0px 0px 20px 20px' : '0px 20px 20px 0px',
          }}
        >
          <strong className="font-bold">What you get:</strong>

          <div className="flex gap-x-3 items-center">
            <Image
              src="/assets/checked-circle.svg"
              alt=""
              width={26}
              height={26}
            />
            <p className="text-base">Ready within seconds</p>
          </div>

          <div className="flex gap-x-3 items-center">
            <Image
              src="/assets/checked-circle.svg"
              alt=""
              width={26}
              height={26}
            />
            <p className="text-base">AI-Powered Job Specific CV</p>
          </div>

          <div className="flex gap-x-3 items-center">
            <Image
              src="/assets/checked-circle.svg"
              alt=""
              width={26}
              height={26}
            />
            <p className="text-base">Optimized for ATS Screening</p>
          </div>
          <div className="flex gap-x-3 items-center">
            <Image
              src="/assets/checked-circle.svg"
              alt=""
              width={26}
              height={26}
            />
            <p className="text-base">International Recruiter Approved</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TurboChargeCareer;
