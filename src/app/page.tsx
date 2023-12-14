import PageLayout from "@/components/layout";
import GiveTeamLife from "@/components/sections/give-life";
import Hero from "@/components/sections/hero";
import RecruitingExcellence from "@/components/sections/recruiting-excellence";

export default function Home() {
  return (
    <main className="flex justify-center">
      <PageLayout>
        <Hero />
        <GiveTeamLife />
        <RecruitingExcellence />
      </PageLayout>
    </main>
  );
}
