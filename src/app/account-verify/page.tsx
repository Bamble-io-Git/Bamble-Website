'use client';

import LeftStep from '@/components/elements/step/LeftStep';
import { useCvStore } from '@/store/cv';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const AuthVerify = () => {
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const email = searchParams.get('email');
  // useEffect(() => {
  //   if (token) {
  //     localStorage.setItem('token', token);
  //   }
  // }, [token]);
  console.log(token);
  const router = useRouter();
  const state = useCvStore((state) => state);

  console.log('state?.cv[0]?.', state?.cv[0]?.email);

  useEffect(() => {
    const verifyUser = async () => {
      setIsLoading(true);
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
        console.log('response.data.accessToken', response.data.access_token);
        localStorage.setItem('token', response.data.access_token);
        setIsLoading(false);
        if (response.status === 200) {
          toast.success('User verified successfully');

          router.push('/intent');
          setIsLoading(false);
        } else {
          toast.error('User verification failed');
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    verifyUser();
  }, [email, router, state?.cv, token]);

  return (
    <section className="flex justify-between px-1.5 lg:px-0">
      <div>
        <LeftStep image="/assets/final.png" />
      </div>

      <div className="max-w-[520px] mx-auto pt-12 lg:pt-20 text-black flex flex-col space-y-5 relative sm:px-0 px-5">
        <div className="mb-10 md:space-y-6 space-y-2">
          {isLoading && (
            <div className="rounded-md h-12 w-20 border-4 border-t-4 border-blue-500 animate-spin absolute"></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AuthVerify;
