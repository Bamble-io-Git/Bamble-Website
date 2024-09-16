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
import { PHProvider } from '../providers';

type TCreateUserSchema = {
  linkedin_link: string;
  job_description_link: string;
};

const Final = () => {
  const router = useRouter();
  const state = useCvStore((state) => state);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const form = useForm<TCreateUserSchema>({
    resolver: zodResolver(finalDataValidation),
  });

  const { formState, register, handleSubmit, watch } = form;

  const linkedinUrl = watch('linkedin_link');
  const jobDescriptionUrl = watch('job_description_link');

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
    try {
      const requestData = {
        what_to_achieve: state.share ?? '',
        linkedin_link: linkedinUrl,
        job_description_link: jobDescriptionUrl,
        cv_file: file,
      };

      // Create FormData
      // const formData = new FormData();

      // // If state.personal is a Blob, append it to the FormData as a file
      // if (state.personal instanceof Blob) {
      //   formData.append(
      //     'about_self_audio',
      //     state.personal,
      //     'about_self_audio.webm'
      //   );
      // } else {
      //   formData.append('about_self_text', state.personal);
      // }

      // // If state.experience is a Blob, append it to the FormData as a file
      // if (state.experience instanceof Blob) {
      //   formData.append(
      //     'work_experience_audio',
      //     state.experience,
      //     'work_experience_audio.webm'
      //   );
      // } else {
      //   formData.append('work_experience_text', state.experience);
      // }

      // // Add other form data fields
      // formData.append('what_to_achieve', state.share ?? '');
      // formData.append('linkedin_link', linkedinUrl);
      // formData.append('job_description_link', jobDescriptionUrl);

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
          // formData,
          {
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        console.log('RESPONSEEE', response);
        if (response.status === 201) {
          toast.success(response.data.message);
          router.push('/congrats');
        }
        return response;
      }
    } catch (error) {
      console.error(error);
    }
  };
  const onSubmit = async () => {
    if (linkedinUrl) {
      await generateCV();
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
              placeholder={linkedinUrl ? linkedinUrl : 'Your link here...'}
              className="border rounded-lg p-3"
              {...register('linkedin_link')}
            />
            {formState.errors.linkedin_link && (
              <p className="text-[#FC5555] text-sm">
                Linkedin link must be valid eg.
                https://www.linkedin.com/in/john-doe
              </p>
            )}
          </div>

          <div className="flex flex-col space-y-3">
            <label htmlFor="" className="font-bold font-primary">
              Insert a link to an open job (JD) you would like to apply to
            </label>
            <input
              type="url"
              placeholder={
                jobDescriptionUrl ? jobDescriptionUrl : 'Your link here...'
              }
              className="border rounded-lg p-3"
              {...register('job_description_link')}
            />

            {formState.errors.job_description_link && (
              <p className="text-[#FC5555] text-sm">
                Invalid Job description url.
              </p>
            )}
          </div>

          {/* <p className="text-[#414143] font-secondary text-sm">
            By registering for an account, you are consenting to our Terms of
            Service and confirming that you have reviewed and accepted the
            Global Privacy Statement.
          </p> */}

          <button
            className={
              isButtonDisabled
                ? 'bg-[#979797] text-[#202020CC] px-10 py-3 rounded-md font-bold flex justify-center items-center gap-2 mx-auto cursor-not-allowed'
                : 'bg-yellow-primary text-black px-10 py-3 rounded-md font-bold flex justify-center items-center gap-2 mx-auto cursor-pointer'
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

export default Final;
