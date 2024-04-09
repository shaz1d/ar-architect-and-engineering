import Image from "next/image";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <>
      <section className="my-10 sm:my-20 ">
        <div className="container-x">
          <p className="text-lg">About</p>
          <h1 className="text-3xl sm:text-6xl max-w-xl mt-3 uppercase ">
            Your One Stop Shop for your Project
          </h1>
        </div>
      </section>
      <section className="relative min-h-[400px] pt-40">
        <Image
          className="object-cover object-bottom -z-20"
          src={"/section/architects-with-planning.jpg"}
          fill
          alt=""
        />
        <div className="absolute inset-0 bg-black/20 -z-10"></div>
      </section>
      <section className="py-12">
        <div className="container-x">
          <p className="text-2xl text-center max-w-4xl capitalize mx-auto">
            Choosing AR Architect & Engineering means choosing a commited
            partner. Our Client-Centric appproach and personalized guidance set
            us apart. we&apos;re your allies on the path to your dream home
          </p>
        </div>
      </section>
      <section className="mb-10 sm:mb-20 py-16 bg-slate-950">
        <div className="container-x">
          <h2 className="text-5xl uppercase">
            Explore Our <br /> company playbook
          </h2>
          <div className="grid grid-cols-7 h-[450px] gap-6 mt-8 overflow-hidden">
            <Image
              className=" col-span-2 h-full object-cover "
              src={"/section/two-architect-with-laptop.jpg"}
              width={400}
              height={400}
              alt=""
            />
            <Image
              className=" col-span-5  h-full object-cover"
              src={"/section/architects-with-planning-and-laptop.jpg"}
              width={1000}
              height={400}
              alt=""
            />
          </div>
          <div className="grid sm:grid-cols-3 gap-10 mt-14">
            <div>
              <h4 className="text-4xl">01</h4>
              <p className="font-medium my-3 text-xl">Pioneer in Everything</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Officia sint fuga consequuntur blanditiis hic nam exercitationem
                odit eveniet cupiditate ex.
              </p>
            </div>
            <div>
              <h4 className="text-4xl">02</h4>
              <p className="font-medium my-3 text-xl">Pioneer in Everything</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Officia sint fuga consequuntur blanditiis hic nam exercitationem
                odit eveniet cupiditate ex.
              </p>
            </div>
            <div>
              <h4 className="text-4xl">03</h4>
              <p className="font-medium my-3 text-xl">Pioneer in Everything</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Officia sint fuga consequuntur blanditiis hic nam exercitationem
                odit eveniet cupiditate ex.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="my-10 sm:my-20">
        <div className="container-x grid grid-cols-2">
          <h2 className="text-6xl uppercase max-w-lg">
            What we want to achieve
          </h2>
          <div>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              quidem porro dolorem minus in ad quis vel. Magni dignissimos
              accusantium fuga laborum adipisci exercitationem assumenda odit
              inventore sequi in, ad explicabo earum deleniti reprehenderit
              ducimus eos perspiciatis quia voluptates! Aliquam delectus
              aspernatur quo cupiditate ea est culpa voluptates assumenda nemo
              distinctio, maiores eos quod laboriosam optio? Harum explicabo
              possimus sit veritatis debitis sequi velit inventore! Dicta optio
              magnam maiores iste, quasi cumque libero atque impedit. Nihil
              blanditiis quaerat veritatis ut!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, cum dolores, rerum doloremque pariatur, fugiat
              delectus architecto doloribus distinctio at veniam voluptatum
              natus. Odit animi excepturi minus dolore inventore aliquid iusto
              omnis obcaecati, error nisi quaerat molestias facilis asperiores
              ipsa!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
