'use client';
import Keyboard from '@/components/elements/keyboard';
import Microphone from '@/components/elements/microphone';
import ProgressBar from '@/components/elements/ProgressBar';
import LeftStep from '@/components/elements/step/LeftStep';
import Tips from '@/components/elements/tips';
import { useCvStore } from '@/store/cv';
import { sendGTMEvent } from '@next/third-parties/google';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const PersonalDetails = () => {
  const router = useRouter();
  const state = useCvStore((state) => state);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [recording, setRecording] = useState<Blob | undefined>(undefined);
  const [text, setText] = useState<string>('');
  const [duration, setDuration] = useState<number | undefined>();
  const [showKeyboard, setShowKeyboard] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!state?.cv[0]?.fullName) {
        router.push('/signin');
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [router, state.cv]);

  // Disable the button if recording duration is less than 30 secs or no text/recording is present

  // TODO: intentionally left here incase we need to revert back to old behavior
  // useEffect(() => {
  //   if (duration && duration >= 90 && text.length <= 60) {
  //     setIsButtonDisabled(true);
  //   } else {
  //     setIsButtonDisabled(false);
  //   }
  // }, [duration, text]);

  useEffect(() => {
    if (Number(duration) >= 90 && !recording?.size) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [duration, recording?.size]);

  useEffect(() => {
    if (Number(text.length) <= 60 && !recording?.size) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [recording?.size, text]);

  useEffect(() => {
    if (state.personal) {
      if (typeof state.personal === 'string') {
        setText(state.personal || '');
      } else {
        setRecording(state.personal || undefined);
      }
    }
  }, [state.personal]);

  const handleDuration = (duration: number) => setDuration(duration);

  const onSubmit = () => {
    if (recording || text) {
      state.addToPersonalDetails(
        recording?.size !== undefined ? recording : text
      );
      router.push('/work-experiences');
      sendGTMEvent({
        event: 'Event - Step2 Question 1',
        clickText: 'Next',
        values: {
          step: 1,
          goal: text ? text : '',
        },
      });
    }
  };

  return (
    <section className="flex justify-between px-1.5 lg:px-0 font-tertiary">
      <div>
        <LeftStep image="/assets/personal-details.webp" />
      </div>

      <div className="max-w-[520px] mx-auto pt-12 lg:pt-20 text-black flex flex-col space-y-5 relative sm:px-0 px-5 font-tertiary">
        <button
          className="absolute top-[4%] lg:top-[9.6%] left-4 lg:-left-20"
          onClick={() => router.push('/intent')}
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

        <ProgressBar value={50} />

        <div className="mb-10 md:space-y-6 space-y-2">
          <p className="font-tertiary">
            You&lsquo;re halfway there! Keep up the momentum – your dream job is
            getting closer
          </p>

          <p>Thanks, {state.cv.length ? state.cv[0].fullName : ''}!</p>

          <p className="font-bold md:text-2xl text-lg font-tertiary">
            To create a CV that is a reflection of your potential, share some
            details about yourself.
          </p>

          <Tips />

          {!showKeyboard ? (
            <Microphone
              setShowKeyboard={setShowKeyboard}
              setRecording={setRecording}
              text={text}
              onDuration={handleDuration}
            />
          ) : (
            <Keyboard
              setShowKeyboard={setShowKeyboard}
              setText={setText}
              text={text}
              recording={recording}
            />
          )}
        </div>

        <div className="mx-auto">
          <button
            disabled={isButtonDisabled}
            onClick={onSubmit}
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
        </div>
      </div>
    </section>
  );
};

export default PersonalDetails;
