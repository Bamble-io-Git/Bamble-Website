import AccordionList from "@/components/elements/accordion";
import { AccordionData } from "@/components/elements/accordion/data";
import Image from "next/image";
import { useState } from "react";

const FAQ = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const selectAccordionItem = (id: number) => setSelected(id);
  return (
    <section className="bg-white sm:bg-blue-primary px-4 lg:px-10 2xl:px-[260px] py-10 sm:py-20 relative flex justify-between">
      <Image
        src="/assets/inverted-z.svg"
        alt=""
        width={596}
        height={584}
        className="absolute -left-5 2xl:left-0 -bottom-0 2xl:-bottom-0 md:block hidden"
      />
      <div className="relative sm:text-start text-center w-[350px] lg:block hidden">
        <h2 className="text-white-primary">FAQ´s Frequently asked questions</h2>
      </div>

      <div className="flex gap-y-1 flex-col lg:justify-start justify-center mx-auto lg:mx-0">
        {AccordionData.map(({ title, content }, index) => {
          const isSelected = selected === index;

          return (
            <AccordionList
              title={title}
              key={title}
              content={content}
              index={index}
              selectAccordionItem={selectAccordionItem}
              isSelected={isSelected}
            />
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
