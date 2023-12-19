import Image from "next/image";
import { createPortal } from "react-dom";
const Modal = ({
  isOpen,
  handleClose,
}: {
  isOpen: boolean;
  handleClose: () => void;
}) => {
  if (!isOpen) return null;
  return createPortal(
    <>
      <div
        className="top-0 fixed z-50 bottom-0 right-0 left-0 bg-[#00000057]"
        onClick={handleClose}
      />
      <div className="fixed top-[30%] left-[7%] md:left-[16%] z-50">
        <div className="relative rounded-2xl p-20 max-w-[95%] md:max-w-[80%] bg-[#fefefe] ">
          <div className="flex gap-4">
            <div>
              <Image alt="" width={230} height={30} src="/assets/exclaim.svg" />
            </div>
            <div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                obcaecati ipsam. Iste architecto voluptatem odit sunt quia
                perspiciatis consequatur? Cupiditate eveniet quos ipsam neque,
                quod numquam. Illo perferendis praesentium veritatis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal"),
  );
};

export default Modal;
