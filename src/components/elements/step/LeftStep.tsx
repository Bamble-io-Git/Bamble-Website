import Image from 'next/image';
import React from 'react';

const LeftStep = ({ image }: { image: string }) => {
  return (
    <div className="hidden lg:block">
      <Image
        src={image ? image : '/assets/signup.webp'}
        alt="Image"
        width={580}
        height={1400}
        priority
        quality={80}
      />
    </div>
  );
};

export default LeftStep;
