import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import { getProjects } from "@/lib/data";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Projects",
  description: "An architecture & engineering company",
};

const Projects = async () => {
  const projects = await getProjects();
  return (
    <>
      <section className="my-10 sm:my-20 ">
        <div className="container-x">
          <h1 className="text-4xl md:text-6xl">Projects</h1>
          <div className="grid md:grid-cols-3 gap-10 mt-10">
            {projects.map((item, i) => {
              return (
                <div
                  key={i}
                  className="overflow-hidden relative w-full aspect-[8/6] group/project"
                >
                  <Image
                    className="-z-10 object-cover object-center"
                    src={item.thumbnail}
                    alt=""
                    fill
                  />
                  <div className="w-full py-6 bg-black transition duration-300 ease-in-out absolute bottom-0 translate-y-full group-hover/project:translate-y-0">
                    <p className="mb-4">{item.subTitle}</p>
                    <Button
                      href={`/projects/${item.slug}`}
                      title="View Project"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
