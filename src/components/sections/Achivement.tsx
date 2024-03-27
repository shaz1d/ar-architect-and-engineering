import SectionHeader from "../ui/SectionHeader";

const Achivement = () => {
  return (
    <section className="overflow-x-hidden my-10 sm:my-20">
      <div className="container-x">
        <SectionHeader letter="A" title="About Us" />
        <div className="grid md:grid-cols-3 gap-10 mt-10">
          <h2 className="text-4xl sm:text-5xl uppercase">
            We believe in quality
          </h2>
          <div className="md:col-span-2 grid md:grid-cols-2 gap-10">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              ducimus ea dolorum impedit voluptatum! Ut, explicabo quam! Veniam
              blanditiis quasi possimus consequuntur pariatur iusto repudiandae
              numquam inventore temporibus quos maxime ullam rerum, placeat quis
              aut distinctio quam quod enim sed hic vel. Aperiam iusto animi et
              asperiores aut laborum harum? Ipsam quasi facere blanditiis
              deleniti? Non quibusdam voluptatum quis consequatur!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
              necessitatibus optio enim earum tempore soluta quas illo? Atque
              autem enim sunt unde. Id in ad exercitationem! Expedita sint nisi
              libero.
            </p>
          </div>
        </div>
        <ul className="flex justify-between gap-2 sm:gap-0 flex-wrap mt-10 ">
          <li className="w-max text-center">
            <h3 className="text-4xl sm:text-5xl">20K+</h3>
            <p className="mt-2 text-gray-400">Awwards</p>
          </li>
          <li className="w-max text-center">
            <h3 className="text-4xl sm:text-5xl">20K+</h3>
            <p className="mt-2 text-gray-400">Awwards</p>
          </li>
          <li className="w-max text-center">
            <h3 className="text-4xl sm:text-5xl">20K+</h3>
            <p className="mt-2 text-gray-400">Awwards</p>
          </li>
          <li className="w-max text-center">
            <h3 className="text-4xl sm:text-5xl">20K+</h3>
            <p className="mt-2 text-gray-400">Awwards</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Achivement;
