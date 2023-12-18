import AccordionList from "@/components/elements/accordion";
import Image from "next/image";

const FAQ = () => {
  const CARDS = [
    {
      title: "Cost-effective",
      text: "Affordable recruitment solutions tailored for startups on a budget.",
    },
    {
      title: "Scalability",
      text: "Flexible services that grow with your startup, adapting to changing staffing requirements.",
    },
    {
      title: "Access to Valuable Experience",
      text: "Tap into the experience of seasoned recruiters for strategic hiring insights.",
    },
  ];
  return (
    <section className="bg-blue-primary wrapper py-10 sm:py-20 relative flex  justify-between">
      <Image
        src="/assets/inverted-z.svg"
        alt=""
        width={596}
        height={584}
        className="absolute -left-5 2xl:left-0 -bottom-0 2xl:-bottom-0 md:block hidden"
      />
      <div className="relative sm:text-start text-center  w-[350px]">
        <h2 className="text-white-primary sm:block hidden">
          FAQ´s Frequently asked questions
        </h2>
      </div>

      <div className="flex   max-w-6xl mt-12 lg:mt-40 ">
        <AccordionList />
      </div>
    </section>
  );
};

export default FAQ;
