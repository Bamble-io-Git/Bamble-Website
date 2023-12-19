import Image from "next/image";
import { createPortal } from "react-dom";
const Modal = ({
  isOpen,
  handleClose,
}: {
  isOpen: boolean;
  handleClose?: () => void;
}) => {
  if (!isOpen) return null;
  return createPortal(
    <>
      <div className="top-0 fixed z-50 bottom-0 right-0 left-0 bg-[#00000057]" />
      <div className="fixed top-[30%] left-[7%] md:left-[28%] z-50">
        <div className="relative rounded-[26px] p-10 max-w-[95%] md:max-w-[60%] bg-white-primary">
          <div className="flex gap-4 items-start">
            <div>
              <Image alt="" width={90} height={30} src="/assets/exclaim.svg" />
            </div>
            <div>
              <p className="font-semibold mb-6"> Embbeded hiring</p>
              <p>
                We integrate our process with yours, streamlining post-sourcing
                processes such as technical testing, profile review etc.) and
                turbocharging your speed. Candidates are checked and vetted
                upfront.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>,
    //@ts-ignore
    document.getElementById("portal"),
  );
};

export default Modal;
