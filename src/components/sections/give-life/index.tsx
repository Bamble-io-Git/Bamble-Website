"use client";
import Button from "@/components/elements/button";
import LinkComponent from "@/components/elements/link";
import useMediaQuery from "@/hooks/useMediaQuery";
import clsx from "clsx";
import Image from "next/image";

const CARDS = [
  {
    title: "Submit a role",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M20 4C15.5817 4 12 7.58172 12 12C12 16.4183 15.5817 20 20 20C24.4183 20 28 16.4183 28 12C28 7.58172 24.4183 4 20 4ZM10.0175 22C7.8063 22 6 23.7737 6 26C6 29.3824 7.66562 31.9326 10.27 33.5932C12.3691 34.9316 15.0666 35.6918 18.0114 35.9234C18.0286 35.72 18.0624 35.514 18.1143 35.3065L18.8633 32.3107C19.1443 31.1864 19.7257 30.1596 20.5452 29.3402L27.8853 22L10.0175 22ZM21.9595 30.7544L31.6184 21.0955C33.0791 19.6348 35.4473 19.6348 36.908 21.0955C38.3687 22.5562 38.3687 24.9245 36.908 26.3852L27.2491 36.044C26.686 36.6072 25.9804 37.0067 25.2077 37.1998L22.2119 37.9488C20.9091 38.2745 19.729 37.0944 20.0547 35.7916L20.8037 32.7958C20.9968 32.0231 21.3964 31.3175 21.9595 30.7544Z"
          fill="#49390D"
        />
      </svg>
    ),
    text: "You'll get access to a notion board where you can create hiring requests following provided guidance",
  },
  {
    title: "Get a shortlist",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="41"
        height="40"
        viewBox="0 0 41 40"
        fill="none"
      >
        <path
          d="M10.5 6C8.29086 6 6.5 7.79086 6.5 10V30C6.5 32.2091 8.29086 34 10.5 34H20.8946C20.4241 32.4805 20.22 30.608 21.0999 29.2C21.3686 28.7298 21.7276 28.3273 22.1464 28H19.5C18.9477 28 18.5 27.5523 18.5 27C18.5 26.4477 18.9477 26 19.5 26H25.3149C24.7945 25.1441 24.4999 24.1211 24.4999 23C24.4999 22.658 24.5263 22.324 24.5771 22H19.5C18.9477 22 18.5 21.5523 18.5 21C18.5 20.4477 18.9477 20 19.5 20H25.2622C26.2747 18.1845 28.2051 17 30.4999 17C31.4999 17 32.4999 17.2 33.4999 17.8C33.8587 17.9993 34.1937 18.2384 34.5 18.5108V10C34.5 7.79086 32.7091 6 30.5 6H10.5ZM15.5 14.5C15.5 15.3284 14.8284 16 14 16C13.1716 16 12.5 15.3284 12.5 14.5C12.5 13.6716 13.1716 13 14 13C14.8284 13 15.5 13.6716 15.5 14.5ZM14 22C13.1716 22 12.5 21.3284 12.5 20.5C12.5 19.6716 13.1716 19 14 19C14.8284 19 15.5 19.6716 15.5 20.5C15.5 21.3284 14.8284 22 14 22ZM15.5 26.5C15.5 27.3284 14.8284 28 14 28C13.1716 28 12.5 27.3284 12.5 26.5C12.5 25.6716 13.1716 25 14 25C14.8284 25 15.5 25.6716 15.5 26.5ZM19.5 14H27.5C28.0523 14 28.5 14.4477 28.5 15C28.5 15.5523 28.0523 16 27.5 16H19.5C18.9477 16 18.5 15.5523 18.5 15C18.5 14.4477 18.9477 14 19.5 14ZM32.5 19.5351C31.9117 19.1948 31.2286 19 30.5 19C28.2909 19 26.5 20.7909 26.5 23C26.5 25.2091 28.2909 27 30.5 27C31.2286 27 31.9117 26.8052 32.5 26.4649C33.6956 25.7733 34.5 24.4806 34.5 23C34.5 21.5194 33.6956 20.2267 32.5 19.5351ZM22.5 31.5C22.5 30.1193 23.6193 29 25 29H36C37.3807 29 38.5 30.1193 38.5 31.5C38.5 31.5585 38.5006 31.6171 38.5011 31.6758C38.5025 31.8181 38.5038 31.9608 38.4972 32.1028C38.4947 32.1559 38.4901 32.2273 38.4814 32.3143C38.464 32.4882 38.4302 32.7266 38.3645 33.0085C38.2334 33.5702 37.9713 34.3205 37.4442 35.0735C36.3525 36.6331 34.271 38 30.5 38C27.2776 38 25.2889 37.0019 24.0972 35.7382C23.8943 35.5231 23.7146 35.3003 23.5558 35.0735C23.2684 34.663 23.0598 34.2533 22.9083 33.8744C22.7819 33.5584 22.6951 33.2639 22.6355 33.0085C22.5698 32.7266 22.536 32.4882 22.5186 32.3143C22.5099 32.2273 22.5053 32.1559 22.5028 32.1028C22.5 31.8401 22.5 31.692 22.5 31.5057V31.5Z"
          fill="#49390D"
        />
      </svg>
    ),
    text: "Our average delivery time is 2-3 days. You can prioritize tasks depending on your current needs",
  },
  {
    title: "Review and hire!",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M18 23C20.7614 23 23 20.7614 23 18C23 15.2386 20.7614 13 18 13C15.2386 13 13 15.2386 13 18C13 20.7614 15.2386 23 18 23ZM6 12C6 8.68629 8.68629 6 12 6H28C31.3137 6 34 8.68629 34 12V28C34 31.3137 31.3137 34 28 34H12C8.68629 34 6 31.3137 6 28V12ZM18 25C19.5724 25 21.0237 24.4816 22.1923 23.6063L27.2929 28.707C27.6834 29.0976 28.3166 29.0976 28.7071 28.7071C29.0976 28.3165 29.0976 27.6834 28.7071 27.2928L23.6065 22.192C24.4816 21.0235 25 19.5723 25 18C25 14.134 21.866 11 18 11C14.134 11 11 14.134 11 18C11 21.866 14.134 25 18 25Z"
          fill="#49390D"
        />
      </svg>
    ),
    text: "When the role is fulfilled, we jump into a new task, you have time to review. On the shared notion page, you can add real-time comments and instantaneous feedback",
  },
];

