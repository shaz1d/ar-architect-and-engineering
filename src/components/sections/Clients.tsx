import React from "react";
import Button from "../ui/Button";
import Image from "next/image";

const Clients = () => {
  return (
    <section className="overflow-x-hidden my-10 sm:my-20">
      <div className="container-x">
        <div className="flex justify-between gap-5 items-center">
          <h2 className="text-4xl sm:text-5xl uppercase">Our Happy Clients</h2>
          <Button classname=" shrink-0" title="View Reviews" href="/" />
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div className="grid grid-cols-6 gap-5">
            <div className="col-span-3 sm:col-span-2  relative ">
              <Image src={"/section/house.jpg"} fill alt="house" />
            </div>
            <div className="col-span-3 sm:col-span-4 py-10">
              <p className=" text-gray-300">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquam blanditiis harum culpa libero sit commodi cum enim
                recusandae minus sapiente.
              </p>
              <p className=" text-lg font-semibold mt-3 ">Thomas Shelby</p>
              <p className=" text-gray-300">Architect</p>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-5">
            <div className="col-span-3 sm:col-span-2  relative ">
              <Image src={"/section/house.jpg"} fill alt="house" />
            </div>
            <div className="col-span-3 sm:col-span-4 py-10">
              <p className=" text-gray-300">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquam blanditiis harum culpa libero sit commodi cum enim
                recusandae minus sapiente.
              </p>
              <p className=" text-lg font-semibold mt-3 ">Thomas Shelby</p>
              <p className=" text-gray-300">Architect</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
