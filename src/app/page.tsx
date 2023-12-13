import PageLayout from "@/components/layout";
import Hero from "@/components/sections/hero";

export default function Home() {
  return (
    <main className="flex justify-center">
      <PageLayout>
        <Hero />
      </PageLayout>
    </main>
  );
}
