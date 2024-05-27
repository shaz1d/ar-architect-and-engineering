"use client";
import Image from "next/image";
import { MotionDiv } from "../MotionDiv";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="md:min-h-screen overflow-x-hidden pt-10">
      <div className="container-x flex justify-between h-full items-center">
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="fluid-text sm:text-7xl font-bold"
        >
          Modern <br /> Architecture
        </motion.h1>
        <motion.ul
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col gap-3"
        >
          <li>Services</li>
          {["Architecture", "Designing", "Planning"].map((item, index) => (
            <motion.li
              initial={{ opacity: 0, x: 20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.05 * index },
              }}
              key={index}
              className="text-xl font-medium"
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
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
