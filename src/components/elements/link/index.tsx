'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';

const LinkComponent = ({
  url,
  outline,
  text,
  cardLink,
}: {
  url: string;
  text: string;
  outline?: boolean;
  cardLink?: boolean;
}) => {
  const [showIcon, setShowIcon] = useState(false);

  return (
    <Link
      // target="_blank"
      href={url}
      style={{
        display: 'flex',
        justifyItems: 'center',
        alignContent: 'center',
        transition: '0.2s ease-in',
      }}
      onMouseEnter={() => setShowIcon(true)}
      onMouseLeave={() => setShowIcon(false)}
      className={clsx(
        outline
          ? 'border border-blue-primary bg-white-primary text-blue-primary'
          : 'text-white-primary',
        cardLink && 'sm:max-w-[175px] !max-w-[175px] text-center mt-5 -mb-2',
        'px-4 sm:px-[20px] bg-blue-primary rounded-lg hover:font-semibold text-[17px] sm:text-lg sm:w-auto py-[12px]'
      )}
    >
      <span className="mx-auto">{text}</span>

      <span
        className="ml-2 my-auto"
        style={{
          transition: '0.2s ease-in',
        }}
      >
        {showIcon && (
          <svg
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.88464 1.38086L9.20001 5.50007L4.88464 9.61928"
              stroke="white"
              stroke-width="1.28571"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.2 5.5L0.800049 5.5"
              stroke="white"
              stroke-width="1.28571"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
      </span>
    </Link>
  );
};

export default LinkComponent;
