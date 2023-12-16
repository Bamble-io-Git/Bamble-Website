import { IMAGES } from "@/app/theme/images/images";
import InfoComponent from "@/components/elements/info";
import LinkComponent from "@/components/elements/link";
import useMediaQuery from "@/hooks/useMediaQuery";
import clsx from "clsx";
import Image from "next/image";
import { forwardRef, useState } from "react";

const ReadyToGetStarted = forwardRef((props, scrollRef: any) => {
  const isMobile = useMediaQuery(640);
  const [limit, setLimit] = useState(3);
  const [selectedCard, setSelectedCard] = useState(undefined);

  const handleMore = (array: any[], limit: number) => {
    let maxCheck = 0;

    if (array.length > maxCheck) {
      maxCheck = array.length;
    }
    if (array.length < maxCheck) {
      console.log("Array", array);
      const items = array.slice(0, limit);
      return items;
    } else {
      const items = array.slice(0, limit + 1);
      return items;
    }
  };

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

  const handleIncrementLoadMore = (index: number) => {
    console.log(selectedCard);
    console.log(index);
    // setLimit((p) =>
    //   index === selectedCard ? p * CARDS[0].incentives[0].items.length : 4,
    // );

    if (index === selectedCard) {
      setLimit(200);
    }
  };

  return (
    <section className="wrapper py-20 sm:py-[110px]">
      <div className="sm:text-start text-center mx-auto">
        <h2 className="text-black text-center">Ready to Get Started?</h2>
        <p className="text-[#434B53] text-lg sm:text-[20px] max-w-[420px] text-center mx-auto mt-5">
          Choose a plan that fits your needs and get to know what recruiting for
          you costs!
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center mx-auto max-w-6xl mt-8 lg:mt-16">
        <div
          className="w-full flex sm:justify-center gap-10 sm:gap-4 flex-col lg:flex-row items-center lg:items-start"
          ref={scrollRef}
        >
          {CARDS.map(({ title, pricing, incentives }, index) => (
            <div
              className="max-w-[480px] xl:max-w-[580px] flex flex-col gap-y-7 border bg-gray-primary h-fit"
              key={title}
            >
              <div className="relative hidden sm:block w-[480px] xl:w-[580px] h-[183px]">
                <Image
                  src={IMAGES.colleague}
                  alt=""
                  fill
                  className="object-cover w-full h-full"
                  quality={100}
                />
              </div>

              <div className="px-10 flex flex-col gap-y-7 pb-10">
                <span className="flex gap-4 items-center">
                  <h4 className="font-semibold text-[28px]">{title} </h4>

                  {title.includes("Pro") && (
                    <InfoComponent text="Recommended" />
                  )}
                </span>

                <span className="flex gap-x-3">
                  <Image
                    src="/assets/Money.svg"
                    alt=""
                    width={30}
                    height={30}
                  />{" "}
                  <p className="text-blue-primary"> Pricing: {pricing} </p>
                </span>

                <div className="w-2/3 mt-5 -mb-2">
                  <LinkComponent text="Pay now" outline={index === 0} url="#" />
                </div>
              </div>

              <div className="flex flex-col gap-y-7 px-10 pb-12">
                {incentives.map((incentive, index) => (
                  <>
                    <p className="font-semibold text-[28px]">
                      {incentive.heading}
                    </p>

                    <div className="flex flex-col gap-y-5">
                      {handleMore(incentive.items, limit).map((item) => (
                        <span className="flex gap-x-3 items-center" key={item}>
                          <Image
                            alt=""
                            width={30}
                            height={30}
                            src="/assets/blue-check.svg"
                          />

                          <span className="flex gap-x-3 items-center">
                            <p
                              key={item}
                              className={clsx(
                                item.includes("Intelligence") && "pb-6",
                                "relative",
                              )}
                            >
                              {item}

                              {item.includes("Intelligence") && (
                                <span className="text-sm text-[#605E5C] font-normal absolute top-7 left-0">
                                  * only markets where we have presence
                                </span>
                              )}
                            </p>

                            {item.includes("Embedded hiring") && (
                              <Image
                                alt=""
                                width={30}
                                height={30}
                                src="/assets/exclaim.svg"
                              />
                            )}
                          </span>
                        </span>
                      ))}
                    </div>
                  </>
                ))}
                {!isMobile && (
                  <span className="flex gap-x-3 items-center">
                    <Image
                      alt=""
                      width={30}
                      height={30}
                      src="/assets/down.svg"
                    />
                    <button
                      onClick={() => {
                        setSelectedCard(index);

                        handleIncrementLoadMore(index);
                      }}
                      className="mr-auto text-[#323130] text-base font-normal"
                    >
                      See more
                    </button>
                  </span>
                )}
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
