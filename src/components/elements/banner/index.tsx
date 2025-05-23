import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

const Banner = ({
  type,
  text,
  lg,
}: {
  text: string;
  type?: 'pen' | 'star';
  lg?: boolean;
}) => {
  return (
    <div
      className={clsx(
        lg && 'min-w-[380px] text-center mx-auto px-3',
        'custom-border rounded-[31px] py-2.5 px-5 max-w-md flex gap-x-2.5'
      )}
    >
      {type?.length && type === 'pen' && (
        <span>
          <Image src="/assets/ai-pen.svg" width={24} height={24} alt="" />
        </span>
      )}

      {type?.length && type === 'star' && (
        <span>
          <Image src="/assets/ai-star.svg" width={24} height={24} alt="" />
        </span>
      )}
      <span className="gradient-primary font-semibold tracking-widest text-sm">
        {text}
      </span>
    </div>
  );
};

export default Banner;
