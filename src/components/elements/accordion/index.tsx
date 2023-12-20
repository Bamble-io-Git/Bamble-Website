import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import styles from "./styles.module.css";

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
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative w-full">
      {isOpen && isSelected && (
        <div className={clsx(styles.content, styles.open)}>
          <div className="flex justify-between">
            <h3 className="text-[28px] font-primary max-w-[520px] mb-3">
              {title}
            </h3>
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
      )}

      {!isSelected && (
        <button
          className={`${
            isOpen ? "mt-0 z-0 h-20" : "mt-1"
          } bg-white-primary p-7 sm:p-9 rounded-2xl focus:outline-none w-full lg:w-[550px]  xl:w-[680px] text-gray-text flex justify-between items-center transition-all ease-in-out duration-500`}
          onClick={() => {
            toggleAccordion();
            selectAccordionItem(index);
          }}
        >
          <p className="text-start text-base sm:text-lg lg:text-xl font-light break-words max-w-[380px] sm:max-w-[510px]">
            {title}
          </p>
          <Image
            src="/assets/socials/ArrowDown.svg"
            width={24}
            height={24}
            alt=""
          />
        </button>
      )}

      {isSelected && !isOpen && (
        <div className={clsx(styles.content, styles.closed)}>
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
      )}
    </div>
  );
};

export default Accordion;
