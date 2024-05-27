import Image from "next/image";
import { MotionDiv } from "../MotionDiv";

const Hero = () => {
  return (
    <section className="md:min-h-screen pt-10">
      <div className="container-x flex justify-between h-full items-center">
        <h1 className="fluid-text sm:text-7xl font-bold">
          Modern <br /> Architecture
        </h1>
        <ul>
          <li>Services</li>
          <li>Architecture</li>
          <li>Designing</li>
          <li>Planning</li>
        </ul>
      </div>
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <Image
          className="mt-5 sm:-mt-5 md:-mt-10 mx-auto"
          src={"/section/black-building-with-car.png"}
          width={1260}
          height={680}
          alt="black building with car"
        />
      </MotionDiv>
    </section>
  );
};

export default Hero;
