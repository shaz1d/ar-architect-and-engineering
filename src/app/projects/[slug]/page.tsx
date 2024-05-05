import PageLayout from "@/components/layout/PageLayout";
import Button from "@/components/ui/Button";
import { getProject } from "@/lib/data";
import Image from "next/image";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};
export const generateMetadata = async ({ params }: Props) => {
  const project = await getProject(params.slug);
  return {
    title: project.title,
    description: project.description,
  };
};

const SingleProject = async ({ params }: Props) => {
  const project = await getProject(params.slug);
  return (
    <PageLayout>
      <section className=" my-10 sm:my-20">
        <div className="container-x">
          <div className="flex gap-8 justify-between items-end">
            <div>
              <p className="font-medium capitalize mb-2 max-w-80">
                {project.subTitle}
              </p>
              <h2 className="text-4xl sm:text-7xl uppercase">
                {project.title}
              </h2>
            </div>
            <p className=" shrink-0 flex items-center">
              Scroll to Explore <i className="bx bx-chevrons-down bx-md"></i>
            </p>
          </div>
        </div>
      </section>
      <section className="my-10 sm:my-20 border-b border-t border-gray-400 py-16">
        <div className="container-x">
          <Image
            className=" object-cover object-center h-[600px]"
            src={project.thumbnail}
            width={1920}
            height={600}
            alt="House"
          />
        </div>
      </section>
      <section className="my-10 sm:my-20">
        <div className="container-x">
          <p className="text-md font-semibold mb-10">Overview</p>
          <div className="grid md:grid-cols-2">
            <div className="max-w-[500px]">
              <h2 className="text-4xl sm:text-5xl uppercase">
                The future of real estate investing platform
              </h2>
              <ul className="flex gap-2 flex-wrap mt-5 max-w-52">
                <li className="px-3 rounded-full pb-[2px] bg-white text-black">
                  Architecture
                </li>
                <li className="px-3 rounded-full pb-[2px] bg-white text-black">
                  Planning
                </li>
                <li className="px-3 rounded-full pb-[2px] bg-white text-black">
                  Design
                </li>
              </ul>
            </div>
            <div>
              <p className="text-2xl font-medium">{project.overview}</p>
              <h3 className="text-3xl sm:text-4xl uppercase mt-10 mb-5">
                The Challenge
              </h3>
              <p>{project.challenge}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="border-t border-gray-400 pt-16">
        <div className="container-x">
          <p className="text-md font-semibold mb-10">Project Gallery</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => {
              return (
                <Image
                  key={i}
                  className="object-cover object-center"
                  src={"/section/house.jpg"}
                  alt=""
                  width={600}
                  height={200}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="my-10  sm:my-20  border-b border-t border-gray-400 py-16">
        <div className="container-x">
          <p className="text-md font-semibold mb-10">The Result</p>
          <div className="grid md:grid-cols-2">
            <div className="max-w-[500px]">
              <h2 className="text-4xl sm:text-5xl uppercase">
                We make an impact through our work
              </h2>
              <a className="inline-block mt-5" href="/">
                Visit Website
              </a>
            </div>
            <div>
              <p className="text-xl font-medium">{project.result}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-x-hidden my-10 sm:my-16">
        <div className="container-x">
          <p className="text-md font-semibold mb-10">Similar Projects</p>
          <div className="grid grid-cols-2 gap-10">
            <div className="overflow-hidden relative w-full aspect-[8/6] group/project">
              <Image
                className="-z-10 object-cover object-center"
                src={"/section/house.jpg"}
                alt=""
                fill
              />
              <div className="w-full py-6 bg-black transition duration-300 ease-in-out absolute bottom-0 translate-y-full group-hover/project:translate-y-0">
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eveniet quo corrupti illum minus eligendi consequuntur
                  doloribus impedit iusto nobis porro. Vitae, illum placeat!
                  Cumque natus dolorem dolores ratione fugit. Molestias.
                </p>
                <Button href="/" title="View Project" />
              </div>
            </div>
            <div className="overflow-hidden relative w-full aspect-[8/6] group/project">
              <Image
                className="-z-10 object-cover object-center"
                src={"/section/house.jpg"}
                alt=""
                fill
              />
              <div className="w-full py-6 bg-black transition duration-300 ease-in-out absolute bottom-0 translate-y-full group-hover/project:translate-y-0">
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eveniet quo corrupti illum minus eligendi consequuntur
                  doloribus impedit iusto nobis porro. Vitae, illum placeat!
                  Cumque natus dolorem dolores ratione fugit. Molestias.
                </p>
                <Button href="/" title="View Project" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-10  sm:my-20  border-b border-t border-gray-400 py-16">
        <div className="container-x flex flex-col items-center justify-center gap-10">
          <h2 className="text-6xl md:text-8xl capitalize max-w-[700px] text-center">
            Want to start a project?
          </h2>
          <Button href="/contact" title="Let's Talk" />
        </div>
      </section>
    </PageLayout>
  );
};

export default SingleProject;
