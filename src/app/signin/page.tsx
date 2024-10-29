'use client';
import LeftStep from '@/components/elements/step/LeftStep';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { userSigninDataValidation } from './schema/user-data';
import { useCvStore } from '@/store/cv';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'react-toastify';
import axios, { AxiosError } from 'axios';
import Link from 'next/link';
import useHeaderTitle from '@/hooks/useHeaderTitle';

type TCreateUserSchema = {
  email: string;
};
const SignIn = () => {
  const form = useForm<TCreateUserSchema>({
    resolver: zodResolver(userSigninDataValidation),
  });

  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const email = searchParams.get('email');

  const router = useRouter();

  const { formState, register, handleSubmit } = form;
  const state = useCvStore((state) => state);

  const localStorage =
    typeof window !== 'undefined' ? window.localStorage : null;

  useHeaderTitle('SIGN-IN');

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await axios.post(
          `https://cv.backend.bamble.io/users/verify`,
          {
            token: token,
            email: email ?? state?.cv[0]?.email,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        localStorage?.setItem('token', response.data.access_token);

        if (response.status === 200) {
          toast.success('User verified successfully');

          // router.push('/intent');
        } else {
          toast.error('User verification failed');
        }
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    verifyUser();
  }, [email, localStorage, router, state?.cv, token]);

  const login = async ({ email }: { email: string }) => {
    try {
      // toast.loading('Authenticating....');
      const response = await axios.post(
        'https://cv.backend.bamble.io/auth/token',
        {
          username: email,
          password: 'stringcehw88938f28998efjkndj90rej9vdoijnsd',
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            accept: 'application/json',
          },
        }
      );

      const user = await axios.get(`https://cv.backend.bamble.io/users/me`, {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${response.data.access_token}`,
        },
      });

      state.addToCV({
        fullName: user.data.first_name + ' ' + user.data.last_name,
        email: user.data.email,
      });

      if (response.status == 422) {
        toast.info(response?.data?.details);
      }
      if (response.status === 200) {
        toast.success('Login successful');
        localStorage?.setItem('token', response.data.access_token);
        router.push('/intent');
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(`${error?.message} contact admin`);
      }
    }
  };

  const onSubmit = async (values: TCreateUserSchema) => {
    if (values) {
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
    <section className="flex justify-between font-tertiary">
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
              Your e-mail
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

          <p className="text-[#414143] text-sm font-tertiary">
            Welcome back, you are consenting to our{' '}
            <Link href="/terms" className="text-blue-primary font-tertiary">
              {' '}
              Terms of Service{' '}
            </Link>{' '}
            and confirming that you have reviewed and accepted the Global
            <Link
              href="/privacy-policy"
              className="text-blue-primary font-tertiary"
            >
              {' '}
              Privacy Statement
            </Link>
            .
          </p>

          <button
            className={
              isButtonDisabled
                ? 'bg-[#979797] text-[#202020CC] px-10 py-3 rounded-md font-bold flex justify-center items-center gap-2 ml-auto cursor-not-allowed font-tertiary'
                : 'bg-yellow-primary text-black px-10 py-3 rounded-md font-bold flex justify-center items-center gap-2 ml-auto cursor-pointer font-tertiary'
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

export default SignIn;
