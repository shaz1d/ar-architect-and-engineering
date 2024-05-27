"use client";

import { fadeUp } from "@/lib/animations";
import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion";

const Achievement = () => {
  return (
    <section className="overflow-x-hidden my-10 sm:my-20">
      <div className="container-x">
        <SectionHeader letter="A" title="About Us" />
        <div className="grid md:grid-cols-3 gap-10 mt-10">
          <motion.h2
            initial={fadeUp.initial}
            whileInView={fadeUp.animate}
            className="text-4xl sm:text-5xl uppercase"
          >
            We believe in quality
          </motion.h2>
          <div className="md:col-span-2 leading-[180%] grid md:grid-cols-2 gap-10">
            <div className="">
              <motion.p initial={{}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                ducimus ea dolorum impedit voluptatum! Ut, explicabo quam!
                Veniam blanditiis quasi possimus consequuntur pariatur iusto
                repudiandae numquam inventore temporibus quos maxime ullam
                rerum, placeat quis aut distinctio quam quod enim sed hic vel.
              </motion.p>
              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                quo praesentium excepturi aliquid eius provident deserunt unde
                magni nam eligendi.
              </p>
            </div>
            <p className="leading-[180%]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
              necessitatibus optio enim earum tempore soluta quas illo? Atque
              autem enim sunt unde. Id in ad exercitationem! Expedita sint nisi
              libero.
            </p>
          </div>
        </div>
        <ul className="flex justify-between gap-2 sm:gap-0 flex-wrap mt-10 sm:mt-20">
          <li className="w-max text-center">
            <h3 className="text-4xl sm:text-5xl">20K+</h3>
            <p className="mt-2 text-gray-400">Awwards</p>
          </li>
          <li className="w-max text-center">
            <h3 className="text-4xl sm:text-5xl">20K+</h3>
            <p className="mt-2 text-gray-400">Awwards</p>
          </li>
          <li className="w-max text-center">
            <h3 className="text-4xl sm:text-5xl">20K+</h3>
            <p className="mt-2 text-gray-400">Awwards</p>
          </li>
          <li className="w-max text-center">
            <h3 className="text-4xl sm:text-5xl">20K+</h3>
            <p className="mt-2 text-gray-400">Awwards</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Achievement;
