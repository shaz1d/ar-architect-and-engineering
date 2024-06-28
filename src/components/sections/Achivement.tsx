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
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl uppercase"
          >
            We believe in quality
          </motion.h2>
          <div className="md:col-span-2 leading-[180%] grid md:grid-cols-2 gap-10">
            <div>
              <motion.p
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                Welcome to AR-Architect & Engineering! We specialize in
                providing top-notch architecture design and planning services.
                Our team is dedicated to creating innovative and functional
                spaces that meet the unique needs of our clients. With a focus
                on quality and sustainability, we strive to bring your vision to
                life through meticulous planning and exceptional design.
              </motion.p>
              <motion.p
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, transition: { delay: 0.1 } }}
                viewport={{ once: true }}
                className="mt-5"
              >
                Discover the difference that AR-Architect & Engineering can make
                in your next project. Let us help you create a space that
                inspires and endures.
              </motion.p>
            </div>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
              viewport={{ once: true }}
            >
              Our experienced architects and engineers work closely with clients
              from concept to completion, ensuring that every project reflects
              their style and meets their requirements. Whether it’s
              residential, commercial, or industrial, we approach each project
              with a commitment to excellence and attention to detail.
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
                viewport={{ once: true }}
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
