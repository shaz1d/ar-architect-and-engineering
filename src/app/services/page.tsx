import { MotionDiv } from "@/components/MotionDiv";
import PageLayout from "@/components/layout/PageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "An architecture & engineering company",
};
const Services = () => {
  const services = [
    {
      name: "Architecture",
      desc: "We specialize in innovative, sustainable architectural design to create functional and aesthetically pleasing spaces that exceed client expectations.",
    },
    {
      name: "Planning",
      desc: "Our planning services include thorough site analyses and strategic feasibility studies to ensure successful project execution and viability.",
    },
    {
      name: "Interior Design",
      desc: "We transform spaces with creative, functional designs that enhance aesthetics and usability, tailored to client lifestyles or brand identities.",
    },
    {
      name: "Landscape Architecture",
      desc: "Our expertise integrates natural elements with built environments, creating sustainable and visually appealing outdoor spaces.",
    },
    {
      name: "Visualization",
      desc: "Using advanced techniques, we provide realistic visualizations and virtual tours to help clients visualize projects during the design process.",
    },
    {
      name: "Presentation",
      desc: "We communicate design concepts effectively through clear, compelling visuals and explanations to align and support project goals.",
    },
  ];
  return (
    <PageLayout>
      <section className="my-10 sm:my-20 ">
        <div className="container-x">
          <MotionDiv
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-lg">Services</p>
            <h1 className="text-3xl sm:text-6xl  mt-3 uppercase">
              Your One Stop Shop for your Project
            </h1>
          </MotionDiv>

          <ul className="mt-20 grid sm:grid-cols-2 md:grid-cols-3 gap-16 list-disc list-outside pl-8 text-2xl leading-tight font-medium">
            {services.map((item, i) => {
              return (
                <li key={i} className="hover:bg-slate-950 transition p-5">
                  <MotionDiv
                    initial={{ y: 40, opacity: 0 }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      transition: { delay: 0.1 * i },
                    }}
                    viewport={{ once: true }}
                  >
                    <p>{item.name}</p>
                    <p className="text-sm mt-2 leading-[180%]">{item.desc}</p>
                  </MotionDiv>
                </li>
              );
            })}
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
