"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      if (menuOpen) setMenuOpen(false);
    }
  };

  return (
    <header className="z-10">
      <nav className="container-x grid grid-cols-2 md:grid-cols-3 gap-5 items-center">
        <ul className="hidden md:flex gap-6 justify-self-start">
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/services"}>Services</Link>
          </li>
          <li>
            <Link href={"/projects"}>Projects</Link>
          </li>
        </ul>
        <Link className="my-3 md:justify-self-center" href={"/"}>
          <Image
            priority
            src={"/logo/ar-architect-and-engineering.svg"}
            alt=""
            height={32}
            width={120}
          />
        </Link>
        <div className="flex gap-5 items-center justify-self-end">
          <Link href={"tel:+0123456789"}>+0123456789</Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 flex flex-col justify-center"
          >
            <span
              className={cn(
                "w-10 h-[2px] transition duration-400 ease-in-out bg-white block ",
                menuOpen ? " rotate-45 translate-y-[3px]" : "mb-2"
              )}
            ></span>
            <span
              className={cn(
                "w-10 h-[2px] transition duration-[400ms] ease-in-out bg-white block",
                menuOpen ? " -rotate-45 " : ""
              )}
            ></span>
          </button>
        </div>
      </nav>
      <div
        className={cn(
          "w-full min-h-screen bg-black/50 fixed inset-0 transition duration-500 ease-in-out",
          menuOpen ? "opacity-100" : " opacity-0 pointer-events-none"
        )}
        onClick={handleClose}
      >
        <div
          className={cn(
            "fixed flex top-0 right-0 min-h-screen w-full max-w-80 md:max-w-sm transition duration-500 ease-in-out  bg-gray-900",
            menuOpen ? "translate-x-0 delay-300" : "translate-x-full delay-0"
          )}
        >
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 flex flex-col justify-center absolute top-2 right-2"
          >
            <span
              className={cn(
                "w-10 h-[2px] transition duration-400 ease-in-out bg-white block ",
                menuOpen ? " rotate-45 translate-y-[3px]" : "mb-2"
              )}
            ></span>
            <span
              className={cn(
                "w-10 h-[2px] transition duration-[400ms] ease-in-out bg-white block",
                menuOpen ? " -rotate-45 " : ""
              )}
            ></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;