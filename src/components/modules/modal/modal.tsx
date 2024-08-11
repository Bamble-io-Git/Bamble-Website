import useMediaQuery from '@/hooks/useMediaQuery';
import Image from 'next/image';
import { createPortal } from 'react-dom';
const Modal = ({
  isOpen,
  handleClose,
  ref,
}: {
  isOpen: boolean;
  handleClose?: () => void;
  ref?: any;
}) => {
  const data = [
    {
      id: 1,
      title: 'What you are currently doing at work?',
      text: '(responsibilities, leadership load, task/project implementation)',
      icon: '/assets/bulb.svg',
    },
    {
      id: 2,
      title: 'What relevant things have you done in the past?',
      text: '(work milestones, project completions, product launch)',
      icon: '/assets/bulb.svg',
    },
    {
      id: 3,
      title: 'What kind of opportunities are you looking for in a new job?',
      text: '(work culture, work responsibilities, growth expectations)',
      icon: '/assets/bulb.svg',
    },
  ];
  const isMobile = useMediaQuery(640);
  if (!isOpen) return null;

  return createPortal(
    <>
      <div
        ref={ref}
        className="top-0 fixed z-50 bottom-0 right-0 left-0 bg-[#00000057]"
      />
      <div className="fixed top-[15%] left-[7%] md:left-[50%] z-50">
        <div className="relative rounded-md p-6 max-w-[95%] md:max-w-[85%] bg-white-primary">
          <div className="flex gap-4 items-start">
            <div>
              <p className="font-semibold mb-6"> Tips on what to say!</p>

              <div className="space-y-6">
                {data.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 space-y-6 items-center shadow-[0px_10px_30px_0px_rgba(0,0,0,0.1)]
 rounded-md py-6 px-5"
                  >
                    <div className="bg-yellow-primary relative rounded-md w-[32px] h-[32px]">
                      <Image
                        alt=""
                        src={item.icon}
                        height={12}
                        width={12}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      />
                    </div>
                    <div>
                      <p className="text-[18px] font-bold"> {item.title}</p>
                      <p className="text-base">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    //@ts-ignore
    document.getElementById('portal')
  );
};

export default Modal;
