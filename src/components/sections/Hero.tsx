"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeLeft, fadeUp, fadeRight } from "@/lib/animations";

const Hero = () => {
  return (
    <section className="md:min-h-screen pt-10">
      <div className="container-x flex justify-between h-full items-center">
        <motion.h1
          initial={{ x: -40, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          className="fluid-text sm:text-7xl font-bold"
        >
          Modern <br /> Architecture
        </motion.h1>
        <ul className="flex flex-col gap-3">
          <li>Services</li>
          {["Architecture", "Designing", "Planning"].map((item, index) => (
            <motion.li
              initial={{ opacity: 0, x: 20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.1 * index },
              }}
              key={index}
              className="text-xl font-medium"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        <Image
          className="mt-5 sm:-mt-5 md:-mt-10 mx-auto"
          src={"/section/black-building-with-car.png"}
          width={1260}
          height={680}
          alt="black building with car"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
