'use client';
import LeftStep from '@/components/elements/step/LeftStep';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useCvStore } from '@/store/cv';
import { useRouter } from 'next/navigation';
import { userDataValidation } from '../signup/schema/user-data';
import clsx from 'clsx';
import Image from 'next/image';
import ProgressBar from '@/components/elements/ProgressBar';
import Tips from '@/components/elements/tips';
import Microphone from '@/components/elements/microphone';
import Keyboard from '@/components/elements/keyboard';

type TCreateUserSchema = {
  email: string;
  fullName: string;
};

const Final = () => {
  const router = useRouter();
  const state = useCvStore((state) => state);
  console.log('state', state);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [recording, setRecording] = useState<Blob | undefined>(undefined);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!state?.cv[0]?.fullName) {
        router.push('/congrats');
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [router, state.cv]);

  const [text, setText] = useState<string>('');

  useEffect(() => {
    if (!recording && !text) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [recording, text]);

  const [showKeyboard, setShowKeyboard] = useState(false);

  const onSubmit = () => {
    if (recording || text) {
      //@ts-ignore
      state.addToWorkExperiences(recording ? recording : text);
      router.push('/congrats');
    }
  };

  return (
    <section className="flex justify-between px-1.5 lg:px-0">
      <div>
        <LeftStep image="/assets/final.png" />
      </div>

      <div className="max-w-[520px] mx-auto pt-12 lg:pt-20 text-black flex flex-col space-y-5 relative sm:px-0 px-5">
        <button
          className="absolute top-[4%] lg:top-[9.6%] left-4 lg:-left-20"
          onClick={() => router.push('/personal-details')}
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
        </button>

        <ProgressBar value={100} />

        <div className="mb-10 md:space-y-6 space-y-2">
          <p className="text-sm">
            Almost there! Get ready to unlock amazing opportunities.
          </p>

          <p>Perfect, {state.cv.length ? state.cv[0].fullName : ''}</p>

          <p className="font-bold md:text-2xl text-lg">
            Now submit the final details
          </p>
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

export default Final;
