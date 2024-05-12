import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  title: string;
  href: string;
  classname?: string;
};

const Button = ({ title, href, classname }: Props) => {
  return (
    <Link
      className={cn(
        classname,
        "px-8 py-3 border border-white font-semibold inline-block relative bg-transparent hover:bg-white hover:text-black transition duration-200 ease-in-out"
      )}
      href={href}
    >
      {title}
    </Link>
  );
};

export default Button;
