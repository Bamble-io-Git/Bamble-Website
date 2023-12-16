import { IMAGES } from "@/app/theme/images/images";
import LinkComponent from "@/components/elements/link";
import Image from "next/image";
import { forwardRef } from "react";

const ReadyToGetStarted = forwardRef((props, scrollRef: any) => {
  const CARDS = [
    {
      title: "RAAS Basic",
      pricing: "€ 1,000",
      image: IMAGES.colleague,
      incentives: [
        {
          heading: "What do you get?",
          items: [
            "One opening = one time fee",
            "Profile definition based on company needs",
            "Job description creation",
            "Salary Intelligence per role and market",
            "2-3 days to receive a shortlist",
            "3 months candidate replacement guarantee",
            "Support during the interviews",
            "Slack Updates",
          ],
        },
      ],
    },
    {
      title: "Subscription RAAS Pro",
      pricing: "€ 2,500",
      image: IMAGES.jovial,
      incentives: [
        {
          heading: "What do you get?",
          items: [
            "Two role requests at a time = Uncapped requests",
            "Unlimited recruiting requests",
            "Embedded hiring",
            "Salary Intelligence per role and market",
            "Ready to hire shortlist",
            "3 months candidate replacement guarantee",
            "Priority Support",
            "Slack Updates",
            "+ other benefits offered in basic tier",
          ],
        },
      ],
    },
  ];
  return (
    <section className=" wrapper py-20 sm:py-[90px]">
      <div className="sm:text-start text-center mx-auto">
        <h2 className="text-black text-center">Ready to Get Started?</h2>
        <p className="text-[#434B53] text-lg sm:text-[20px] max-w-[420px] text-center mx-auto mt-5">
          Choose a plan that fits your needs and get to know what recruiting for
          you costs!
        </p>
      </div>

      <div className="flex justify-between max-w-6xl mt-12 lg:mt-40">
        <div className="w-full flex  gap-10 sm:gap-4" ref={scrollRef}>
          {CARDS.map(({ title, pricing, incentives }, index) => (
            <div
              className="max-w-[580px] flex flex-col gap-y-7 border"
              key={title}
            >
              <div className="relative w-[580px] h-[183px]">
                <Image
                  src={IMAGES.colleague}
                  alt=""
                  // width={580}
                  // height={183}
                  fill
                  className="object-cover w-full h-full"
                  quality={100}
                />
                {/* <div className="absolute w-full h-full bg-gradient-black top-0 left-0" />{" "} */}
              </div>

              <div className="px-10 flex flex-col gap-y-7">
                <h4 className="font-semibold text-[28px]">{title}</h4>

                <span className="flex gap-x-3">
                  <Image
                    src="/assets/Money.svg"
                    alt=""
                    width={30}
                    height={30}
                  />{" "}
                  <p className="text-blue-primary"> Pricing: {pricing} </p>
                </span>

                <div className="w-2/3 mt-[49px] mb-[40px]">
                  <LinkComponent text="Pay now" outline={index === 0} url="#" />
                </div>
              </div>

              <div className="flex flex-col gap-y-7 px-10">
                {incentives.map((incentive) => (
                  <>
                    <p className="font-semibold text-[28px]">
                      {incentive.heading}
                    </p>

                    <div className="flex flex-col gap-y-7">
                      {incentive.items.map((item) => (
                        <p>{item}</p>
                      ))}
                    </div>
                  </>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default ReadyToGetStarted;

ReadyToGetStarted.displayName = "ReadyToGetStarted";
