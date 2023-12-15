import VerticalCards from "@/components/elements/cards/vertical-card";
import Image from "next/image";
import { IMAGES } from "../../../../public/assets/images/images";

const DedicatedRecruiters = () => {
  const CARDS = [
    {
      title: "Dedicated Recruiters",
      text: "Expert recruiters committed to understanding your startup's hiring needs.",
    },
    {
      title: "Real-time Collaboration",
      text: "Seamless collaboration with our team for instant, efficient decision-making.",
    },
    {
      title: "Quick Turnaround",
      text: "Swift and effective recruitment processes to meet your startup's urgent staffing needs.",
    },
  ];
  return (
    <section className="bg-[#000040] wrapper pt-16 pb-24 lg:pt-0 lg:pb-0 relative overflow-hidden">
      <div className="flex gap-x-8 xl:gap-x-40 max-w-7xl mt-12 lg:mt-40 mx-auto">
        <div className="rounded-t-[36px] relative h-[563px] 2xl:h-[575px] w-[480px] lg:block hidden">
          {" "}
          <Image
            src={IMAGES.funcionario}
            alt=""
            height={575}
            width={480}
            className={"absolute top-0 w-full rounded-t-[36px] z-10"}
            quality={100}
          />
        </div>
        <div className="w-full lg:w-[500px] flex flex-col gap-y-12">
          {CARDS.map(({ title, text }) => (
            <>
              <VerticalCards title={title} text={text} />
            </>
          ))}
        </div>
      </div>
      <Image
        src="/assets/purple-z-felicidad.svg"
        alt=""
        width={280}
        height={240}
        className="absolute -left-20 2xl:-left-0 top-40 2xl:top-40 lg:block hidden"
      />
    </section>
  );
};

export default DedicatedRecruiters;
