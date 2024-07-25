'use client';
import { useRef } from 'react';
import PageLayout from '../layout';
import Hero from '../sections/hero-new';
import GiveTeamLife2 from '../sections/cards';
import Image from 'next/image';
import CVStack from '../elements/cv-stack';
import TurboChargeCareer from '../elements/turbocharge-career';
import FireYourWriter from '../elements/fire-your-writer';
import { useRouter } from 'next/navigation';
import LogoCarousel from '../sections/logos';
const LandingPageTemplate = () => {
  const ref = useRef<null | HTMLElement>(null);
  const handleScroll = () =>
    ref.current && ref?.current?.scrollIntoView({ behavior: 'smooth' });
  const router = useRouter();
  return (
    <PageLayout>
      <Hero handleScroll={handleScroll} />
      <CVStack />
      <FireYourWriter />
      <GiveTeamLife2 handleScroll={handleScroll} />

      <TurboChargeCareer />

      <main className="relative min-h-[240px] flex flex-col justify-center bg-[#45A6FF] overflow-hidden mb-10">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-10">
          <h3 className="text-center font-primary text-2xl font-semibold">
            Part of amazing communities
          </h3>
          <div className="text-center">
            <LogoCarousel />
          </div>
        </div>
      </main>

      <section className="py-5 sm:pt-1 sm:pb-20 pb-0">
        <div className="max-w-[1158px] bg-[#45A6FF] rounded-lg mx-auto  md:flex-row flex-col flex  justify-between overflow-hidden px-5 md:px-16">
          <div className="sm:justify-self-start justify-self-center rounded-[31px] max-w-[382px] flex-col space-y-8 py-12">
            <div className="border-[#090923] px-4 py-1.5 rounded-[31px] border bg-white-primary max-w-[240px]">
              <h3 className="font-bold text-black text-sm">
                Free for first 1,000 users!
              </h3>
            </div>

            <h2 className="text-3xl text-white-primary font-bold">
              Create your CV 10x faster with AI
            </h2>

            <p className="text-base text-[#FCFCFCCC] max-w-[330px]">
              Join our waiting list, get ready to land your dream job!
            </p>

            <button
              className="bg-white-primary text-sm sm:text-base text-[#45A6FF] text-center px-3 rounded-lg font-semibold sm:w-auto py-[12px] w-[200px]"
              onClick={() =>
                router.push(
                  'https://docs.google.com/forms/d/e/1FAIpQLSeQvp8MWsNuota_ymCBVRRXa7BelAKIV0PiV5Uk4_wp70i-EA/viewform'
                )
              }
            >
              Reserve your spot
            </button>
          </div>

          <div className="relative py-0 sm:justify-self-start justify-self-center">
            <div
              className="z-20 -bottom-16 absolute h-full -left-[80%]"
              style={{
                width: 1000,
                height: 480,
              }}
            >
              <Image src="/assets/dude.svg" alt="" fill />
            </div>

            <svg
              className="relative"
              width="419"
              height="396"
              viewBox="0 0 419 396"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M324.597 319.499C330.572 350.911 334.057 385.84 335.084 424.256V508.808H268.521V425.003C267.525 398.074 265.534 374.882 262.546 355.425C218.669 381.357 174.917 407.04 131.288 432.505C87.6603 457.94 43.9077 483.374 0.0305176 508.839V424.287C2.0221 345.463 17.3635 269.534 46.0237 196.438C74.6528 123.342 115.169 57.8729 167.542 0C200.932 36.9216 229.125 75.8355 252.06 116.711C274.994 157.617 293.696 202.259 308.166 250.637L385.963 204.999L418.886 264.117L324.659 319.499H324.597ZM248.294 285.815C231.335 221.965 204.417 163.096 167.51 109.239C139.566 150.644 117.13 195.286 100.201 243.166C83.2415 291.045 72.7857 340.201 68.8025 390.572C148.559 343.688 208.4 308.759 248.294 285.815Z"
                fill="#F2E205"
              />
            </svg>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default LandingPageTemplate;
