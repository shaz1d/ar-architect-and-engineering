"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const Clients = () => {
  const clients = [
    {
      name: "Thomas",
      profession: "Architect",
      image: "/section/house.jpg",
      quote:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam blanditiis harum culpa libero sit commodi cum enim recusandae minus sapiente.",
    },
    {
      name: "Thomas",
      profession: "Social Engineer",
      image: "/section/house.jpg",
      quote:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam blanditiis harum culpa libero sit commodi cum enim recusandae minus sapiente.",
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
                  <p className=" text-gray-300">{item.quote}</p>
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
