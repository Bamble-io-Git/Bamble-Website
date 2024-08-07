import Image from 'next/image';
import React from 'react';

const LeftStep = ({ image }: { image: string }) => {
  return (
    <div>
      <Image
        src={image ? image : '/assets/signup.png'}
        alt="Signup"
        width={580}
        height={1400}
      />
    </div>
  );
};

export default LeftStep;
