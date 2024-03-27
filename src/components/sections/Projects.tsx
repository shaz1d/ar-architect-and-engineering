import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";

const Projects = () => {
  return (
    <section className="overflow-x-hidden my-10 sm:my-20">
      <div className="container-x">
        <SectionHeader title="Our Projects" letter="B" />
        <div className="grid grid-cols-2 mt-8 gap-10">
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
                Eveniet quo corrupti illum minus eligendi consequuntur doloribus
                impedit iusto nobis porro. Vitae, illum placeat! Cumque natus
                dolorem dolores ratione fugit. Molestias.
              </p>
              <Button href="/" title="View Project" />
            </div>
          </div>
          <div className="overflow-hidden relative w-full aspect-[8/6]">
            <Image
              className="-z-10 object-cover object-center"
              src={"/section/house.jpg"}
              alt=""
              fill
            />
            <div className="w-full py-6 bg-black absolute bottom-0 ">
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eveniet quo corrupti illum minus eligendi consequuntur doloribus
                impedit iusto nobis porro. Vitae, illum placeat! Cumque natus
                dolorem dolores ratione fugit. Molestias.
              </p>
              <Button href="/" title="View Project" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
