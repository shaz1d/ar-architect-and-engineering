"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

const AccordionItem = ({ title, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b pb-5 pt-3 border-white w-full">
      <div className="flex gap-5 justify-between items-center">
        <h3 className="text-xl font-light">{title}</h3>
        <i
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "bx  text-2xl shrink-0 transition duration-200 ease-out",
            isOpen ? "bx-minus" : "bx-plus"
          )}
        ></i>
      </div>
      <div
        className={cn(
          "transition duration-300 ease-in-out pt-5",
          isOpen
            ? "relative visible opacity-100 translate-y-0 "
            : "absolute opacity-0 invisible -translate-y-1/2"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default AccordionItem;
