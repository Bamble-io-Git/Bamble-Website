"use client";
import Card from "@/components/elements/card";
import LinkComponent from "@/components/elements/link";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const Hero = () => {
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
    <section className="relative">
      <Image
        className="absolute top-0 -left-[5%] xl:-left-[32%] hidden md:block"
        src="/assets/landing-page-z.svg"
        alt=""
        width={isTablet ? 220 : 400}
        height={isTablet ? 200 : 400}
      />
      <Image
        className="absolute hidden md:block top-0 right-0 xl:-right-[38%]"
        src="/assets/zig-zag.svg"
        alt=""
        width={isTablet ? 220 : 400}
        height={400}
      />
      <div className="flex justify-center flex-col text-center gap-y-6 pt-12 pb-24 max-w-[728px] mx-auto">
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

        <div className="flex justify-center gap-x-10 py-5">
          <LinkComponent
            url="https://calendly.com/bamble-melissa/30min"
            text="Book a call"
          />
          <button>View pricing</button>
        </div>
        <h3 className="font-secondary text-2xl font-semibold">
          We’ll fix your recruiting issues in a blink!
        </h3>
      </div>
      <div className="flex gap-x-5 mx-auto justify-center -mt-4">
        {performanceIndex.map(({ metric, outcome }, index) => (
          <Card
            isActive={index === selectedCard}
            metric={metric}
            outcome={outcome}
            key={metric}
          />
        ))}
      </div>

      <div className="custom-background custom-box-shadow custom-blur h-[50px]"></div>
    </section>
  );
};

export default Hero;
