"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import { useState } from "react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      if (menuOpen) setMenuOpen(false);
    }
  };

  return (
    <header className="z-10">
      <nav className="container-x grid grid-cols-2 md:grid-cols-3 gap-5 items-center">
        <Link className="my-3 md:justify-self-start" href={"/"}>
          <Image
            priority
            src={"/logo/ar-architect-and-engineering.svg"}
            alt=""
            height={32}
            width={120}
          />
        </Link>
        <ul className="hidden md:flex gap-6 justify-self-center">
          <li>
            <Link
              className={cn(
                pathname === "/about" ? "text-white" : "text-gray-400"
              )}
              href={"/about"}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={cn(
                pathname === "/services" ? "text-white" : "text-gray-400"
              )}
              href={"/services"}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className={cn(
                pathname === "/projects" ? "text-white" : "text-gray-400"
              )}
              href={"/projects"}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className={cn(
                pathname === "/contact" ? "text-white" : "text-gray-400"
              )}
              href={"/contact"}
            >
              Contact
            </Link>
          </li>
        </ul>

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
            "fixed  top-0 right-0 min-h-screen  w-full max-w-80 md:max-w-sm py-12 px-8 transition duration-500 ease-in-out  bg-gray-900",
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

          <Link href={"/"}>
            <Image
              src={"/logo/ar-architect-and-engineering.svg"}
              height={100}
              width={150}
              alt="AR-architet-and-engineering logo"
            />
          </Link>
          <div className="hidden md:block border-b border-slate-500 pb-10 mb-10">
            <p className="mt-16 leading-[180%] mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              asperiores pariatur.
            </p>
            <p className="leading-[180%]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
              unde nobis, recusandae ullam ipsa repellendus optio. Deleniti
              repellendus suscipit iure?
            </p>
          </div>

          <ul className="text-xl flex flex-col md:hidden gap-8 mt-20">
            <li>
              <Link
                className={cn(
                  pathname === "/about" ? "text-white" : "text-gray-400"
                )}
                href={"/about"}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={cn(
                  pathname === "/services" ? "text-white" : "text-gray-400"
                )}
                href={"/services"}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className={cn(
                  pathname === "/projects" ? "text-white" : "text-gray-400"
                )}
                href={"/projects"}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className={cn(
                  pathname === "/contact" ? "text-white" : "text-gray-400"
                )}
                href={"/contact"}
              >
                Contact
              </Link>
            </li>
          </ul>

          <p className="font-medium text-xl capitalize">
            Connect to our social
          </p>
          <div className="flex gap-8 flex-wrap text-2xl mt-5">
            <a href="https://facebook.com">
              <i className="bx bxl-facebook-circle"></i>
            </a>
            <a href="https://facebook.com">
              <i className='bx bxl-twitter'></i>
            </a>
            <a href="https://facebook.com">
              <i className="bx bxl-instagram-alt"></i>
            </a>
            <a href="https://facebook.com">
              <i className="bx bxl-linkedin-square"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
