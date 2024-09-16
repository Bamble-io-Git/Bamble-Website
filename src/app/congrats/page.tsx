'use client';
import LeftStep from '@/components/elements/step/LeftStep';

import React, { useEffect, useState } from 'react';

import { useCvStore } from '@/store/cv';

import Confetti from 'react-confetti';
import { PHProvider } from '../providers';
import Link from 'next/link';
// import Link from 'next/link';

const Conf = () => {
  return <Confetti width={500} height={900} colors={['#45A6FF', '#F2E205']} />;
};

const Congrats = () => {
  const state = useCvStore((state) => state);

  // const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const localStorage = typeof window !== 'undefined' && window.localStorage;

  useEffect(() => {
    if (localStorage) {
      localStorage.removeItem('token');
      localStorage.removeItem('cv-state');
    }
  }, [localStorage]);

  return (
    <PHProvider>
      <section className="flex justify-between px-1.5 lg:px-0">
        <div>
          <LeftStep image="/assets/congrats.png" />
        </div>

        <div className="max-w-[520px] mx-auto pt-12 lg:pt-20 text-black flex flex-col space-y-5 relative sm:px-0 px-5">
          <Conf />

          {/* <Link href="/">🏚️</Link> */}
          <div className="mb-10 md:space-y-6 space-y-2">
            <p className="text-sm"> Take a look at your resume.</p>

            <p>
              CV would be ready in less than 5mins!
              <strong> {state.cv.length ? state.cv[0].fullName : ''} </strong>
            </p>

            <p className="font-bold md:text-2xl text-lg">
              Check your email for your cv
            </p>
          </div>

          {/* <div className="mx-auto">
          Link Here
        </div> */}
        </div>
      </section>
    </PHProvider>
  );
};

export default Congrats;

//  <Link
//    href="mailto:benneth@bamble.io"
//    className={
//      !isButtonDisabled
//        ? 'bg-[#979797] text-[#202020CC] px-10 py-3 rounded-md font-bold flex justify-center items-center gap-2 ml-auto cursor-not-allowed'
//        : 'bg-yellow-primary text-black px-10 py-3 rounded-md font-bold flex justify-center items-center gap-2 ml-auto cursor-pointer'
//    }
//  >
//    Download
//    <svg
//      width="17"
//      height="17"
//      viewBox="0 0 17 17"
//      fill="none"
//      xmlns="http://www.w3.org/2000/svg"
//    >
//      <g clip-path="url(#clip0_3487_11282)">
//        <path
//          fill-rule="evenodd"
//          clip-rule="evenodd"
//          d="M3.71094 10.8838C3.57833 10.8838 3.45115 10.8311 3.35738 10.7373C3.26362 10.6436 3.21094 10.5164 3.21094 10.3838V2.38379C3.21094 2.25118 3.26362 2.124 3.35738 2.03024C3.45115 1.93647 3.57833 1.88379 3.71094 1.88379H12.7109C12.8435 1.88379 12.9707 1.93647 13.0645 2.03024C13.1583 2.124 13.2109 2.25118 13.2109 2.38379V10.3838C13.2109 10.5164 13.1583 10.6436 13.0645 10.7373C12.9707 10.8311 12.8435 10.8838 12.7109 10.8838H10.7109C10.5783 10.8838 10.4512 10.9365 10.3574 11.0302C10.2636 11.124 10.2109 11.2512 10.2109 11.3838C10.2109 11.5164 10.2636 11.6436 10.3574 11.7373C10.4512 11.8311 10.5783 11.8838 10.7109 11.8838H12.7109C13.1088 11.8838 13.4903 11.7258 13.7716 11.4444C14.0529 11.1631 14.2109 10.7816 14.2109 10.3838V2.38379C14.2109 1.98596 14.0529 1.60443 13.7716 1.32313C13.4903 1.04182 13.1088 0.883789 12.7109 0.883789L3.71094 0.883789C3.31311 0.883789 2.93158 1.04182 2.65028 1.32313C2.36897 1.60443 2.21094 1.98596 2.21094 2.38379V10.3838C2.21094 10.7816 2.36897 11.1631 2.65028 11.4444C2.93158 11.7258 3.31311 11.8838 3.71094 11.8838H5.71094C5.84355 11.8838 5.97072 11.8311 6.06449 11.7373C6.15826 11.6436 6.21094 11.5164 6.21094 11.3838C6.21094 11.2512 6.15826 11.124 6.06449 11.0302C5.97072 10.9365 5.84355 10.8838 5.71094 10.8838H3.71094Z"
//          fill="black"
//        />
//        <path
//          fill-rule="evenodd"
//          clip-rule="evenodd"
//          d="M7.85757 16.7378C7.90401 16.7844 7.95919 16.8213 8.01994 16.8465C8.08068 16.8717 8.1458 16.8847 8.21157 16.8847C8.27734 16.8847 8.34246 16.8717 8.4032 16.8465C8.46395 16.8213 8.51912 16.7844 8.56557 16.7378L11.5656 13.7378C11.6595 13.6439 11.7122 13.5166 11.7122 13.3838C11.7122 13.251 11.6595 13.1237 11.5656 13.0298C11.4717 12.9359 11.3443 12.8832 11.2116 12.8832C11.0788 12.8832 10.9515 12.9359 10.8576 13.0298L8.71157 15.1768V6.38379C8.71157 6.25118 8.65889 6.124 8.56512 6.03024C8.47135 5.93647 8.34418 5.88379 8.21157 5.88379C8.07896 5.88379 7.95178 5.93647 7.85802 6.03024C7.76425 6.124 7.71157 6.25118 7.71157 6.38379V15.1768L5.56557 13.0298C5.47168 12.9359 5.34435 12.8832 5.21157 12.8832C5.07879 12.8832 4.95146 12.9359 4.85757 13.0298C4.76368 13.1237 4.71094 13.251 4.71094 13.3838C4.71094 13.5166 4.76368 13.6439 4.85757 13.7378L7.85757 16.7378Z"
//          fill="black"
//        />
//      </g>
//      <defs>
//        <clipPath id="clip0_3487_11282">
//          <rect
//            width="16"
//            height="16"
//            fill="white"
//            transform="translate(0.210938 0.883789)"
//          />
//        </clipPath>
//      </defs>
//    </svg>
//  </Link>;
