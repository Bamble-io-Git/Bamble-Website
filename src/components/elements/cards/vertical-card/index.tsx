import Image from "next/image";

const VerticalCards = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="flex gap-7">
      <div className="rounded-[10px] bg-[#ECF1FF] min-w-[51px] h-[51px] flex justify-center items-center">
        <Image src="/assets/Diamond.svg" alt="" width={24} height={24} />
      </div>

      <div className="flex flex-col gap-y-2">
        <h4 className="text-xl lg:text-2xl text-white-primary font-semibold">
          {title}
        </h4>
        <p className="text-white-primary text-base lg:text-[20px]">{text}</p>
      </div>
    </div>
  );
};

export default VerticalCards;
