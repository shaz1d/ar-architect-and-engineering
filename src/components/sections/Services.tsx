import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";

const Services = () => {
  return (
    <section className="overflow-x-hidden my-10 sm:my-20">
      <div className="container-x">
        <SectionHeader title="Our Services" letter="C" />
        <ul className="mt-10 sm:columns-2 list-disc list-outside pl-10 text-2xl md:text-4xl leading-tight font-medium">
          <li className="mb-5">Architecture</li>
          <li className="mb-5">Planning</li>
          <li className="mb-5">Interior Design</li>
          <li className="mb-5">Landscape Architecture</li>
          <li className="mb-5">Visualization</li>
          <li className="mb-5">Presentation</li>
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-7 gap-12 mt-12">
          <div className="relative h-full min-h-[60vw] md:min-h-0 w-full md:col-span-3">
            <Image
              className="object-cover object-center block"
              src={"/section/house.jpg"}
              fill
              alt="Interior Design of a home"
            />
          </div>

          <div className="md:col-span-4">
            <h2 className="text-4xl">Why Choose Us</h2>
            <div className="grid sm:grid-cols-2 gap-10 mt-10">
              <div>
                <h4 className="text-xl mb-3">Feature</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis dolor pariatur labore hic aspernatur enim molestias
                  unde nesciunt saepe quasi?
                </p>
              </div>
              <div>
                <h4 className="text-xl mb-3">Feature</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis dolor pariatur labore hic aspernatur enim molestias
                  unde nesciunt saepe quasi?
                </p>
              </div>
              <div>
                <h4 className="text-xl mb-3">Feature</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis dolor pariatur labore hic aspernatur enim molestias
                  unde nesciunt saepe quasi?
                </p>
              </div>
              <div>
                <h4 className="text-xl mb-3">Feature</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis dolor pariatur labore hic aspernatur enim molestias
                  unde nesciunt saepe quasi?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
