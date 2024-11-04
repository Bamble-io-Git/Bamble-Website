import React from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
import clsx from 'clsx';
import Image from 'next/image';
import { createPortal } from 'react-dom';
const Modal2 = ({
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
      title: 'Mention the name of the company and your role',
      text: '',
      icon: '/assets/bulb.svg',
    },
    {
      id: 2,
      title: 'Think of 3 or 4 achievements for each experience.',
      text: '🧠 Remember, only your 2 most recent roles!',
      icon: '/assets/bulb.svg',
    },
    {
      id: 3,
      title: 'Think of your achievements in this format:',
      text: '🚀 I achieved X, by doing Y, measured by Y',
      icon: '/assets/bulb.svg',
    },
  ];
  const isMobile = useMediaQuery(640);
  if (!isOpen) return null;

  return createPortal(
    <>
      <div
        ref={ref}
        className="top-0 fixed z-50 bottom-0 right-0 left-0 bg-[#00000057] font-tertiary"
      />
      <div className="fixed top-[15%] left-[7%] md:left-[50%] z-50">
        <div className="relative rounded-md sm:p-6 p-4 max-w-[95%] md:max-w-[85%] bg-white-primary">
          <div className="flex gap-4 items-start font-tertiary">
            <div>
              <p className="font-semibold mb-4 sm:mb-6 font-tertiary">
                {' '}
                Now, think of your 2 most relevant experiences, they should be
                the latest ones.
              </p>

              <div className="space-y-4 sm:space-y-6">
                {data.map((item, i) => (
                  <div
                    key={item.id}
                    className="flex gap-4 space-y-4 sm:space-y-6 items-center shadow-[0px_10px_30px_0px_rgba(0,0,0,0.1)]
 rounded-md py-4 sm:py-6 sm:px-5 px-3 font-tertiary"
                  >
                    <div className="bg-yellow-primary relative rounded-md min-w-[32px] h-[32px] font-tertiary">
                      <Image
                        alt=""
                        src={item.icon}
                        height={12}
                        width={12}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      />
                    </div>
                    <div className={clsx(i === 0 && 'min-h-[50px]')}>
                      <p className="text-base sm:text-[18px] font-bold font-tertiary">
                        {' '}
                        {item.title}
                      </p>
                      {item.text && (
                        <p className="text-[15px] sm:text-base font-tertiary">
                          {item.text}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-6 font-tertiary">
                💡PRO Tip: If you can show your impact with numbers. it’s way
                better!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>,
    //@ts-ignore
    document.getElementById('portal')
  );
};

export default Modal2;
