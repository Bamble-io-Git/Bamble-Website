"use client";
import { RadialProgress } from "@/components/elements/RadialProgress";
import LeftStep from "@/components/elements/step/LeftStep";
import { useCvStore } from "@/store/cv";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
  faArrowDown,
  faArrowUp,
  faChevronDown,
  faChevronUp,
  faFileAlt,
  faList,
  faOutdent,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";

type TCreateUserSchema = {
  linkedin_link: string;
  job_description_link: string;
};

type TResponseScoreSchema = {
  id: number;
  overall: number;
  points: number;
  category: {
    tag: string;
    score: number;
    scoreMax: number;
    content: string;
  }[];
  cvFileUrl: string;
};

const Preloader = ({ text }: { text?: string }) => {
  return (
    <div className="flex flex-col items-center">
      <svg
        className="text-gray-300 animate-spin"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
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
      {text && <p className="mt-8 text-gray-700 w-[80%] text-center">{text}</p>}
    </div>
  );
};

const Preview = () => {
  const localStorage =
    typeof window !== "undefined" ? window.localStorage : null;
  const token = localStorage?.getItem("token");

  const router = useRouter();
  const state = useCvStore((state) => state);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isTruncated, setIsTruncated] = useState(true);
  const [isPDFLoading, setIsPDFLoading] = useState(false);
  const [isScoreLoading, setIsScoreLoading] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>("brevity");
  const [pdfPreview, setPdfPreview] = useState("");
  const [scoresData, setScoresData] = useState<TResponseScoreSchema>();
  const [requestData, setRequestData] = useState({});
  const [isDataReady, setIsDataReady] = useState(false);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  useEffect(() => {
    let aboutSelfText = "";
    let aboutSelfAudio = null;
    let aboutExperienceText = "";
    let aboutExperienceAudio = null;

    const file = state.getPdf();

    // Include either text or audio, but not both
    if (state.personal) {
      if (typeof state.personal === "string") {
        aboutSelfText = state.personal;
      } else {
        aboutSelfAudio = new Blob([state.personal], { type: "audio/webm" });
      }
    }
    if (state.experience) {
      if (typeof state.experience === "string") {
        aboutExperienceText = state.experience;
      } else {
        aboutExperienceAudio = state.experience;
      }
    }

    // As 'state' is dynamically changing overtime (not fast enought to be populated when page is loaded)
    // we should check if all required data are ready and isDataReady is false (a fresh new page access) to make sure that's only submit data once
    // and the setStates below migh re-render some elements on the page so we have more control:
    if (
      file &&
      (aboutSelfText || aboutSelfAudio) &&
      (aboutExperienceText || aboutExperienceAudio) &&
      isDataReady === false
    ) {
      setRequestData({
        what_to_achieve: state.share ?? "Land my first job",
        linkedin_link: state.linkedinUrl,
        job_description_link: state.jobDescription,
        about_self_text: aboutSelfText,
        about_self_audio: aboutSelfAudio,
        work_experience_text: aboutExperienceText,
        work_experience_audio: aboutExperienceAudio,
        cv_file: file,
      });
      setIsDataReady(true);
    }
  }, [state]);

  useEffect(() => {
    // Here we are checking if the data is ready and if the request data is not empty:
    if (isDataReady && requestData) {
      submitDataForPDF();
    }
  }, [isDataReady, requestData]);

  const submitDataForPDF = async () => {
    console.log("Submition: ", requestData);

    setIsPDFLoading(true);
    setIsScoreLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BAMBLE_URL}/v2/users/get_scores`,
        requestData,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const responseData: TResponseScoreSchema = response.data;
      const pdf = responseData.cvFileUrl;

      setPdfPreview(pdf);
      setIsPDFLoading(false);
      setScoresData(responseData);
      setIsScoreLoading(false);

      return response;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if (Array.isArray(error.response.data.detail)) {
          toast.info(
            `Please reupload ${String(error.response.data.detail[0].loc[1])}`
          );
        } else {
          toast.error(String(error.response.data.detail).replace("_", " "));
        }
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
    setIsPDFLoading(false);
    setIsScoreLoading(false);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BAMBLE_URL}/v2/users/generate_cv?id=${
          scoresData!.id
        }`,
        {},
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        router.push("/congrats");
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if (Array.isArray(error.response.data.detail)) {
          toast.info(
            `Please reupload ${String(error.response.data.detail[0].loc[1])}`
          );
        } else {
          toast.error(String(error.response.data.detail).replace("_", " "));
        }
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  const iconVariant = (variant: string) => {
    switch (variant) {
      case "style":
        return faFileAlt;
      case "sections":
        return faOutdent;
      default:
        return faList;
    }
  };

  // Check if user is authenticated
  useEffect(() => {
    const token = window?.localStorage?.getItem("token");
    if (!token) {
      router.push("/signin");
    }
  }, [router]);

  return (
    <section className="flex flex-col lg:flex-row justify-between px-1.5 lg:px-0">
      <div>
        <LeftStep image="/assets/preview.webp" />
      </div>
      <div className="relative lg:absolute w-[520px] xl:w-[640px] h-[670px] xl:h-[85%] left-[20px] xl:left-[10%] top-[20px] lg:top-[110px] bg-[#fff] z-10 shadow-lg">
        <div className="aspect-[520/920] xl:aspect-[640/1080] w-full h-full">
          {isPDFLoading ? (
            <div className="flex items-center justify-center h-full">
              <Preloader />
            </div>
          ) : (
            <>
              {pdfPreview && (
                <object
                  width="100%"
                  height="100%"
                  data={`${pdfPreview}#toolbar=0&navpanes=0&scrollbar=0`}
                  type="application/pdf"
                ></object>
              )}
            </>
          )}
        </div>
      </div>
      <div className="w-full md:w-[550px] mx-auto pt-12 lg:pt-18 pl-0 xl:pl-36 text-black flex flex-col space-y-5 relative sm:px-0 px-5">
        {isScoreLoading || !scoresData ? (
          <div className="flex items-center justify-center h-full">
            <Preloader text="We are calculating your data, please wait, could take up to 2 minutes." />
          </div>
        ) : (
          <>
            <div className="flex flex-col items-center">
              {!!scoresData && (
                <>
                  <div className="flex flex-col items-center mb-8">
                    <RadialProgress
                      percentage={scoresData?.overall ?? 0}
                      text="Overall"
                    />
                    {scoresData?.points !== 0 && (
                      <div
                        className={`mt-6 px-4 py-1 font-bold ${
                          (scoresData?.points ?? 0) > 0
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                        } rounded-md text-sm uppercase`}
                      >
                        <FontAwesomeIcon
                          icon={
                            (scoresData?.points ?? 0) > 0
                              ? faArrowUp
                              : faArrowDown
                          }
                        />{" "}
                        {scoresData?.points} Points
                      </div>
                    )}
                  </div>
                  <div className="w-full max-w-md mt-2">
                    <div
                      className="cursor-pointer mb-6"
                      onClick={toggleTruncate}
                    >
                      <div
                        className={`text-sm mb-2 ${
                          isTruncated ? "line-clamp-3" : ""
                        }`}
                      >
                        This CV effectively showcases diverse experiences and
                        transferable skills but can be improved by: Quantifying
                        accomplishments. Reducing redundancy and filler
                        language. Enhancing readability through consistent
                        formatting and avoiding buzzwords. Highlighting
                        measurable impact and leadership examples to stand out.
                      </div>
                      {isTruncated && (
                        <div className="text-center mb-4">
                          <span className=" text-xs bg-gray-100 py-1 px-4 rounded-md">
                            Read more
                          </span>
                        </div>
                      )}
                    </div>
                    {scoresData?.category.map(
                      ({ tag, score, scoreMax, content }) => {
                        return (
                          <div className="py-4 border-b" key={tag}>
                            <div
                              className="flex justify-between items-center cursor-pointer"
                              onClick={() =>
                                setOpenAccordion(
                                  openAccordion === `${tag}` ? null : `${tag}`
                                )
                              }
                            >
                              <div className="flex items-center text-purple-600">
                                <FontAwesomeIcon icon={iconVariant(tag)} />
                                <span className="pl-2 font-bold capitalize">
                                  {tag}
                                </span>
                              </div>
                              <div className="flex items-baseline">
                                <div
                                  className={`p-2 items-baseline ${
                                    score >= 90
                                      ? `bg-green-100 text-green-600`
                                      : `bg-orange-100 text-orange-600`
                                  } rounded-md text-sm`}
                                >
                                  <span className="font-bold text-xl">
                                    {score}
                                  </span>
                                  <span>/25</span>
                                </div>
                                <FontAwesomeIcon
                                  style={{ color: "grey" }}
                                  icon={
                                    openAccordion === `${tag}`
                                      ? faChevronUp
                                      : faChevronDown
                                  }
                                  className="ml-2"
                                />
                              </div>
                            </div>
                            <div>
                              <div
                                className={`text-sm transition-all duration-600 ease-out ${
                                  openAccordion === `${tag}`
                                    ? "max-h-screen opacity-100"
                                    : "max-h-0 opacity-0"
                                } overflow-hidden`}
                              >
                                <div className="py-4">
                                  {content.split("\n").map((line, index) => (
                                    <span key={index}>
                                      {line}
                                      <br />
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    )}
                    <div className="my-14">
                      <div className="flex justify-between align-middle">
                        <a
                          href="/personal-details"
                          className="bg-gray-300 text-white px-10 py-3 rounded-md font-bold flex justify-center items-center gap-2 cursor-pointer font-tertiary"
                        >
                          Improve
                        </a>
                        <button
                          className="bg-yellow-primary text-black px-10 py-3 rounded-md font-bold flex justify-center items-center gap-2 cursor-pointer font-tertiary"
                          onClick={() => handleSubmit()}
                        >
                          Submit
                          {!isScoreLoading ? (
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
                    </div>
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Preview;
