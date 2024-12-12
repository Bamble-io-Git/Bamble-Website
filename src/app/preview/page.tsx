"use client";
import { RadialProgress } from "@/components/elements/RadialProgress";
import LeftStep from "@/components/elements/step/LeftStep";
import { useCvStore } from "@/store/cv";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendGTMEvent } from "@next/third-parties/google";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ReactDiffViewer, { DiffMethod } from "react-diff-viewer-continued";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { finalDataValidation } from "../signup/schema/final-data";

import {
  faArrowUp,
  faChevronDown,
  faChevronUp,
  faFileLines,
  faList,
  faOutdent,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { cvExample, cvExampleUpdated } from "./constants";

type TCreateUserSchema = {
  linkedin_link: string;
  job_description_link: string;
};

const Preview = () => {
  const router = useRouter();
  const state = useCvStore((state) => state);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [openAccordion, setOpenAccordion] = useState<string | null>("brevity");
  const [file, setFile] = useState(null);

  const localStorage =
    typeof window !== "undefined" ? window.localStorage : null;

  // Initialize the form
  const form = useForm<TCreateUserSchema>({
    resolver: zodResolver(finalDataValidation),
    defaultValues: {
      linkedin_link:
        state.linkedinUrl ?? localStorage?.getItem("linkedin_link") ?? "",
      job_description_link:
        state.jobDescription ??
        localStorage?.getItem("job_description_link") ??
        "",
    },
  });

  const { formState, register, handleSubmit, watch, setValue } = form;

  const linkedinUrl = watch("linkedin_link");
  const jobDescriptionUrl = watch("job_description_link");

  // Check if user is authenticated
  useEffect(() => {
    const token = window?.localStorage?.getItem("token");
    if (!token) {
      router.push("/signin");
    }
  }, [router]);
  const [isLoading, setIsLoading] = useState(false);
  // Enable the button if the form is valid
  useEffect(() => {
    const isValidForm =
      linkedinUrl?.length > 0 &&
      file &&
      jobDescriptionUrl?.length > 0 &&
      !formState.errors.linkedin_link;

    if (isValidForm) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [linkedinUrl, jobDescriptionUrl, file, formState.errors.linkedin_link]);

  const token = localStorage?.getItem("token");

  const generateCV = async () => {
    console.log("Preview");

    return;
    setIsLoading(true);
    try {
      const requestData = {
        what_to_achieve: state.share ?? "",
        linkedin_link: linkedinUrl,
        job_description_link: jobDescriptionUrl,
        cv_file: file,
      };

      // Include either text or audio, but not both
      if (state.personal) {
        if (typeof state.personal === "string") {
          //@ts-ignore
          requestData.about_self_text = state.personal;
        } else {
          //@ts-ignore
          requestData.about_self_audio = state.personal;
        }
      }

      if (state.experience) {
        if (typeof state.experience === "string") {
          //@ts-ignore
          requestData.work_experience_text = state.experience;
        } else {
          //@ts-ignore
          requestData.work_experience_audio = state.experience;
        }

        console.log(requestData);

        const response = await axios.post(
          `https://cv.backend.bamble.io/users/generate_cv`,
          requestData,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );

        setIsLoading(false);

        if (response.status === 201) {
          toast.success(response.data.message);
          //router.push('/congrats');
          router.push("/preview");
        }

        if (response.status == 400) {
          toast.error(response.data.message?.detail);
        }

        if (response.status == 422) {
          toast.error("Pro feature");
        }
        return response;
      }
    } catch (error) {
      setIsLoading(false);
      //@ts-ignore
      if (Array.isArray(error.response.data.detail)) {
        //@ts-ignore
        toast.info(
          //@ts-ignore
          `Please reupload ${String(error.response.data.detail[0].loc[1])}`
        );
      } else {
        //@ts-ignore
        toast.error(String(error?.response?.data?.detail).replace("_", " "));
      }
    }
  };

  // Fetch user details
  // useEffect(() => {
  //   const getUserDetails = async () => {
  //     try {
  //       // setIsPaynowLoading(true);
  //       const user = await axios.get(`https://cv.backend.bamble.io/users/me`, {
  //         headers: {
  //           accept: 'application/json',
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       // setIsPaynowLoading(false);
  //       // setHasPaid(user.data.is_paid);
  //     } catch (error) {
  //       // setIsPaynowLoading(false);
  //     }
  //   };
  //   getUserDetails();
  // }, [token]);

  const onSubmit = async () => {
    if (linkedinUrl) {
      await generateCV();
      sendGTMEvent({
        event: "Event - Step5 Submit",
        clickText: "Submit",
        values: "Successfully generated CV",
      });
    }
  };

  // Load the PDF file from state or localStorage
  useEffect(() => {
    // const savedPdf = localStorage?.getItem('pdf');
    // console.log(savedPdf);
    // if (savedPdf) {
    //   setFile(JSON.parse(savedPdf));
    // } else if (state?.pdf) {
    //   //@ts-ignore
    //   setFile(state.pdf);
    // }
    setFile(file);
  }, [state.pdf]);

  // Store linkedinUrl and jobDescriptionUrl in the state and localStorage
  useEffect(() => {
    if (linkedinUrl?.length) {
      state.addToLinkedinUrl(linkedinUrl);
      localStorage?.setItem("linkedin_link", linkedinUrl);
    }
  }, [linkedinUrl]);

  useEffect(() => {
    if (jobDescriptionUrl?.length) {
      state.addToJD(jobDescriptionUrl);
      localStorage?.setItem("job_description_link", jobDescriptionUrl);
    }
  }, [jobDescriptionUrl]);

  return (
    <section className="flex justify-between px-1.5 lg:px-0">
      <div>
        <LeftStep image="/assets/final.webp" />
      </div>
      <div className="fixed left-0 top-32 w-1/2 h-full bg-[#fff] z-10">
        <div className="shadow-lg">
          <textarea name="" id="">
            {cvExampleUpdated}
          </textarea>
          <ReactDiffViewer
            oldValue={cvExample}
            newValue={cvExampleUpdated}
            compareMethod={DiffMethod.WORDS}
            splitView={true}
          />
        </div>
      </div>
      <div className="w-[85%] md:w-[550px] mx-auto pt-12 lg:pt-24 text-black flex flex-col space-y-5 relative sm:px-0 px-5">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center mb-8">
            <RadialProgress percentage={84} text={"Overall"} />
            <div className="mt-6 px-4 py-1 font-bold bg-green-100 text-green-600 rounded-md text-sm uppercase">
              <FontAwesomeIcon icon={faArrowUp} /> 3 Points
            </div>
          </div>
          <div className="w-full max-w-md mt-4">
            <div className="py-4 border-b">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() =>
                  setOpenAccordion(
                    openAccordion === "brevity" ? null : "brevity"
                  )
                }
              >
                <div className="flex items-center text-purple-600">
                  <FontAwesomeIcon icon={faList} />
                  <span className="pl-2 font-bold">Brevity</span>
                </div>
                <div className="flex items-baseline">
                  <div className="p-2 items-baseline  bg-green-100 text-green-600 rounded-md text-sm">
                    <span className="font-bold text-xl">95</span>
                    <span>/100</span>
                  </div>
                  <FontAwesomeIcon
                    style={{ color: "grey" }}
                    icon={
                      openAccordion === "brevity" ? faChevronUp : faChevronDown
                    }
                    className="ml-2"
                  />
                </div>
              </div>
              <div
                className={`mt-2 ${
                  openAccordion === "brevity" ? "block" : "hidden"
                }`}
              >
                <p>Details about Brevity...</p>
              </div>
            </div>
            <div className="py-4 border-b">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() =>
                  setOpenAccordion(openAccordion === "style" ? null : "style")
                }
              >
                <div className="flex items-center text-purple-600">
                  <FontAwesomeIcon icon={faFileLines} />
                  <span className="pl-2 font-bold">Style</span>
                </div>
                <div className="flex items-baseline">
                  <div className="flex p-2 items-baseline bg-orange-100 text-orange-600 rounded-md text-sm">
                    <span className="font-bold text-xl">80</span>
                    <span>/100</span>
                  </div>
                  <FontAwesomeIcon
                    style={{ color: "grey" }}
                    icon={
                      openAccordion === "style" ? faChevronUp : faChevronDown
                    }
                    className="ml-2"
                  />
                </div>
              </div>
              <div
                className={`mt-2 ${
                  openAccordion === "style" ? "block" : "hidden"
                }`}
              >
                <p>Details about Style...</p>
              </div>
            </div>
            <div className="py-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() =>
                  setOpenAccordion(
                    openAccordion === "sections" ? null : "sections"
                  )
                }
              >
                <div className="flex items-center text-purple-600">
                  <FontAwesomeIcon icon={faOutdent} />
                  <span className="pl-2 font-bold">Sections</span>
                </div>
                <div className="flex items-baseline">
                  <div className="p-2 items-baseline bg-green-100 text-green-600 rounded-md text-sm">
                    <span className="font-bold text-xl">100</span>
                    <span>/100</span>
                  </div>
                  <FontAwesomeIcon
                    style={{ color: "grey" }}
                    icon={
                      openAccordion === "sections" ? faChevronUp : faChevronDown
                    }
                    className="ml-2"
                  />
                </div>
              </div>
              <div
                className={`mt-2 ${
                  openAccordion === "sections" ? "block" : "hidden"
                }`}
              >
                <p>Details about Sections...</p>
              </div>
            </div>

            <form
              className="flex flex-col space-y-5 font-tertiary"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col space-y-3 mt-10">
                <input
                  type="text"
                  value={"linkedingUrl"}
                  className="border rounded-lg p-3 hidden"
                  {...register("linkedin_link")}
                />
              </div>

              <div className="flex flex-col space-y-3 font-tertiary">
                <textarea
                  value={"jobDescription"}
                  className="border rounded-lg p-3 min-h-[200px] hidden"
                  {...register("job_description_link")}
                />
              </div>

              <div className="flex justify-between align-middle">
                <button
                  disabled={isButtonDisabled || isLoading}
                  className={
                    isButtonDisabled || isLoading
                      ? "bg-[#979797] text-[#202020CC] px-10 py-3 rounded-md font-bold flex justify-center items-center gap-2 cursor-not-allowed font-tertiary"
                      : "bg-blue-500 text-white px-10 py-3 rounded-md font-bold flex justify-center items-center gap-2 cursor-pointer font-tertiary"
                  }
                >
                  Improve
                </button>
                <button
                  disabled={isButtonDisabled || isLoading}
                  className={
                    isButtonDisabled || isLoading
                      ? "bg-[#979797] text-[#202020CC] px-10 py-3 rounded-md font-bold flex justify-center items-center gap-2 cursor-not-allowed font-tertiary"
                      : "bg-yellow-primary text-black px-10 py-3 rounded-md font-bold flex justify-center items-center gap-2 cursor-pointer font-tertiary"
                  }
                >
                  Submit
                  {!isLoading ? (
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
                  ) : (
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-black-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preview;
