'use client';
import LeftStep from '@/components/elements/step/LeftStep';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useCvStore } from '@/store/cv';
import { useRouter } from 'next/navigation';
import { finalDataValidation } from '../signup/schema/final-data';

import ProgressBar from '@/components/elements/ProgressBar';
import axios from 'axios';
import PdfUpload from '@/components/elements/pdf-uploader';
import { toast } from 'react-toastify';
import { sendGTMEvent } from '@next/third-parties/google';
import Link from 'next/link';
import { jwtDecode } from 'jwt-decode';

type TCreateUserSchema = {
  linkedin_link: string;
  job_description_link: string;
};

const Final = () => {
  const router = useRouter();
  const state = useCvStore((state) => state);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [paymentLink, setPaymentLink] = useState('');
  const [hasPaid, setHasPaid] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isPaynowLoading, setIsPaynowLoading] = useState(true);
  const form = useForm<TCreateUserSchema>({
    resolver: zodResolver(finalDataValidation),
  });

  const { formState, register, handleSubmit, watch } = form;

  const linkedinUrl = watch('linkedin_link');
  const jobDescriptionUrl = watch('job_description_link');

  useEffect(() => {
    const token = window?.localStorage?.getItem('token');

    // const decoded = jwtDecode(String(token) ?? '');
    // console.log(decoded);
    // console.log(String(token));

    // Convert the exp time to milliseconds
    // const expirationTime = Number(decoded) * 1000;

    // Get the current time in milliseconds
    const currentTime = Date.now();

    // Compare if the current time has passed the expiration time
    // if (currentTime > expirationTime) {
    //   router.push('/signin');
    // } else {
    //   const timeRemaining = Number(expirationTime - currentTime);
    //   console.log(
    //     'Not expired yet. Time remaining:',
    //     timeRemaining / 1000,
    //     'seconds'
    //   );
    // }

    if (!token) {
      router.push('/signin');
    }
  }, [router]);

  useEffect(() => {
    const generateStripeLink = async () => {
      try {
        setIsPaynowLoading(true);
        const response = await axios.post(
          'https://cv.backend.bamble.io/payments/pay',
          {},
          {
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
        setPaymentLink(response.data.payment_link);
        setIsPaynowLoading(false);
        return response;
      } catch (error) {
        console.error(error);
        toast.error('Failed to generate stripe link.');
        setIsPaynowLoading(false);
      }
    };
    generateStripeLink();
  }, []);

  useEffect(() => {
    if (formState.isValid) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [formState.isValid]);

  const [file, setFile] = useState(null);

  const localStorage =
    typeof window !== 'undefined' ? window.localStorage : null;

  const token = localStorage?.getItem('token');

  const generateCV = async () => {
    // setIsLoading(true);
    try {
      const requestData = {
        what_to_achieve: state.share ?? '',
        linkedin_link: linkedinUrl,
        job_description_link: jobDescriptionUrl,
        cv_file: file,
      };

      console.log('requestData', requestData);
      console.log('FILE', file);

      // Include either text or audio, but not both
      if (state.personal) {
        if (typeof state.personal === 'string') {
          //@ts-ignore
          requestData.about_self_text = state.personal;
        } else {
          //@ts-ignore
          requestData.about_self_audio = state.personal;
        }
      }

      if (state.experience) {
        if (typeof state.experience === 'string') {
          //@ts-ignore
          requestData.work_experience_text = state.experience;
        } else {
          //@ts-ignore
          requestData.work_experience_audio = state.experience;
        }

        const response = await axios.post(
          `https://cv.backend.bamble.io/users/generate_cv`,
          requestData,
          {
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        console.log('RESPONSE', response);

        if (response.status === 201) {
          // setIsLoading(false);
          toast.success(response.data.message);
          router.push('/congrats');
        }

        if (response.status == 400) {
          // setIsLoading(false);
          toast.error(response.data.message?.detail);
        }
        return response;
      }
    } catch (error) {
      console.error(error);
      //@ts-ignore
      if (Array.isArray(error.response.data.detail)) {
        //@ts-ignore
        toast.error(`${String(error.response.data.detail[0].loc[1])} required`);
      } else {
        //@ts-ignore
        toast.error(String(error?.response?.data?.detail).replace('_', ' '));
      }

      console.log(error);
      // toast.error(response.detail);
      // setIsLoading(false);
    }
  };

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        setIsPaynowLoading(true);
        const user = await axios.get(`https://cv.backend.bamble.io/users/me`, {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        setIsPaynowLoading(false);
        console.log('USER', user);
        setHasPaid(user.data.is_paid);
      } catch (error) {
        console.log(error);
        setIsPaynowLoading(false);
      }
    };
    getUserDetails();
  }, [token]);

  const onSubmit = async () => {
    if (linkedinUrl) {
      await generateCV();
      sendGTMEvent({
        event: 'Event - Step5 Submit',
        clickText: 'Submit',
        values: 'Successfully generated CV',
      });
    }
  };

  useEffect(() => {
    // const data = localStorage?.getItem('pdf');
    // // console.log(data);
    // const storedPdf = JSON.parse(JSON.parse(data || ''));
    // console.log('', storedPdf);
    if (state?.pdf) {
      //@ts-ignore
      setFile(state.pdf);
    }
  }, [state.pdf, file]);
  console.log(localStorage?.getItem('pdfBinary'));
  useEffect(() => {
    if (linkedinUrl?.length) {
      state.addToLinkedinUrl(linkedinUrl ?? '');
    }
  }, [linkedinUrl]);

  useEffect(() => {
    if (jobDescriptionUrl?.length) {
      state.addToJD(jobDescriptionUrl ?? '');
    }
  }, [jobDescriptionUrl]);

  return (
    <section className="flex justify-between px-1.5 lg:px-0">
      <div>
        <LeftStep image="/assets/final.webp" />
      </div>

      <div className="w-[85%] md:w-[550px] mx-auto pt-12 lg:pt-20 text-black flex flex-col space-y-5 relative sm:px-0 px-5">
        <button
          className="absolute top-[4%] lg:top-[9.6%] left-4 lg:-left-20"
          onClick={() => router.push('/work-experiences')}
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

          <p>Perfect, {state.cv.length ? state.cv[0].fullName + '!' : ''}</p>

          <p className="font-bold md:text-2xl text-lg">
            Now submit the final details
          </p>
        </div>

        <div className="my-12">
          <PdfUpload file={file} setFile={setFile} />
        </div>

        <form
          className="flex flex-col space-y-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col space-y-3 mt-10">
            <label htmlFor="" className="font-bold font-primary">
              Linkedin Link
            </label>
            <input
              type="text"
              placeholder={
                state.linkedinUrl ? state.linkedinUrl : 'Your link here...'
              }
              // onChange={(e) => setLinkedinUrl(e.target.value)}
              className="border rounded-lg p-3"
              {...register('linkedin_link')}
              value={state.linkedinUrl}
            />
            {/* {formState.errors.linkedin_link && (
              <p className="text-[#FC5555] text-sm">
                Linkedin link must be valid eg.
                https://www.linkedin.com/in/john-doe
              </p>
            )} */}
          </div>

          <div className="flex flex-col space-y-3">
            <label htmlFor="" className="font-bold font-primary">
              Paste the job description (JD) of your desired job
            </label>
            <textarea
              placeholder={
                state.jobDescription
                  ? state.jobDescription
                  : 'Job description here...'
              }
              // value={state.jobDescription}
              className="border rounded-lg p-3 min-h-[200px]"
              {...register('job_description_link')}
              value={state.jobDescription}
            />

            {formState.errors.job_description_link && (
              <p className="text-[#FC5555] text-sm">Invalid Job description.</p>
            )}
          </div>

          {hasPaid && (
            <button
              className={
                isButtonDisabled
                  ? 'bg-[#979797] text-[#202020CC] px-10 py-3 rounded-md font-bold flex justify-center items-center gap-2 mx-auto cursor-not-allowed'
                  : 'bg-yellow-primary text-black px-10 py-3 rounded-md font-bold flex justify-center items-center gap-2 mx-auto cursor-pointer'
              }
            >
              {/* {isLoading && (
                <svg
                  className="text-gray-300 animate-spin"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                >
                  <path
                    d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                    stroke="currentColor"
                    stroke-width="5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                    stroke="currentColor"
                    stroke-width="5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="text-gray-900"
                  ></path>
                </svg>
              )} */}
              {/* {!isLoading && 'Submit'} */}
              Submit
              {
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
              }
            </button>
          )}
          {!hasPaid && (
            <Link
              href={paymentLink}
              className={
                'bg-green-600 text-white-primary px-10 py-3 rounded-md font-bold flex justify-center items-center gap-2 mx-auto cursor-pointer'
              }
            >
              {isPaynowLoading ? (
                <svg
                  className="text-gray-300 animate-spin"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                >
                  <path
                    d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                    stroke="currentColor"
                    stroke-width="5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                    stroke="currentColor"
                    stroke-width="5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="text-gray-900"
                  ></path>
                </svg>
              ) : (
                'Pay now'
              )}
            </Link>
          )}
        </form>
      </div>
    </section>
  );
};

export default Final;
