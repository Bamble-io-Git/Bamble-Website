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
          "transform -translate-y-6 bg-blue-primary text-white-primary transition-all my-5 lg:my-0",
        "rounded-[36px] min-w-[377px] py-[48px] text-center border bg-[#ECF1FF] font-primary z-10",
      )}
    >
      <p
        className={clsx(
          isActive
            ? "text-white-primary font-semibold text-[70px] mb-10"
            : "text-blue-primary text-[70px] mb-10",
        )}
      >
        {metric}
      </p>
      <p
        className={clsx(
          isActive
            ? "text-white-primary text-[28px]"
            : "text-[28px] text-blue-primary font-semibold mt-10",
        )}
      >
        {outcome}
      </p>
    </div>
  );
};

export default Card;
