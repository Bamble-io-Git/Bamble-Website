import clsx from "clsx";
import Link from "next/link";

const LinkComponent = ({
  url,
  outline,
  text,
}: {
  url: string;
  text: string;
  outline?: boolean;
}) => {
  return (
    <Link
      target="_blank"
      href={url}
      className={clsx(
        outline && "",
        "px-10 sm:px-[58px] bg-blue-primary rounded-lg text-white-primary font-semibold text-[17px] sm:text-lg sm:w-auto py-[14.5px]",
      )}
    >
      {text}
    </Link>
  );
};

// sm:px-[58px] py-[11px] w-[179px]

export default LinkComponent;
