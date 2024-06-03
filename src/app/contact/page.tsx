import { MotionDiv } from "@/components/MotionDiv";
import PageLayout from "@/components/layout/PageLayout";
import ContactForm from "@/components/ui/ContactForm";
import Link from "next/link";

const Contact = () => {
  return (
    <PageLayout>
      <section className="my-10 sm:my-20 ">
        <div className="container-x">
          <div className="grid md:grid-cols-2">
            <MotionDiv
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl uppercase">Contact Us</h2>
              <div className="mt-20">
                <div className="flex flex-col gap-10">
                  <div className="flex gap-3">
                    <i className="bx bxs-envelope bx-sm mt-1"></i>
                    <div>
                      <p className="text-xl font-semibold mb-1">Email</p>
                      <Link href={"mailto:"}>ar.architect@gmail.com</Link>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <i className="bx bxs-phone bx-sm mt-1"></i>
                    <div>
                      <p className="text-xl font-semibold mb-1">Phone Number</p>
                      <Link href={"tel:"}>+12 345 5678</Link>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <i className="bx bxs-map bx-sm mt-1"></i>
                    <div>
                      <p className="text-xl font-semibold mb-1">Address</p>
                      <Link href={"mailto:"}>Noapara Pouroshova, Khulna</Link>
                    </div>
                  </div>
                </div>
              </div>
            </MotionDiv>
            <MotionDiv
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl uppercase">
                Send Us A Message
              </h2>

              <ContactForm></ContactForm>
            </MotionDiv>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
