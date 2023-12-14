import Image from "next/image";
import { IMAGES } from "../../../../public/assets/images/images";

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
    <section className="bg-blue-primary wrapper py-10 sm:py-[90px] relative overflow-hidden">
      <Image
        src="/assets/blue-z.svg"
        alt=""
        width={400}
        height={400}
        className="absolute -right-40 2xl:right-0 -top-2 2xl:-top-10"
      />
      <h2 className="text-white">Recruiting excellence within reach</h2>
      <p className="text-white">
        Affordable subscription services for start-ups and companies
      </p>

      <div className="flex justify-between max-w-6xl mt-40 ">
        <div className="max-w-[392px] flex flex-col gap-y-12">
          {CARDS.map(({ title, text }) => (
            <>
              <div className="flex gap-7">
                <div className="rounded-[10px] bg-[#ECF1FF] min-w-[51px] h-[51px] flex justify-center items-center">
                  <Image
                    src="/assets/Diamond.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                </div>

                <div className="flex flex-col gap-y-2">
                  <h4 className="text-xl lg:text-2xl text-white font-semibold">
                    {title}
                  </h4>
                  <p className="text-white text-base lg:text-[20px]">{text}</p>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="bg-[#ECF1FF] rounded-t-[36px] relative h-[517px] w-[502px]">
          {" "}
          <Image
            src={IMAGES.designer}
            alt=""
            height={664}
            width={502}
            className="mb-20 absolute -top-36"
          />
        </div>
      </div>
    </section>
  );
};

export default RecruitingExcellence;
