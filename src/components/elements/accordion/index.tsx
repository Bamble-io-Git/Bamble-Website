import useElementHeight from "@/hooks/use-element-height";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

type TAccordion = {
  title: string;
  content: string;
  selectAccordionItem: (id: number) => void;
  index: number;
  isSelected: boolean;
  selected?: number;
};

const Accordion = ({
  title,
  content,
  selectAccordionItem,
  index,
  isSelected,
  selected,
}: TAccordion) => {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, contentHeight } = useElementHeight(content, isSelected);
  const contentRef = useRef(null); // Add a ref for the content

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  const prev = Number(selected - 1) === index;
  const next = Number(selected + 1) === index;

  // Calculate dynamic spacing based on contentHeight
  const dynamicSpacing = contentHeight ? contentHeight / 2 : 0;

  useEffect(() => {
    // Handle sliding animation for prev item
    if (prev && contentRef.current) {
      //@ts-ignore
      contentRef.current.style.transform = `translateY(${dynamicSpacing}px)`;
    }
  }, [prev, contentHeight, dynamicSpacing]);

  //transform translate-y-12 mt-20

  //transform -translate-y-full z-10

  return (
    <div className="relative w-full transition-all transition-duration-500">
      {!isSelected && (
        <button
          style={{
            transform: isOpen
              ? `translateY(${dynamicSpacing}px)`
              : `translateY(0)`,
            // border: prev ? "3px solid red" : next ? "3px solid green" : "",
            zIndex: prev ? 1000 : 0,
          }}
          className={`${
            isOpen ? "mt-0 z-0" : "mt-1"
          } bg-white-primary p-7 sm:p-8 rounded-2xl focus:outline-none w-full lg:w-[550px] xl:w-[680px] text-gray-text flex justify-between items-center transition-all ease-in-out duration-500`}
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

      {selected === index && (
        <div
          ref={contentRef} // Attach ref to content container
          style={{
            transform: isOpen
              ? `translateY(0)`
              : `translateY(-${dynamicSpacing}px)`,

            zIndex: prev ? 1000 : 0,
          }}
          className={clsx(styles.content)}
        >
          <div className="flex justify-between mb-3">
            <h3 className="text-[28px] text-[#fff] font-semibold font-primary max-w-[400px] mb-1">
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
          <p className="text-base sm:text-xl font-normal text-[#E1DFDD]">
            {content}
          </p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
