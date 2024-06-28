"use client";
import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    "Architecture",
    "Planning",
    "Interior Design",
    "Landscape Architecture",
    "Visualization",
    "Presentation",
  ];
  return (
    <section className="overflow-x-hidden my-10 sm:my-20">
      <div className="container-x">
        <SectionHeader title="Our Services" letter="C" />
        <ul className="mt-10 sm:columns-2 list-disc list-outside pl-10 text-2xl md:text-4xl leading-tight font-medium">
          {services.map((item, i) => {
            return (
              <motion.li
                initial={{ y: 40, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: 0.1 * i },
                }}
                viewport={{ once: true }}
                key={i}
                className="mb-5"
              >
                {item}
              </motion.li>
            );
          })}
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-7 gap-12 mt-12">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative h-full min-h-[60vw] md:min-h-0 w-full md:col-span-3"
          >
            <Image
              className="object-cover object-center block"
              src={"/section/house.jpg"}
              fill
              alt="Interior Design of a home"
            />
          </motion.div>

          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="md:col-span-4"
          >
            <h2 className="text-4xl uppercase">Why Choose Us</h2>
            <div className="grid sm:grid-cols-2 gap-10 mt-10">
              <div>
                <h4 className="text-xl mb-3">Innovative Design Solutions</h4>
                <p>
                  We deliver cutting-edge designs that blend functionality with
                  aesthetics, ensuring your project stands out.
                </p>
              </div>
              <div>
                <h4 className="text-xl mb-3">Client-Centric Approach</h4>
                <p>
                  We work closely with you to meet and exceed your expectations,
                  tailoring our services to your needs.
                </p>
              </div>
              <div>
                <h4 className="text-xl mb-3">Sustainable Practices</h4>

                <p>
                  Our designs incorporate eco-friendly materials and
                  energy-efficient solutions for environmentally responsible
                  projects.
                </p>
              </div>
              <div>
                <h4 className="text-xl mb-3">Comprehensive Services</h4>
                <p>
                  We offer a full range of services from concept to completion,
                  ensuring a seamless and efficient process.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
