import Button from "@/components/ui/Button";
import Image from "next/image";
import React from "react";

type Props = {};

const Projects = (props: Props) => {
  return (
    <>
      <section className="my-10 sm:my-20 ">
        <div className="container-x">
          <h1 className="text-4xl md:text-6xl">Projects</h1>
          <div className="grid md:grid-cols-3 gap-10 mt-10">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
              (item, i) => {
                return (
                  <div
                    key={i}
                    className="overflow-hidden relative w-full aspect-[8/6] group/project"
                  >
                    <Image
                      className="-z-10 object-cover object-center"
                      src={"/section/house.jpg"}
                      alt=""
                      fill
                    />
                    <div className="w-full py-6 bg-black transition duration-300 ease-in-out absolute bottom-0 translate-y-full group-hover/project:translate-y-0">
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Eveniet quo corrupti illum minus eligendi
                        consequuntur doloribus impedit iusto nobis porro. Vitae,
                        illum placeat! Cumque natus dolorem dolores ratione
                        fugit. Molestias.
                      </p>
                      <Button href={`/projects/${item}`} title="View Project" />
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
