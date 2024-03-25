import React from "react";

type Props = {
  letter: string;
  title: string;
};

const SectionHeader = ({ letter, title }: Props) => {
  return (
    <div className="relative">
      <h5 className="border border-white h-10 w-10 flex items-center justify-center rounded-full text-2xl pb-1 after:bg-white after:rounded-xl after:h-[1px] after:w-screen after:absolute after:left-14">
        {letter}
      </h5>
      <p className="pl-14 -mt-3">{title}</p>
    </div>
  );
};

export default SectionHeader;
