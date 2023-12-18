import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
type TAccordion = {
  title: string;
  content: string;
  icon: "transparent" | "profitability" | "engagement" | "limitless";
};

const Accordion = ({ title, content, icon }: TAccordion) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative transition-all ease-in-out">
      <div
        className={`absolute bg-purple-primary rounded-2xl text-white-primary   transition-transform duration-300 w-[680px] p-9 ${
          isOpen
            ? "transform translate-y-12 mt-[100px]"
            : "transform -translate-y-full"
        }`}
      >
        {content}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
        numquam harum saepe in consectetur minus, suscipit quasi placeat
        consequatur architecto provident similique voluptas, illum id!
        Recusandae suscipit repellast laborum ipsa!
      </div>
      <button
        className={clsx(
          isOpen ? "mt-[0px]" : "mt-[20px] border",
          "bg-white-primary p-9 rounded-md transition-transform duration-300 transform focus:outline-none relative z-10 w-[680px] text-gray-text flex justify-between items-center",
        )}
        onClick={toggleAccordion}
      >
        {title}
        <p className="text-[20px] font-normal">
          {" "}
          consequatur architecto provident similique voluptas, illum id!
          Recusandae suscipit repellast laborum ipsa!{" "}
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
