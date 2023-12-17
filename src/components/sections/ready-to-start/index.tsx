import InfoComponent from "@/components/elements/info";
import LinkComponent from "@/components/elements/link";
import useMediaQuery from "@/hooks/useMediaQuery";
import clsx from "clsx";
import Image from "next/image";
import { forwardRef, useState } from "react";
import { CARDS } from "./mocks/data";

const ReadyToGetStarted = forwardRef((props, scrollRef: any) => {
  const isMobile = useMediaQuery(640);
  const [limit, setLimit] = useState(2);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number>();

  const handleMore = (array: any[], limit: number, selected: boolean) => {
    if (!isMobile) return array;
    if (selected && isMobile) {
      return array.slice(0, limit + 10);
    } else {
      return array.slice(0, 4);
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
          className="w-full flex sm:justify-center gap-14 lg:gap-4 flex-col lg:flex-row items-center lg:items-start"
          ref={scrollRef}
        >
          {CARDS.map(({ id, title, pricing, incentives, image }, index) => {
            const isSelected = index === selectedCardIndex;

            return (
              <div
                style={{
                  border: isMobile && isSelected ? "1px solid #005FDF" : "",
                }}
                className={clsx(
                  "border-r border-t-0 sm:border-t-0 border-l border-b border-primary sm:border-[#D4D4D4]",
                  isMobile && index === 0 && "!border-t border-primary",
                  "max-w-[350px] sm:max-w-[480px] xl:max-w-[580px] flex flex-col gap-y-7 border bg-gray-primary h-fit relative transition-all",
                )}
                key={title}
              >
                <div
                  className={clsx(
                    index === 1 && "border-t-[13px] !border-blue-primary",
                    "relative w-[350px] sm:w-[480px] xl:w-[579px] h-0 sm:h-[183px]",
                  )}
                >
                  <Image
                    src={image}
                    alt=""
                    fill
                    className="object-cover w-full h-full hidden sm:block "
                    quality={100}
                  />
                </div>

                <div className="px-10 flex flex-col gap-y-7 pb-10 pt-4 sm:pt-0">
                  {isMobile && title.includes("Pro") && (
                    <div className="max-w-[128px]">
                      <InfoComponent text="Recommended" />
                    </div>
                  )}
                  <span className="flex gap-4 items-center">
                    <h4 className="font-semibold sm:text-[28px] text-2xl">
                      {title}{" "}
                    </h4>

                    {!isMobile && title.includes("Pro") && (
                      <InfoComponent text="Recommended" />
                    )}
                  </span>

                  <span className="flex gap-x-3">
                    <Image
                      src="/assets/Money.svg"
                      alt=""
                      width={30}
                      height={30}
                    />
                    <p className="text-blue-primary"> Pricing: {pricing} </p>
                  </span>

                  <LinkComponent
                    text="Pay now"
                    outline={index === 0}
                    url="#"
                    cardLink
                  />
                </div>

                <div className="flex flex-col gap-y-7 px-10 pb-12">
                  {incentives.map((incentive, idx) => {
                    return (
                      <>
                        <p className="font-semibold text-[28px]">
                          {incentive.heading}
                        </p>

                        <div className="flex flex-col gap-y-5">
                          {handleMore(
                            incentive.items,
                            index === 0 ? limit : limit + 1,
                            isSelected,
                          )?.map((item) => {
                            return (
                              <span
                                className="flex gap-x-3 items-center"
                                key={item}
                              >
                                <Image
                                  alt=""
                                  width={30}
                                  height={30}
                                  src="/assets/blue-check.svg"
                                />

                                <span
                                  className={clsx(
                                    item.includes("Intelligence") &&
                                      "relative pb-6",
                                    "flex gap-x-3 items-center",
                                  )}
                                >
                                  {item.includes("Intelligence") && (
                                    <span className="text-xs sm:text-sm text-[#605E5C] font-normal absolute top-14 sm:top-8   left-0">
                                      * only markets where we have presence
                                    </span>
                                  )}
                                  <p key={item}>{item}</p>

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
                            );
                          })}
                        </div>
                      </>
                    );
                  })}

                  {isMobile && (
                    <span className="flex gap-x-3 items-center">
                      <Image
                        alt=""
                        width={30}
                        height={30}
                        src="/assets/down.svg"
                      />
                      <button
                        onClick={() => {
                          setSelectedCardIndex(id);
                          setLimit((p) => p + incentives[0].items.length);
                        }}
                        className="mr-auto text-[#323130] text-base font-normal"
                      >
                        See more
                      </button>
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default ReadyToGetStarted;

ReadyToGetStarted.displayName = "ReadyToGetStarted";
