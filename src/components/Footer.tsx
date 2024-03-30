import Link from "next/link";
import Button from "./ui/Button";

const Footer = () => {
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
                <p className="text-lg font-bold mb-4">Find Us</p>
                <div>
                  <p>Email</p>
                  <p>info@ararchitect.com</p>
                </div>
              </div>
              <div>
                <p className="text-lg font-bold mb-4">Useful Links</p>
                <ul>
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
