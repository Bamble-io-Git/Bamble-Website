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
        recording?.size! > 0 ? 'Delete recording to type' : 'Type here!'
      }
    >
      <Tooltip id="my-tooltip">
        <p></p>
      </Tooltip>
      <div className="align-self-center place-items-center my-auto space-y-4">
        <button onClick={() => setShowKeyboard(false)}>
          <Image width={40} height={40} alt="" src="/assets/cancel.svg" />
        </button>

        <button onClick={() => setShowKeyboard(false)}>
          <Image width={40} height={40} alt="" src="/assets/micro.svg" />
        </button>
      </div>
      <div className="w-[465px]">
        <textarea
          readOnly={recording?.size! > 0}
          onChange={(e) => setText(e.target.value)}
          className="border border-black rounded-lg w-[300px] lg:w-[465px] min-h-[250px] p-3 "
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
