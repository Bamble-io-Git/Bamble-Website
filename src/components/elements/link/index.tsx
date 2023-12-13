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
        "px-[58px] py-[11px] bg-blue-primary rounded-lg text-white font-semibold text-lg",
      )}
    >
      {text}
    </Link>
  );
};

export default LinkComponent;
