import Image from 'next/image';
import React, { Dispatch, SetStateAction } from 'react';

const Keyboard = ({
  setShowKeyboard,
  setText,
  text,
}: {
  setShowKeyboard: Dispatch<SetStateAction<boolean>>;
  setText: Dispatch<SetStateAction<string>>;
  text: string;
}) => {
  return (
    <div className="flex gap-3">
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
          onChange={(e) => setText(e.target.value)}
          className="border border-black rounded-lg w-[300px] lg:w-[465px] min-h-[250px] p-3"
          value={text}
          placeholder=""
        ></textarea>
      </div>
    </div>
  );
};

export default Keyboard;
