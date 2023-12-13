import Image from "next/image";

const Header = () => {
  return (
    <header className="wrapper py-7 bg-gray-primary flex justify-between items-center">
      <div className="flex gap-x-3 items-center">
        <Image
          alt="Logo"
          src="/assets/bamble-logo.svg"
          width={50}
          height={61}
        />
        <Image
          alt="Logo"
          src="/assets/bamble-black-logo.svg"
          width={156}
          height={24}
        />
      </div>
      <div className="border">Book</div>
    </header>
  );
};

export default Header;
