import { MotionDiv } from "@/components/MotionDiv";
import PageLayout from "@/components/layout/PageLayout";
import { delay } from "framer-motion";
import type { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "About",
  description: "An architecture & engineering company",
};

const About = () => {
  return (
    <PageLayout>
      <section className="overflow-hidden my-10 sm:my-20 ">
        <div className="container-x">
          <MotionDiv
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-lg">About Us</p>
            <h1 className="text-3xl sm:text-6xl  mt-3 uppercase ">
              Discover AR-Architect & Engineering
            </h1>
          </MotionDiv>
        </div>
      </section>
      <MotionDiv
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <section className="relative min-h-[400px] pt-40">
          <Image
            className="object-cover object-bottom -z-20"
            src={"/section/architects-with-planning.jpg"}
            fill
            alt=""
          />

          <div className="absolute inset-0 bg-black/20 -z-10"></div>
        </section>
      </MotionDiv>
      <section className="py-12 overflow-hidden">
        <div className="container-x">
          <MotionDiv
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className=" text-lg sm:text-2xl text-center max-w-4xl mx-auto">
              Choosing AR Architect & Engineering means choosing a commited
              partner. Our Client-Centric appproach and personalized guidance
              set us apart. we&apos;re your allies on the path to your dream
              home
            </p>
          </MotionDiv>
        </div>
      </section>
      <section className="mb-10 sm:mb-20 py-16 bg-slate-950">
        <div className="container-x">
          <MotionDiv
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl uppercase">
              Explore Our <br /> company playbook
            </h2>
            <div className="grid sm:grid-cols-7 h-[450px] gap-6 mt-8 overflow-hidden">
              <Image
                className="hidden sm:block col-span-2 h-full object-cover "
                src={"/section/two-architect-with-laptop.jpg"}
                width={400}
                height={400}
                alt=""
              />
              <Image
                className=" col-span-5  h-full object-cover"
                src={"/section/architects-with-planning-and-laptop.jpg"}
                width={1000}
                height={400}
                alt=""
              />
            </div>
          </MotionDiv>

          <div className="grid sm:grid-cols-3 gap-10 mt-14">
            <MotionDiv
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-4xl">01</h4>
              <p className="font-medium my-3 text-xl">
                Innovation and Sustainability
              </p>
              <p>
                Our playbook revolves around integrating cutting-edge technology
                and eco-friendly practices into all our projects. We
                continuously seek to innovate, pushing architectural boundaries
                with creative solutions while setting new industry standards for
                sustainable design.
              </p>
            </MotionDiv>
            <MotionDiv
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { delay: 0.1 } }}
              viewport={{ once: true }}
            >
              <h4 className="text-4xl">02</h4>
              <p className="font-medium my-3 text-xl">
                Client-Centric Approach
              </p>
              <p>
                At AR-Architect & Engineering, we prioritize understanding and
                exceeding our client&apos;s expectations. Our approach
                emphasizes personalized service and collaborative project
                management, aiming to build long-term relationships based on
                trust and client satisfaction.
              </p>
            </MotionDiv>
            <MotionDiv
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
              viewport={{ once: true }}
            >
              <h4 className="text-4xl">01</h4>
              <p className="font-medium my-3 text-xl">Quality and Excellence</p>
              <p>
                Our commitment to quality and excellence drives everything we
                do. We uphold meticulous attention to detail, craftsmanship, and
                rigorous quality control throughout the design process. From
                concept to completion, we strive for excellence in delivering
                high-quality architectural solutions.
              </p>
            </MotionDiv>
          </div>
        </div>
      </section>
      <section className="my-10 sm:my-20">
        <div className="container-x grid sm:grid-cols-2 gap-6">
          <MotionDiv
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-6xl uppercase max-w-lg">
              What we want to achieve
            </h2>
          </MotionDiv>
          <MotionDiv
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="mb-6">
              At AR-Architect & Engineering, our vision is centered on
              revolutionizing architectural design through innovation,
              sustainability, and community impact. We aspire to create spaces
              that not only meet the functional and aesthetic needs of our
              clients but also contribute positively to the environment and
              society at large. <br />
              We are committed to pushing the boundaries of design by harnessing
              cutting-edge technology and embracing sustainable practices. This
              includes integrating renewable energy systems, utilizing
              eco-friendly materials, and implementing smart building
              technologies to optimize energy efficiency and minimize
              environmental footprint.
              <br />
              <br />
              Beyond architecture, our vision extends to fostering lasting
              relationships with our clients, stakeholders, and the communities
              where we operate. We believe in the transformative power of
              thoughtful design to enhance quality of life, promote wellness,
              and inspire future generations. Through continuous learning,
              collaboration, and a passion for excellence, we strive to lead by
              example in shaping a more sustainable and resilient built
              environment.
            </p>
          </MotionDiv>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
