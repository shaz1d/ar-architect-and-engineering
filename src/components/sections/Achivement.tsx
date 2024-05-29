"use client";

import { fadeUp } from "@/lib/animations";
import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion";

const Achievement = () => {
  return (
    <section className="overflow-hidden my-10 sm:my-20">
      <div className="container-x">
        <SectionHeader letter="A" title="About Us" />
        <div className="grid md:grid-cols-3 gap-10 mt-10">
          <motion.h2
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="text-4xl sm:text-5xl uppercase"
          >
            We believe in quality
          </motion.h2>
          <div className="md:col-span-2 leading-[180%] grid md:grid-cols-2 gap-10">
            <div>
              <motion.p
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                ducimus ea dolorum impedit voluptatum! Ut, explicabo quam!
                Veniam blanditiis quasi possimus consequuntur pariatur iusto
                repudiandae numquam inventore temporibus quos maxime ullam
                rerum, placeat quis aut distinctio quam quod enim sed hic vel.
              </motion.p>
              <motion.p
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, transition: { delay: 0.1 } }}
                className="mt-5"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                quo praesentium excepturi aliquid eius provident deserunt unde
                magni nam eligendi.
              </motion.p>
            </div>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
              necessitatibus optio enim earum tempore soluta quas illo? Atque
              autem enim sunt unde. Id in ad exercitationem! Expedita sint nisi
              libero.
            </motion.p>
          </div>
        </div>
        <ul className="flex justify-between gap-2 sm:gap-0 flex-wrap mt-10 sm:mt-20">
          {[
            { title: "Awwards", num: 5 },
            { title: "Employees", num: 86 },
            { title: "Projects", num: 150 },
            { title: "Years of Experience", num: 12 },
          ].map((item, i) => {
            return (
              <motion.li
                initial={{ y: 20, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: 0.1 * i },
                }}
                key={i}
                className="w-max text-center"
              >
                <h3 className="text-4xl sm:text-5xl">{item.num}+</h3>
                <p className="mt-2 text-gray-400">{item.title}</p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Achievement;
