import Link from "next/link";
import Button from "./ui/Button";
import { docsConfig } from "@/config/docs";

const Footer = () => {
  const { contactInfo } = docsConfig;
  return (
    <footer className="overflow-x-hidden pt-20 pb-10 bg-slate-950">
      <div className="container-x">
        <div className="grid sm:grid-cols-2 gap-10">
          <div>
            <h2 className="text-4xl sm:text-5xl uppercase mb-6">
              Ready to get started?
            </h2>
            <Button title="Contact Us" href="/" />
          </div>
          <div>
            <p className="mb-8">
              AR-Architect & Engineering is your trusted partner in innovative
              and sustainable architectural design and planning. <br />
              <br /> We are committed to delivering exceptional service and
              creating spaces that inspire. Contact us today to start your next
              project and experience the difference of working with a dedicated
              team of professionals.
            </p>
            <div className="grid sm:grid-cols-2 gap-10">
              <div>
                <p className="text-lg font-bold mb-8">Find Us</p>
                <div className="flex flex-col gap-5">
                  {contactInfo.map((contact, index) => (
                    <div key={index}>
                      <p className="font-medium">{contact.name}</p>
                      <p className="text-gray-400 text-sm">{contact.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-lg font-bold mb-8">Useful Links</p>
                <ul className="flex flex-col gap-3">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/">About</Link>
                  </li>
                  <li>
                    <Link href="/">Services</Link>
                  </li>
                  <li>
                    <Link href="/">Projects</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
