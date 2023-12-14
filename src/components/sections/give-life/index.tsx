"use client";
import useMediaQuery from "@/hooks/useMediaQuery";
import clsx from "clsx";
import Image from "next/image";

const CARDS = [
  {
    title: "Submit a role",
    icon: "/assets/user-edit.svg",
    text: "You'll get access to a notion board where you can create hiring requests following provided guidance",
  },
  {
    title: "Get a shortlist",
    icon: "/assets/user-display.svg",
    text: "Our average delivery time is 2-3 days. You can prioritize tasks depending on your current needs",
  },
  {
    title: "Review and hire!",
    icon: "/assets/search.svg",
    text: "When the role is fulfilled, we jump into a new task, you have time to review. On the shared notion page, you can add real-time comments and instantaneous feedback",
  },
];

const GiveTeamLife = () => {
  const isTablet = useMediaQuery(1240);
  return (
    <section className="wrapper py-10 sm:py-[118px]">
      <div className="text-center">
        <h2 className="mb-5">Give life to your team</h2>

        <p>
          Build or grow your team hassle-free!{" "}
          <span className="font-semibold block">
            Simple, effective and efficient
          </span>
        </p>

        <div className="flex gap-10 flex-col lg:flex-row justify-center lg:items-start items-center mt-20">
          {CARDS.map(({ title, icon, text }, index) => (
            <div
              key={text}
              className="w-[342px] flex justify-center flex-col relative"
            >
              {index === CARDS.length - 1 ? null : (
                <Image
                  src="/assets/connector.svg"
                  alt=""
                  height={40}
                  width={isTablet ? 130 : 200}
                  className="absolute -right-[35%] top-[8%] hidden lg:block"
                />
              )}
              <div className="bg-yellow-primary rounded-[30px] p-10 w-[106px] h-[106px] mx-auto">
                <Image src={icon} alt="" height={40} width={40} />
              </div>

              <div className="my-4 flex-1">
                <h4 className="font-semibold text-2xl mb-3">{title}</h4>
                <div className="block flex-1">
                  <p className={clsx(text.length > 150 ? "break-words" : "")}>
                    {text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiveTeamLife;
