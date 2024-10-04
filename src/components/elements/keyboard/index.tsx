import clsx from 'clsx';
import Image from 'next/image';
import React, { Dispatch, SetStateAction } from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const Keyboard = ({
  setShowKeyboard,
  setText,
  text,
  recording,
}: {
  setShowKeyboard: Dispatch<SetStateAction<boolean>>;
  setText: Dispatch<SetStateAction<string>>;
  text: string;
  recording?: Blob;
}) => {
  return (
    <div
      className="flex gap-3"
      data-tooltip-id="my-tooltip"
      data-tooltip-content={
        recording?.size! > 0
          ? 'Delete recording to type'
          : 'Please type at least 10 words'
      }
    >
      <Tooltip id="my-tooltip">
        <p></p>
      </Tooltip>
      <div className="align-self-center place-items-center my-auto space-y-4">
        <button
          onClick={() => setText('')}
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Clear"
        >
          <Image width={40} height={40} alt="" src="/assets/cancel.svg" />
        </button>

        <button
          onClick={() => setShowKeyboard(false)}
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Switch to recording"
        >
          <Image width={40} height={40} alt="" src="/assets/micro.svg" />
        </button>
      </div>
      <div className="w-[465px]">
        <textarea
          readOnly={recording?.size! > 0}
          onChange={(e) => setText(e.target.value)}
          className={clsx(
            text.length >= 60 && 'border-green-600 border-2',
            'border border-black rounded-lg w-[300px] lg:w-[465px] min-h-[250px] p-3 !outline-none'
          )}
          value={text}
          placeholder={
            recording?.size! > 0
              ? 'You have already recorded your details, delete to type'
              : 'Type your details here..'
          }
        ></textarea>
      </div>
    </div>
  );
};

export default Keyboard;