const GiveTeamLife = ({ handleScroll }: { handleScroll: () => void }) => {
  const isTablet = useMediaQuery(1240);
  return (
    <section className="wrapper py-8 sm:py-28">
      <div className="text-center">
        <h2 className="mb-5">Give life to your team</h2>

        <p>
          Build or grow your team hassle-free!{" "}
          <span className="font-semibold block">
            Simple, effective and efficient
          </span>
        </p>

        <div className="flex gap-10 flex-col lg:flex-row justify-center lg:items-start items-center mt-10 sm:mt-20 mb-14">
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
              <div className="bg-yellow-primary rounded-[30px] p-10 w-[106px] h-[106px] mx-auto flex items-center justify-center">
                <div>{icon}</div>
              </div>

              <div className="my-4 flex-1">
                <h4 className="font-semibold text-xl lg:text-2xl mb-3">
                  {title}
                </h4>
                <div className="block flex-1">
                  <p className={clsx(text.length > 150 ? "break-words" : "")}>
                    {text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>{" "}
      <div className="hidden sm:flex flex-col sm:flex-row items-center justify-normal sm:justify-center gap-5 pt-6 pb-7 sm:mx-0 mx-auto ">
        <LinkComponent
          url="https://calendly.com/bamble-melissa/30min"
          text="Book a call"
        />
        <Button
          text="View pricing"
          className="text-gray-text"
          handleClick={handleScroll}
        />
      </div>
    </section>
  );
};

export default GiveTeamLife;
