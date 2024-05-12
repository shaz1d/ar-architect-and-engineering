import PageLayout from "@/components/layout/PageLayout";
import React from "react";

const Services = () => {
  return (
    <PageLayout>
      <section className="my-10 sm:my-20 ">
        <div className="container-x">
          <p className="text-lg">Services</p>
          <h1 className="text-3xl sm:text-6xl max-w-xl mt-3 uppercase">
            Your One Stop Shop for your Project
          </h1>
          <ul className="mt-20 grid sm:grid-cols-2 md:grid-cols-3 gap-16 list-disc list-outside pl-8 text-2xl leading-tight font-medium">
            <li className="hover:bg-slate-950 transition p-5">
              <p>Architecture</p>
              <p className="text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, harum! Assumenda, odio?
              </p>
            </li>
            <li className="hover:bg-slate-950 transition p-5">
              <p>Planning</p>
              <p className="text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, harum! Assumenda, odio?
              </p>
            </li>
            <li className="hover:bg-slate-950 transition p-5">
              <p>Interior Design</p>
              <p className="text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, harum! Assumenda, odio?
              </p>
            </li>
            <li className="hover:bg-slate-950 transition p-5">
              <p>Landscape Architecture</p>
              <p className="text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, harum! Assumenda, odio?
              </p>
            </li>
            <li className="hover:bg-slate-950 transition p-5">
              <p>Visualization</p>
              <p className="text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, harum! Assumenda, odio?
              </p>
            </li>
            <li className="hover:bg-slate-950 transition p-5">
              <p>Presentation</p>
              <p className="text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, harum! Assumenda, odio?
              </p>
            </li>
          </ul>

          {/* <div className="grid grid-cols-2 md:grid-cols-3 mt-10">
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
          </div> */}
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;
