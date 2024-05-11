import PageLayout from "@/components/layout/PageLayout";
import Image from "next/image";
import React from "react";

type Props = {};

const Services = (props: Props) => {
  return (
    <PageLayout>
      <section className="my-10 sm:my-20 ">
        <div className="container-x">
          <p className="text-lg">Services</p>
          <h1 className="text-3xl sm:text-6xl max-w-xl mt-3 uppercase ">
            Your One Stop Shop for your Project
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-3 mt-10">
            <div className="flex flex-col gap-3 ">
              <Image
                src={"/section/house.jpg"}
                height={300}
                width={400}
                alt=""
              />
              <h4 className="text-3xl">Architecture</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores, cum minima! Laboriosam sit tempora, assumenda nulla qui
                rerum dolor?
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;
