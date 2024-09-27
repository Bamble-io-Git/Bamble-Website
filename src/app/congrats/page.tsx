'use client';
import LeftStep from '@/components/elements/step/LeftStep';
import React, { useEffect } from 'react';
import { useCvStore } from '@/store/cv';
import Confetti from 'react-confetti';
import { PHProvider } from '../providers';

const Conf = () => {
  return <Confetti width={500} height={900} colors={['#45A6FF', '#F2E205']} />;
};

const Congrats = () => {
  const state = useCvStore((state) => state);

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
          <LeftStep image="/assets/congrats.webp" />
        </div>

        <div className="max-w-[520px] mx-auto pt-12 lg:pt-20 text-black flex flex-col space-y-5 relative sm:px-0 px-5">
          <Conf />

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
        </div>
      </section>
    </PHProvider>
  );
};

export default Congrats;
