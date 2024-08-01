import LeftStep from '@/components/elements/step/LeftStep';
import React from 'react';

const Signup = () => {
  return (
    <section className="flex justify-between">
      <div>
        <LeftStep />
      </div>

      <div className="max-w-[520px] mx-auto pt-20 text-black flex flex-col space-y-5">
        <div className="mb-10">
          <h2 className="font-bold text-[32px] font-secondary">
            {' '}
            Welcome to Bamble!
          </h2>

          <p>Ready to get your dream job?</p>
        </div>

        <form className="flex flex-col space-y-5">
          <div className="flex flex-col space-y-3">
            <label htmlFor="" className="font-bold font-primary">
              Your full name
            </label>
            <input
              type="text"
              placeholder="Your name here..."
              className="border rounded-lg p-3"
            />
          </div>

          <div className="flex flex-col space-y-3">
            <label htmlFor="" className="font-bold font-primary">
              Your best e-mail
            </label>
            <input
              type="text"
              placeholder="Your email here..."
              className="border rounded-lg p-3"
            />
          </div>

          <p className="text-[#414143] font-secondary text-sm">
            By registering for an account, you are consenting to our Terms of
            Service and confirming that you have reviewed and accepted the
            Global Privacy Statement.
          </p>

          <button className="ml-auto bg-[#979797] text-[#202020CC] px-20 py-3 w-[100px] rounded-md font-bold">
            Next
          </button>
        </form>
      </div>
    </section>
  );
};

export default Signup;
