"use client";
import { motion } from "framer-motion";
type Props = {
  letter: string;
  title: string;
};

const SectionHeader = ({ letter, title }: Props) => {
  return (
    <div className="relative">
      <motion.h5
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="border border-white h-10 w-10 flex items-center justify-center rounded-full text-2xl pb-1 after:bg-white after:rounded-xl after:h-[1px] after:w-screen after:absolute after:left-14"
      >
        {letter}
      </motion.h5>
      <motion.p
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="pl-14 -mt-3"
      >
        {title}
      </motion.p>
    </div>
  );
};

export default SectionHeader;
