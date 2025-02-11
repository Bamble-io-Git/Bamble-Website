"use client";
import Keyboard from "@/components/elements/keyboard";
import Microphone from "@/components/elements/microphone";
import ProgressBar from "@/components/elements/ProgressBar";
import LeftStep from "@/components/elements/step/LeftStep";
import Tips from "@/components/elements/tips";
import useHeaderTitle from "@/hooks/useHeaderTitle";
import { useCvStore } from "@/store/cv";
import { sendGTMEvent } from "@next/third-parties/google";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const WorkExperiences = () => {
  const router = useRouter();
  const state = useCvStore((state) => state);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [recording, setRecording] = useState<Blob | undefined>(undefined);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!state?.cv[0]?.fullName) {
        router.push("/signup");
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [router, state.cv]);

  const [text, setText] = useState<string>("");
  const [duration, setDuration] = useState<number | undefined>();

  // Disable the button if recording duration is less than 30 secs or no text/recording is present
  // TODO: intentionally left here incase we need to revert back to old behavior
  // useEffect(() => {
  //   if (duration && duration >= 90 && text.length <= 60) {
  //     setIsButtonDisabled(true);
  //   } else {
  //     setIsButtonDisabled(false);
  //   }
  // }, [duration, text]);

  useHeaderTitle("STEP3-Question2");

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

  const [showKeyboard, setShowKeyboard] = useState(true);

  const handleDuration = (duration: number) => setDuration(duration);

  useEffect(() => {
    if (state.experience) {
      if (typeof state.experience === "string") {
        setText(state.experience || "");
      } else {
        setRecording(state.experience || undefined);
      }
    }
  }, [state.experience]);

  const onSubmit = () => {
    if (recording || text) {
      state.addToWorkExperiences(
        recording?.size !== undefined ? recording : text
      );
      router.push("/final");
      sendGTMEvent({
        event: "Event - Step3 Question 2",
        clickText: "Next",
        values: {
          step: 1,
        },
      });
    }
  };

  return (
    <section className="flex justify-between px-1.5 lg:px-0">
      <div>
        <LeftStep image="/assets/exp.webp" />
      </div>

      <div className="max-w-[520px] mx-auto pt-12 lg:pt-20 text-black flex flex-col space-y-5 relative sm:px-0 px-5">
        <button
          className="absolute top-[4%] lg:top-[9.6%] left-4 lg:-left-20"
          onClick={() => router.push("/personal-details")}
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

        <ProgressBar value={75} />

        <div className="mb-10 md:space-y-6 space-y-2">
          <p className="text-sm font-tertiary">
            Amazing! You&lsquo;re almost at the finish line. Just a little more
            to go!
          </p>

          <p className="font-tertiary">
            {state.cv.length ? state.cv[0].fullName : ""}, this is our last
            question!
          </p>

          <p className="font-bold md:text-2xl text-lg font-tertiary">
            Now is time to shine. Share with us about your 2 most relevant work
            experiences
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
              placeholder="Type your work experiences here..."
            />
          )}
        </div>

        <div className="mx-auto">
          <button
            onClick={onSubmit}
            className={
              isButtonDisabled
                ? "bg-[#979797] text-[#202020CC] px-10 py-3 rounded-md font-bold flex justify-center items-center gap-2 ml-auto cursor-not-allowed font-tertiary"
                : "bg-yellow-primary text-black px-10 py-3 rounded-md font-bold flex justify-center items-center gap-2 ml-auto cursor-pointer font-tertiary"
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

export default WorkExperiences;
