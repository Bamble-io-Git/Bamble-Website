import clsx from "clsx";
import Link from "next/link";

const LinkComponent = ({
  url,
  outline,
  text,
  cardLink,
}: {
  url: string;
  text: string;
  outline?: boolean;
  cardLink?: boolean;
}) => {
  return (
    <Link
      target="_blank"
      href={url}
      className={clsx(
        outline
          ? "border border-blue-primary bg-white-primary text-blue-primary"
          : "text-white-primary",
        cardLink && "sm:max-w-[207px] max-w-[100%] text-center mt-5 -mb-2",
        "px-10 sm:px-[58px] bg-blue-primary rounded-lg  font-semibold text-[17px] sm:text-lg sm:w-auto py-[14.5px]",
      )}
    >
      {text}
    </Link>
  );
};

export default LinkComponent;
