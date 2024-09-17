'use client';
import LeftStep from '@/components/elements/step/LeftStep';

import React, { useEffect, useState } from 'react';

import { useCvStore } from '@/store/cv';
import { useRouter } from 'next/navigation';

import clsx from 'clsx';
import Image from 'next/image';
import ProgressBar from '@/components/elements/ProgressBar';

const Intent = () => {
  const router = useRouter();
  const state = useCvStore((state) => state);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const data = [
    { id: 1, text: 'Land my first job', icon: '/assets/space-rocket.svg' },
    { id: 2, text: 'Career switch', icon: '/assets/switch.svg' },
    { id: 3, text: 'Find a C-Level role', icon: '/assets/new-level.svg' },
    {
      id: 4,
      text: 'Explore market opportunities',
      icon: '/assets/suitcase.svg',
    },
    {
      id: 5,
      text: 'New challenge in a higher position',
      icon: '/assets/medal.svg',
    },
  ];

  const localStorage =
    typeof window !== 'undefined' ? window.localStorage : null;

  const token = localStorage?.getItem('token');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!token) {
        router.push('/signin');
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [router, state.cv, token]);

  const [intentValues, setIntentValues] = useState<string>('');

  const toggleToAddIntentValues = (value: string) => {
    const valueAdded = intentValues.includes(value);

    if (!valueAdded) {
      setIntentValues(value);
    } else {
      setIntentValues('');
    }
  };

  useEffect(() => {
    if (intentValues.length === 0) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [intentValues.length]);

  const onSubmit = () => {
    if (intentValues) {
      state.addToShare(intentValues);
      router.push('/personal-details');
    }
  };

  return (
    <section className="flex justify-between px-1.5 lg:px-0">
      <div>
        <LeftStep image="/assets/intent.png" />
      </div>

      <div className="max-w-[520px] mx-auto pt-12 lg:pt-20 text-black flex flex-col space-y-5 relative sm:px-0 px-5">
        {/* <button
          className="absolute top-[4%] lg:top-[9.6%] left-3 lg:-left-20"
          onClick={() =>
            router.push(localStorage?.getItem('token') ? '/signin' : '/signup')
          }
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.57 5.92993L3.5 11.9999L9.57 18.0699"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.4999 12H3.66992"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button> */}
        <ProgressBar value={25} />

        <div className="mb-10 md:space-y-6 space-y-2 relative">
          <p>
            Excellent! You&lsquo;ve completed the first step. Let&lsquo;s move
            on to building your profile.
          </p>

          <p>Thanks, {state.cv.length ? state.cv[0].fullName : ''}!</p>

          <p className="font-bold md:text-2xl text-lg">
            What’s your objective with this CV?
          </p>
        </div>

        <div className="flex flex-wrap gap-5">
          {data.map((d) => (
            <button
              key={d.id}
              className={clsx(
                intentValues.includes(d.text)
                  ? 'bg-yellow-primary font-semibold'
                  : '',
                'border p-4 rounded-lg cursor-pointer hover:bg-yellow-primary flex gap-3 items-center border-[#0A0A0C] w-full sm:w-auto'
              )}
              onClick={() => toggleToAddIntentValues(d.text)}
            >
              <Image src={d.icon} alt="" width={24} height={24} />
              {d.text}
            </button>
          ))}
        </div>

        <div className="mx-auto">
          <button
            onClick={onSubmit}
            className={
              isButtonDisabled
                ? 'bg-[#979797] text-[#202020CC] px-10 py-3 rounded-md font-bold flex justify-center items-center gap-2 ml-auto cursor-not-allowed'
                : 'bg-yellow-primary text-black px-10 py-3 rounded-md font-bold flex justify-center items-center gap-2 ml-auto cursor-pointer'
            }
          >
            Next
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.38281 2.38086L10.6982 6.50007L6.38281 10.6193"
                stroke="#202020"
                stroke-opacity="0.8"
                stroke-width="1.28571"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.6988 6.5L2.29883 6.5"
                stroke="#202020"
                stroke-opacity="0.8"
                stroke-width="1.28571"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Intent;
