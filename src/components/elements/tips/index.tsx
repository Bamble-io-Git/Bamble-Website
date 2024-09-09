import Modal from '@/components/modules/modal/modal';
import Modal2 from '@/components/modules/modal/modal-2';
import { useOnClickOutside } from '@/hooks/use-click-outside';
import useModal from '@/hooks/use-modal';
import { usePathname } from 'next/navigation';
import React, { useRef } from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const Tips = () => {
  const ref = useRef(null);
  const { state, handleIsOpen, handleIsClose } = useModal();

  const PATHNAME = usePathname();

  useOnClickOutside(ref, handleIsClose);

  return (
    <section>
      <div className="bg-[#217DD1] p-6 rounded-lg items-center flex md:gap-3 gap-1">
        <Tooltip id="my-tooltip">
          <p>...</p>
        </Tooltip>
        {PATHNAME.includes('work-experiences') ? (
          <Modal2 isOpen={state.isOpen} ref={ref} />
        ) : (
          <Modal isOpen={state.isOpen} ref={ref} />
        )}
        <button
          onClick={handleIsOpen}
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Click to expand"
        >
          <svg
            className="h-6 w-7 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>

        <p>Check here some tips of what you could say to us!</p>
      </div>
    </section>
  );
};

export default Tips;
