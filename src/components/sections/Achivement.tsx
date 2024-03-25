import SectionHeader from "../ui/SectionHeader";

const Achivement = () => {
  return (
    <section className="overflow-x-hidden py-20">
      <div className="container-x">
        <SectionHeader letter="A" title="About Us" />
        <div className="flex flex-wrap gap-14 mt-10">
          <h2 className="flex-[22%] text-5xl uppercase">
            We believe in quality
          </h2>
          <p className="flex-[35%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            ducimus ea dolorum impedit voluptatum! Ut, explicabo quam! Veniam
            blanditiis quasi possimus consequuntur pariatur iusto repudiandae
            numquam inventore temporibus quos maxime ullam rerum, placeat quis
            aut distinctio quam quod enim sed hic vel. Aperiam iusto animi et
            asperiores aut laborum harum? Ipsam quasi facere blanditiis
            deleniti? Non quibusdam voluptatum quis consequatur!
            <br />
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
            laborum minus deleniti. Molestias reprehenderit magnam aspernatur
            quibusdam deserunt dolore quae nemo eius eum libero, quas amet enim
            dolor dolores ea nesciunt consequuntur cumque exercitationem
            accusamus debitis animi! Non, iusto incidunt!
          </p>
          <p className="flex-[20%]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            necessitatibus optio enim earum tempore soluta quas illo? Atque
            autem enim sunt unde. Id in ad exercitationem! Expedita sint nisi
            libero.
          </p>
        </div>
        <ul className="flex justify-between mt-10">
          <li className=" w-max text-center">
            <h3 className="text-5xl">20K+</h3>
            <p className="mt-2 text-gray-400">Awwards</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Achivement;
