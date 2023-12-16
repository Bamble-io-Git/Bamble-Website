"use client";
import Button from "@/components/elements/button";
import Card from "@/components/elements/cards/card";
import LinkComponent from "@/components/elements/link";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const Hero = ({ handleScroll }: { handleScroll: () => void }) => {
  const [selectedCard, setSelectedCard] = useState(0);

  const performanceIndex = [
    {
      id: 0,
      metric: "96%",
      outcome: "Time saved",
    },
    {
      id: 1,
      metric: "5X",
      outcome: "more qualified referrals",
    },
    {
      id: 2,
      metric: "+10",
      outcome: "countries reached",
    },
  ];

  const handleSelectCard = useCallback(() => {
    setSelectedCard((previousState) =>
      previousState === performanceIndex.length - 1 ? 0 : previousState + 1,
    );
  }, [performanceIndex.length]);

  useEffect(() => {
    const intervalId = setInterval(handleSelectCard, 2000);

    return () => clearInterval(intervalId);
  }, [handleSelectCard]);

  const isTablet = useMediaQuery(1024);
  return (
    <section className="relative overflow-hidden">
      <Image
        className="absolute top-0 -left-[25%] xl:-left-[10%] hidden xl:block 2xl:-left-14"
        src="/assets/landing-page-z.svg"
        alt=""
        width={isTablet ? 220 : 477}
        height={isTablet ? 200 : 600}
      />
      <Image
        className="absolute hidden xl:block top-0 -right-[14%] 2xl:-right-10"
        src="/assets/zig-zag.svg"
        alt=""
        width={isTablet ? 220 : 477}
        height={400}
      />
      <div className="flex justify-center flex-col text-center gap-y-6 pt-5 sm:pt-12 pb-20 max-w-[728px] mx-auto px-7 md:px-0">
        <h1>
          Affordable{" "}
          <span className="text-blue-primary">Recruitment as a Service</span>{" "}
          for Start-ups & Companies
        </h1>

        <h4>
          Do you struggle to find top tier tech talent within your budget?
        </h4>
        <h4>
          {" "}
          We have been there too. We understand the pain, the wasted time and
          the frustration that comes with limited resources. Our aim is to fix
          these!
        </h4>

        <div className="flex flex-col sm:flex-row justify-center gap-y-5 gap-x-10 pt-6 pb-7 sm:mx-0 mx-auto">
          <LinkComponent
            url="https://calendly.com/bamble-melissa/30min"
            text="Book a call"
          />
          <Button text="View pricing" handleClick={handleScroll} />
        </div>
        <h3 className="font-secondary text-2xl font-semibold">
          We’ll fix your recruiting issues in a blink!
        </h3>
      </div>
      <div className="flex gap-5 mx-auto justify-center -mt-4 xl:flex-nowrap flex-wrap">
        {performanceIndex.map(({ metric, outcome }, index) => (
          <Card
            isActive={index === selectedCard}
            metric={metric}
            outcome={outcome}
            key={metric}
          />
        ))}
      </div>

      <div className="custom-background custom-box-shadow custom-blur mx-auto h-[40px] max-w-[728px] mt-16 hidden sm:block"></div>
    </section>
  );
};

export default Hero;
