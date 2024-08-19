'use client';
import LeftStep from '@/components/elements/step/LeftStep';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { userDataValidation } from './schema/user-data';
import { useCvStore } from '@/store/cv';
import { useRouter } from 'next/navigation';
type TCreateUserSchema = {
  email: string;
  fullName: string;
};
const Signup = () => {
  const form = useForm<TCreateUserSchema>({
    resolver: zodResolver(userDataValidation),
  });
  const router = useRouter();
  const { formState, register, handleSubmit } = form;
  const state = useCvStore((state) => state);

  const onSubmit = (values: TCreateUserSchema) => {
    if (values) {
      state.addToCV(values);
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

  return (
    <section className="flex justify-between">
      <div>
        <LeftStep image="" />
      </div>

      <div className="max-w-[520px] mx-auto pt-20 text-black flex flex-col space-y-5 sm:px-0 px-5">
        <div className="mb-10">
          <h2 className="font-bold text-[32px] font-secondary">
            {' '}
            Welcome to Bamble!
          </h2>

          <p>Ready to get your dream job?</p>
        </div>

        <form
          className="flex flex-col space-y-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col space-y-3">
            <label htmlFor="" className="font-bold font-primary">
              Your full name
            </label>
            <input
              type="text"
              placeholder={
                state.cv.length ? state.cv[0].fullName : 'Your email here...'
              }
              className="border rounded-lg p-3"
              {...register('fullName')}
            />
            {formState.errors.fullName && (
              <p className="text-[#FC5555] text-sm">
                Full name must contain at least 3 characters
              </p>
            )}
          </div>

          <div className="flex flex-col space-y-3">
            <label htmlFor="" className="font-bold font-primary">
              Your best e-mail
            </label>
            <input
              type="email"
              placeholder={
                state.cv.length ? state.cv[0].email : 'Your email here...'
              }
              className="border rounded-lg p-3"
              {...register('email')}
            />

            {formState.errors.email && (
              <p className="text-[#FC5555] text-sm">Invalid email address.</p>
            )}
          </div>

          <p className="text-[#414143] font-secondary text-sm">
            By registering for an account, you are consenting to our Terms of
            Service and confirming that you have reviewed and accepted the
            Global Privacy Statement.
          </p>

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
        </form>
      </div>
    </section>
  );
};

export default Signup;
