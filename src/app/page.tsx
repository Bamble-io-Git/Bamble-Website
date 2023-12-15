import PageLayout from "@/components/layout";
import DedicatedRecruiters from "@/components/sections/dedicated-recruiters";
import GiveTeamLife from "@/components/sections/give-life";
import Hero from "@/components/sections/hero";
import ReadyToGetStarted from "@/components/sections/ready-to-start";
import RecruitingExcellence from "@/components/sections/recruiting-excellence";

export default function Home() {
  return (
    <main className="flex justify-center">
      <PageLayout>
        <Hero />
        <GiveTeamLife />
        <RecruitingExcellence />
        <DedicatedRecruiters />
        <ReadyToGetStarted />
      </PageLayout>
    </main>
  );
}
