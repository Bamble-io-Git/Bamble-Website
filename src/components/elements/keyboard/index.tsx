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
          placeholder="   Lorem ipsum dolor sit amet consectetur. A porta eget tincidunt mollis
          scelerisque tincidunt in. Felis aenean quis duis eu. Ullamcorper eget
          massa egestas a quis rhoncus. Pellentesque duis eu consequat in
          pellentesque mus mattis amet. Auctor dui malesuada id feugiat
          vulputate enim est posuere accumsan. Facilisis amet vitae egestas
          risus interdum egestas accumsan. Metus massa viverra id dictum
          tincidunt fermentum habitasse quis. Volutpat vitae turpis tellus
          iaculis sit non dolor a dictum. Tristique vulputate in mattis at amet.
          Pellentesque lobortis natoque gravida eget viverra euismod porttitor
          nunc. Nulla urna quis tortor magna et."
        ></textarea>
      </div>
    </div>
  );
};

export default Keyboard;
