'use client';

import LeftStep from '@/components/elements/step/LeftStep';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { userDataValidation } from './schema/user-data';
import { useCvStore } from '@/store/cv';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import axios, { AxiosError } from 'axios';
import { sendGTMEvent } from '@next/third-parties/google';
import Link from 'next/link';
import { orgs } from './data/orgs';

const organizations = orgs;

type TCreateUserSchema = {
  email: string;
  fullName: string;
};
const Signup = () => {
  const form = useForm<TCreateUserSchema>({
    resolver: zodResolver(userDataValidation),
  });

  const [community, setCommunity] = useState('not-applicable');

  const handleCommunity = (e: ChangeEvent<any>) => setCommunity(e.target.value);

  const router = useRouter();

  const localStorage =
    typeof window !== 'undefined' ? window.localStorage : null;

  useEffect(() => {
    localStorage?.removeItem('token');
  }, [localStorage, router]);

  const login = async ({
    fullName,
    email,
  }: {
    fullName: string;
    email: string;
  }) => {
    const firstName = fullName.split(' ')[0];
    const lastName = fullName.split(' ')[1] ?? '';

    try {
      toast.loading('Authenticating....');
      const response = await axios.post(
        'https://cv.backend.bamble.io/users',
        {
          first_name: firstName,
          last_name: lastName,
          email,
          password: 'stringcehw88938f28998efjkndj90rej9vdoijnsd',
          partner_community: community,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
          },
        }
      );

      if (response.status == 422) {
        toast.info(response?.data?.details);
      }
      if (response.status === 201) {
        toast.dismiss();
        toast.success('Please check your email for login credentials');
        router.push('/account-verify');
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.dismiss();
        toast.error(error?.response?.data.detail);
        router.push('/signin');
      }
    }
  };

  const { formState, register, handleSubmit } = form;

  const state = useCvStore((state) => state);

  const onSubmit = async (values: TCreateUserSchema) => {
    console.log(values);
    if (values) {
      state.addToCV(values);
      sendGTMEvent({
        event: 'Event - Signup',
        value: values.email,
      });
      await login(values);
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
          <h2 className="font-bold text-[32px] font-tertiary">
            {' '}
            Welcome to Bamble!
          </h2>

          <p className="font-tertiary">Ready to get your dream job?</p>
        </div>

        <form
          className="flex flex-col space-y-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col space-y-3">
            <label htmlFor="" className="font-bold font-tertiary">
              Your full name
            </label>
            <input
              type="text"
              placeholder={
                state.cv.length
                  ? state.cv[0].fullName
                  : 'Your full name here...'
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
            <label htmlFor="" className="font-bold font-tertiary">
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
              <p className="text-[#FC5555] text-sm font-tertiary">
                Invalid email address.
              </p>
            )}
          </div>

          <div className="flex flex-col space-y-3">
            <div className="w-full">
              <label htmlFor="community" className="font-bold font-tertiary">
                Your Community
              </label>
              <select
                id="community"
                name="community"
                onChange={handleCommunity}
                className="mt-3 block w-full bg-white  shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border rounded-lg p-3"
              >
                <option value="not-applicable" selected>
                  Select Partner Community
                </option>

                {organizations.map((org) => {
                  return (
                    <option key={org} value={org}>
                      {org}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <p className="text-[#414143] text-sm text-center font-tertiary">
            Already have an account?
            <Link href="/signin" className="text-blue-primary">
              {' '}
              Sign in
            </Link>
          </p>

          <p className="text-[#414143] font-tertiary text-sm">
            By registering for an account, you are consenting to our
            <Link href="/terms" className="text-blue-primary">
              {' '}
              Terms of Service{' '}
            </Link>
            and confirming that you have reviewed and accepted the Global
            <Link href="/privacy-policy" className="text-blue-primary">
              {' '}
              Privacy Statement
            </Link>
            .
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
