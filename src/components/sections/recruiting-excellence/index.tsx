import VerticalCards from "@/components/elements/cards/vertical-card";
import clsx from "clsx";
import Image from "next/image";
import { IMAGES } from "../../../../public/assets/images/images";
import styles from "./styles.module.css";
const RecruitingExcellence = () => {
  const CARDS = [
    {
      title: "Cost-effective",
      text: "Affordable recruitment solutions tailored for startups on a budget.",
    },
    {
      title: "Scalability",
      text: "Flexible services that grow with your startup, adapting to changing staffing requirements.",
    },
    {
      title: "Access to Valuable Experience",
      text: "Tap into the experience of seasoned recruiters for strategic hiring insights.",
    },
  ];
  return (
    <section className="bg-blue-primary wrapper py-20 sm:py-[90px] relative overflow-hidden">
      <Image
        src="/assets/blue-z.svg"
        alt=""
        width={400}
        height={400}
        className="absolute -right-40 2xl:right-0 -top-2 2xl:-top-10 md:block hidden"
      />
      <div className="relative sm:text-start text-center">
        <h2 className="text-white-primary sm:block hidden">
          Recruiting excellence within reach
        </h2>
        <h2 className="text-white-primary sm:hidden block w-[200px] mx-auto mb-3">
          Give life to your team
        </h2>

        <Image
          src="/assets/yellow-adornment.svg"
          alt=""
          width={95}
          height={2}
          className="absolute -top-8 sm:-top-4 left-[40%] sm:left-0"
        />
      </div>

      <p className="text-white-primary sm:block hidden">
        Affordable subscription services for start-ups and companies
      </p>
      <p className="text-white-primary sm:hidden block max-w-[318px] text-center mx-auto">
        Build or grow your team hustle-free! Simple, effective and efficient
      </p>

      <div className="flex justify-between max-w-6xl mt-12 lg:mt-40">
        <div className="w-full lg:w-[392px] flex flex-col gap-y-12">
          {CARDS.map(({ title, text }) => (
            <>
              <VerticalCards title={title} text={text} />
            </>
          ))}
        </div>
        <div className="bg-[#ECF1FF] rounded-t-[36px] relative h-[517px] w-[502px] lg:block hidden">
          {" "}
          <Image
            src={IMAGES.designer}
            alt=""
            height={664}
            width={502}
            className={clsx(styles.image, "mb-20 absolute -top-36")}
          />
        </div>
      </div>
    </section>
  );
};

export default RecruitingExcellence;
