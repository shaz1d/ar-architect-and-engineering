import { MotionDiv } from "@/components/MotionDiv";
import PageLayout from "@/components/layout/PageLayout";
import Button from "@/components/ui/Button";
import { getProject, getProjects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
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
  const Projects = await getProjects();
  const similarProjects = Projects.filter((el) => el.id !== project.id);
  return (
    <PageLayout>
      <section className=" my-10 sm:my-20">
        <div className="container-x">
          <div className="flex gap-8 justify-between items-end">
            <MotionDiv
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <Link
                href="/projects"
                className="capitalize font-semibold text-lg flex items-center gap-2"
              >
                <i className="bx bx-arrow-back bx-sm"></i>Go back
              </Link>
              <h2 className="text-4xl sm:text-7xl uppercase mt-8">
                {project.title}
              </h2>
              <p className="font-medium capitalize mt-4 text-base max-w-80">
                {project.subTitle}
              </p>
            </MotionDiv>
            <MotionDiv
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <a href="#overview" className=" shrink-0 flex items-center">
                Scroll to Explore <i className="bx bx-chevrons-down bx-md"></i>
              </a>
            </MotionDiv>
          </div>
        </div>
      </section>
      <section className="my-10 sm:my-20 border-b border-t border-gray-400 py-16">
        <div className="container-x">
          <MotionDiv
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <Image
              className=" object-cover object-center h-[600px]"
              src={project.thumbnail}
              width={1920}
              height={600}
              alt="House"
            />
          </MotionDiv>
        </div>
      </section>
      <section id="overview" className="my-10 sm:my-20 scroll-mt-12">
        <div className="container-x">
          <p className="text-md font-semibold mb-10">Overview</p>
          <div className="grid md:grid-cols-2">
            <MotionDiv
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-[500px]"
            >
              <h2 className="text-4xl sm:text-5xl uppercase">
                {project.subTitle}
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
            </MotionDiv>
            <MotionDiv
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-xl font-medium">{project.overview}</p>
              <h3 className="text-3xl sm:text-4xl uppercase mt-10 mb-5">
                The Challenge
              </h3>
              <p>{project.challenge}</p>
            </MotionDiv>
          </div>
        </div>
      </section>
      <section className="border-t border-gray-400 pt-16">
        <div className="container-x">
          <p className="text-md font-semibold mb-10">Project Gallery</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[1, 2, 3, 4, 5, 6].map((_, i) => {
              return (
                <MotionDiv
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: { delay: 0.1 * i },
                  }}
                  viewport={{ once: true }}
                  key={i}
                >
                  <Image
                    className="object-cover object-center"
                    src={`/projects/${i + 1}.webp`}
                    alt=""
                    width={600}
                    height={200}
                  />
                </MotionDiv>
              );
            })}
          </div>
        </div>
      </section>
      <section className="my-10  sm:my-20  border-b border-t border-gray-400 py-16">
        <div className="container-x">
          <p className="text-md font-semibold mb-10">The Result</p>
          <div className="grid md:grid-cols-2">
            <MotionDiv
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-[500px]"
            >
              <h2 className="text-4xl sm:text-5xl uppercase">
                We successfully completed the project
              </h2>
            </MotionDiv>
            <MotionDiv
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-xl font-medium">{project.result}</p>
            </MotionDiv>
          </div>
        </div>
      </section>

      <section className="overflow-x-hidden my-10 sm:my-16">
        <div className="container-x">
          <p className="text-md font-semibold mb-10">Similar Projects</p>
          <div className="grid grid-cols-2 gap-10">
            {similarProjects.map((elm, i) => {
              return (
                <MotionDiv
                  key={i}
                  initial={{ x: -40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="overflow-hidden relative w-full aspect-[8/6] group/project"
                >
                  <Image
                    className="-z-10 object-cover object-center"
                    src={elm.thumbnail}
                    alt=""
                    fill
                  />
                  <div className="w-full py-6 bg-black transition duration-300 ease-in-out absolute bottom-0 translate-y-full group-hover/project:translate-y-0">
                    <p className="mb-4">{elm.subTitle}</p>
                    <Button
                      href={`/projects/${elm.slug}`}
                      title="View Project"
                    />
                  </div>
                </MotionDiv>
              );
            })}
          </div>
        </div>
      </section>
      <section className="my-10  sm:my-20  border-b border-t border-gray-400 py-16">
        <MotionDiv
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="container-x flex flex-col items-center justify-center gap-10"
        >
          <h2 className="text-6xl md:text-8xl capitalize max-w-[700px] text-center">
            Want to start a project?
          </h2>
          <Button href="/contact" title="Let's Talk" />
        </MotionDiv>
      </section>
    </PageLayout>
  );
};

export default SingleProject;
