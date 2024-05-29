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
            <p className="text-lg">About</p>
            <h1 className="text-3xl sm:text-6xl max-w-xl mt-3 uppercase ">
              Your One Stop Shop for your Project
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
            <p className="text-2xl text-center max-w-4xl capitalize mx-auto">
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
            <h2 className="text-5xl uppercase">
              Explore Our <br /> company playbook
            </h2>
            <div className="grid grid-cols-7 h-[450px] gap-6 mt-8 overflow-hidden">
              <Image
                className=" col-span-2 h-full object-cover "
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
              <p className="font-medium my-3 text-xl">Pioneer in Everything</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Officia sint fuga consequuntur blanditiis hic nam exercitationem
                odit eveniet cupiditate ex.
              </p>
            </MotionDiv>
            <MotionDiv
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { delay: 0.1 } }}
              viewport={{ once: true }}
            >
              <h4 className="text-4xl">01</h4>
              <p className="font-medium my-3 text-xl">Pioneer in Everything</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Officia sint fuga consequuntur blanditiis hic nam exercitationem
                odit eveniet cupiditate ex.
              </p>
            </MotionDiv>
            <MotionDiv
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
              viewport={{ once: true }}
            >
              <h4 className="text-4xl">01</h4>
              <p className="font-medium my-3 text-xl">Pioneer in Everything</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Officia sint fuga consequuntur blanditiis hic nam exercitationem
                odit eveniet cupiditate ex.
              </p>
            </MotionDiv>
          </div>
        </div>
      </section>
      <section className="my-10 sm:my-20">
        <div className="container-x grid grid-cols-2">
          <MotionDiv
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl uppercase max-w-lg">
              What we want to achieve
            </h2>
          </MotionDiv>
          <MotionDiv
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              quidem porro dolorem minus in ad quis vel. Magni dignissimos
              accusantium fuga laborum adipisci exercitationem assumenda odit
              inventore sequi in, ad explicabo earum deleniti reprehenderit
              ducimus eos perspiciatis quia voluptates! Aliquam delectus
              aspernatur quo cupiditate ea est culpa voluptates assumenda nemo
              distinctio, maiores eos quod laboriosam optio? Harum explicabo
              possimus sit veritatis debitis sequi velit inventore! Dicta optio
              magnam maiores iste, quasi cumque libero atque impedit. Nihil
              blanditiis quaerat veritatis ut!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, cum dolores, rerum doloremque pariatur, fugiat
              delectus architecto doloribus distinctio at veniam voluptatum
              natus. Odit animi excepturi minus dolore inventore aliquid iusto
              omnis obcaecati, error nisi quaerat molestias facilis asperiores
              ipsa!
            </p>
          </MotionDiv>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
