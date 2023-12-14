import PageLayout from "@/components/layout";
import GiveTeamLife from "@/components/sections/give-life";
import Hero from "@/components/sections/hero";

export default function Home() {
  return (
    <main className="flex justify-center">
      <PageLayout>
        <Hero />
        <GiveTeamLife />
      </PageLayout>
    </main>
  );
}
