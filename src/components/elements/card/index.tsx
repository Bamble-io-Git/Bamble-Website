import clsx from "clsx";

const Card = ({
  metric,
  outcome,
  isActive,
}: {
  metric: string;
  outcome: string;
  isActive: boolean;
}) => {
  return (
    <div
      key={metric}
      className={clsx(
        isActive &&
          "transform -translate-y-6 bg-blue-primary text-blue-primary   transition-all",
        "rounded-[36px] min-w-[377px] py-[20px] text-center border bg-[#ECF1FF] font-primary z-10",
      )}
    >
      <p className="text-[70px] text-white font-semibold ">{metric}</p>
      <p className="text-[28px] text-white font-semibold ">{outcome}</p>
    </div>
  );
};

export default Card;
