"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const Clients = () => {
  const clients = [
    {
      name: "John Smith",
      profession: "Homeowner",
      image: "/section/house.jpg",
      quote:
        "AR-Architect & Engineering brought our vision to life with their innovative and sustainable design. Our home is beautiful and energy-efficient. We couldn't be happier!",
    },
    {
      name: "Dave Charles",
      profession: "Business Owner",
      image: "/section/house.jpg",
      quote:
        "Their professionalism and attention to detail were outstanding. Our new office space is functional and aesthetically pleasing. Highly recommend their services!",
    },
  ];
  return (
    <section className="overflow-hidden my-10 sm:my-20">
      <div className="container-x">
        <motion.h2
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl uppercase"
        >
          Our Happy Clients
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {clients.map((item, i) => {
            return (
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: 0.1 * i },
                }}
                viewport={{ once: true }}
                key={i}
                className="grid grid-cols-6 gap-5"
              >
                <div className="col-span-3 sm:col-span-2  relative ">
                  <Image src={item.image} fill alt="house" />
                </div>
                <div className="col-span-3 sm:col-span-4 py-10">
                  <p className=" text-gray-300">
                    <span className=" font-bold">&quot;</span>
                    {item.quote}
                    <span className="font-bold">&quot;</span>
                  </p>
                  <p className=" text-lg font-semibold mt-3 ">{item.name}</p>
                  <p className=" text-gray-300">{item.profession}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Clients;
