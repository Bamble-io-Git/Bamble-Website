import React from 'react';
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
      title: 'The present:',
      text: 'What are you doing now? Why are you qualified for this job? Years of experience in the role and current responsibilities?',
      icon: '/assets/bulb.svg',
    },
    {
      id: 2,
      title: 'The past:',
      text: 'What’s your inspiration? What have you done? Your main achievements so far?',
      icon: '/assets/bulb.svg',
    },
    {
      id: 3,
      title: 'The future:',
      text: 'What are your goals and expectations for your next job?',
      icon: '/assets/bulb.svg',
    },
  ];

  if (!isOpen) return null;

  return createPortal(
    <>
      <div
        ref={ref}
        className="top-0 fixed z-50 bottom-0 right-0 left-0 bg-[#00000057] font-tertiary"
      />
      <div className="fixed top-[15%] left-[7%] md:left-[50%] z-50 font-tertiary">
        <div className="relative rounded-md sm:p-6 p-2 max-w-[95%] md:max-w-[85%] bg-white-primary font-tertiary">
          <div className="flex gap-4 items-start">
            <div>
              <p className="font-semibold mb-6 font-tertiary">
                {' '}
                We will build a powerful intro in your resume for you!
              </p>

              <p className="mb-4">
                PRO Tip💡: Think about the job you are applying to.
              </p>

              <div className="space-y-6">
                {data.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 space-y-6 items-center shadow-[0px_10px_30px_0px_rgba(0,0,0,0.1)]
 rounded-md py-6 px-5"
                  >
                    <div className="bg-yellow-primary relative rounded-md min-w-[32px] h-[32px]">
                      <Image
                        alt=""
                        src={item.icon}
                        height={12}
                        width={12}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      />
                    </div>
                    <div>
                      <p className="text-[18px] font-bold font-tertiary">
                        {' '}
                        {item.title}
                      </p>
                      <p className="text-base font-tertiary">{item.text}</p>
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
