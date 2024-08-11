'use client';
import LeftStep from '@/components/elements/step/LeftStep';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useCvStore } from '@/store/cv';
import { useRouter } from 'next/navigation';
import { userDataValidation } from '../signup/schema/user-data';
type TCreateUserSchema = {
  email: string;
  fullName: string;
};
const Intent = () => {
  const form = useForm<TCreateUserSchema>({
    resolver: zodResolver(userDataValidation),
  });
  const router = useRouter();
  const { formState, register, handleSubmit } = form;
  const state = useCvStore((state) => state);
  console.log('state', state);
  const onSubmit = (values: TCreateUserSchema) => {
    if (values) {
      state.addToCV(values);
      state.incrementSteps();
      router.push('/intent');
    }
  };

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    if (formState.isValid) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [formState.isValid]);

  const data = [
    { id: 1, text: 'Land my first job' },
    { id: 2, text: 'Career switch' },
    { id: 3, text: 'Find a C-Level role' },
    { id: 4, text: 'Explore market opportunities' },
    { id: 5, text: 'New challenge in a higher position' },
  ];

  return (
    <section className="flex justify-between">
      <div>
        <LeftStep image="/assets/intent.png" />
      </div>

      <div className="max-w-[520px] mx-auto pt-20 text-black flex flex-col space-y-5">
        <button>Back</button>

        <div className="mb-10 space-y-6">
          <p>
            Excellent! You've completed the first step. Let's move on to
            building your profile.
          </p>

          <p>Thanks, {state.cv.length ? state.cv[0].fullName : ''}!</p>

          <p className="font-bold text-2xl">
            Share with us what you want to achieve with this CV?
          </p>
        </div>

        <div className="flex flex-wrap gap-5">
          {data.map((d) => {
            return (
              <button
                key={d.id}
                className="border p-4 rounded-lg cursor-pointer hover:bg-yellow-primary"
              >
                {d.text}
              </button>
            );
          })}
        </div>

        <div className="mx-auto">
          <button
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
