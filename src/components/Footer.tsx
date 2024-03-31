import Link from "next/link";
import Button from "./ui/Button";
import { docsConfig } from "@/config/docs";

const Footer = () => {
  const { contactInfo } = docsConfig;
  return (
    <footer className="overflow-x-hidden my-10 sm:my-20">
      <div className="container-x">
        <div className="grid sm:grid-cols-2 gap-10">
          <div>
            <h2 className="text-4xl sm:text-5xl uppercase mb-6">
              Ready to get started?
            </h2>
            <Button title="Contact Us" href="/" />
          </div>
          <div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Nesciunt, molestias.
            </p>
            <p className="mt-3 mb-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
              facilis tempora illo voluptate omnis. Tenetur tempore nam facere
              nisi. Repellat laudantium nostrum dolorum! Voluptates ex
              recusandae beatae cumque, non odit?
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
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/">Home</Link>
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
