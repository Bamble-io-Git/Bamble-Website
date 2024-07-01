import React from 'react';

const Banner = ({ icon, text }: { text: string; icon?: any }) => {
  return (
    <div className="custom-border rounded-[31px] py-2 px-5 max-w-md">
      {icon && <span>{icon}</span>}
      <span className="gradient-primary font-semibold tracking-widest">
        {text}
      </span>
    </div>
  );
};

export default Banner;
