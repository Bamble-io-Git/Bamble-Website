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
    <section className="bg-blue-primary wrapper py-20 sm:py-[90px] relative flex justify-between">
      <Image
        src="/assets/inverted-z.svg"
        alt=""
        width={596}
        height={584}
        className="absolute -left-5 2xl:left-0 -bottom-0 2xl:-bottom-0 md:block hidden"
      />
      <div className="relative sm:text-start text-center border max-w-[350px]">
        <h2 className="text-white-primary sm:block hidden">
          FAQ´s Frequently asked questions
        </h2>
      </div>

      <div className="flex justify-between max-w-6xl mt-12 lg:mt-40 border">
        <div className="w-full lg:w-[392px] flex flex-col gap-y-12"></div>
        <div className=" rounded-t-[36px] relative h-[517px] w-[502px] lg:block hidden">
          {/* <Accordion title="A" content="amaben" icon="sas" /> */}

          {/* <AccordionList /> */}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
