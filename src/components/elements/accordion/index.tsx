import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
type TAccordion = {
  title: string;
  content: string;
  selectAccordionItem: (id: number) => void;
  index: number;
  isSelected: boolean;
};

const Accordion = ({
  title,
  content,
  selectAccordionItem,
  index,
  isSelected,
}: TAccordion) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="transition-all ease-in-out duration-500">
      <div
        className={clsx(
          // isSelected ? "absolute" : "hidden",
          !isSelected && "hidden",
          ` bg-purple-primary rounded-2xl text-white-primary  max-w-full lg:max-w-[680px] p-9 transition-all ease-in-out duration-500 ${
            isOpen
              ? "transform translate-y-12 mt-20"
              : "transform -translate-y-full z-10"
          }`,
        )}
      >
        <div className="flex justify-between mb-7">
          <h3 className="text-[28px] font-primary max-w-[400px]">{title}</h3>
          <Image
            src="/assets/socials/ArrowUp.svg"
            width={24}
            height={0}
            alt=""
            className="p-0 h-12"
          />
        </div>

        <p className="text-base sm:text-xl font-normal text-white-primary">
          {content}
        </p>
      </div>

      <button
        className={clsx(
          isOpen ? "mt-[0px] z-0" : "mt-[20px]",
          "bg-white-primary p-9 rounded-2xl transform focus:outline-none w-full lg:w-[680px] text-gray-text flex justify-between items-center transition-all ease-in-out duration-500",
        )}
        onClick={() => {
          toggleAccordion();
          selectAccordionItem(index);
        }}
      >
        <p className="text-start text-base sm:text-xl font-light break-words max-w-[510px]">
          {" "}
          {title}
        </p>

        <Image
          src="/assets/socials/ArrowDown.svg"
          width={24}
          height={24}
          alt=""
        />
      </button>
    </div>
  );
};

export default Accordion;
