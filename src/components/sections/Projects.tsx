import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import { getProjects } from "@/lib/data";
import { MotionDiv } from "../MotionDiv";

const Projects = async () => {
  const projects = await getProjects();
  const filteredProjects = projects.slice(0, 2);
  return (
    <section className="overflow-x-hidden my-10 sm:my-20">
      <div className="container-x">
        <SectionHeader title="Our Projects" letter="B" />
        <div className="grid grid-cols-2 mt-8 gap-10">
          {filteredProjects.map((item, i) => {
            return (
              <MotionDiv
                initial={{ y: 40, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: 0.1 * i },
                }}
                key={item._id}
                className="overflow-hidden relative w-full aspect-[8/6] group/project"
              >
                <Image
                  className="-z-10 object-cover object-center"
                  src={item.thumbnail}
                  alt=""
                  fill
                />
                <div className="w-full py-6 bg-black transition duration-300 ease-in-out absolute bottom-0 translate-y-full group-hover/project:translate-y-0">
                  <p className="mb-4">{item.overview}</p>
                  <Button
                    href={`/projects/${item.slug}`}
                    title="View Project"
                  />
                </div>
              </MotionDiv>
            );
          })}
        </div>
        <div className="mt-8 flex flex-col items-center justify-center">
          <Button title="View All Projects" href="/projects" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
