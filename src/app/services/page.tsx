import { MotionDiv } from "@/components/MotionDiv";
import PageLayout from "@/components/layout/PageLayout";

const Services = () => {
  const services = [
    {
      name: "Architecture",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, harum! Assumenda, odio?",
    },
    {
      name: "Planning",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, harum! Assumenda, odio?",
    },
    {
      name: "Interior Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, harum! Assumenda, odio?",
    },
    {
      name: "Landscape Architecture",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, harum! Assumenda, odio?",
    },
    {
      name: "Visualization",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, harum! Assumenda, odio?",
    },
    {
      name: "Presentation",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, harum! Assumenda, odio?",
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
            <h1 className="text-3xl sm:text-6xl max-w-xl mt-3 uppercase">
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
                    <p className="text-sm mt-2">{item.desc}</p>
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
