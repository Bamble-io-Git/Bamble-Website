"use client";
import { useRef } from "react";
import PageLayout from "../layout";
import DedicatedRecruiters from "../sections/dedicated-recruiters";
import GiveTeamLife from "../sections/give-life";
import Hero from "../sections/hero";
import ReadyToGetStarted from "../sections/ready-to-start";
import RecruitingExcellence from "../sections/recruiting-excellence";

const LandingPageTemplate = () => {
  const ref = useRef<null | HTMLElement>(null);
  const handleScroll = () =>
    ref.current && ref?.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <PageLayout>
      <Hero handleScroll={handleScroll} />
      <GiveTeamLife handleScroll={handleScroll} />
      <RecruitingExcellence />
      <DedicatedRecruiters />
      <ReadyToGetStarted ref={ref} />
    </PageLayout>
  );
};

export default LandingPageTemplate;
