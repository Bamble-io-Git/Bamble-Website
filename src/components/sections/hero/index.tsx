import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="relative flex justify-center flex-col text-center border">
        <Image
          className="absolute top-0 left-0 xl:-left-[30%] hidden md:block"
          src="/assets/landing-page-z.svg"
          alt=""
          width={400}
          height={400}
        />
        <Image
          className="absolute hidden md:block top-0 right-0 xl:-right-[29%]"
          src="/assets/zig-zag.svg"
          alt=""
          width={400}
          height={700}
        />
        <h1>Affordable Recruitment as a Service for Start-ups & Companies</h1>

        <h2>
          Do you struggle to find top tier tech talent within your budget? We
          have been there too. We understand the pain, the wasted time and the
          frustration that comes with limited resources. Our aim is to fix
          these!
        </h2>

        <h3>We’ll fix your recruiting issues in a blink!</h3>

        <div
          className="background: var(#005FDF, #005FDF);
box-shadow: 0px 25.6px 57.6px 0px rgba(0, 0, 0, 0.22);
filter: blur(57.400001525878906px);"
        >
          Blur
        </div>
      </div>
    </section>
  );
};

export default Hero;
