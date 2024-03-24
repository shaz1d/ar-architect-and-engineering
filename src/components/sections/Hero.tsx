import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-screen pt-10">
      <div className="container-x flex justify-between h-full items-center">
        <h1 className="text-7xl font-bold">
          Modern <br /> Architecture
        </h1>
        <ul>
          <li>Services</li>
          <li>Architecture</li>
          <li>Designing</li>
          <li>Planning</li>
        </ul>
      </div>
      <Image
        className="-mt-10 mx-auto"
        src={"/section/black-building-with-car.png"}
        width={1260}
        height={630}
        alt="black building with car"
      />
    </section>
  );
};

export default Hero;
