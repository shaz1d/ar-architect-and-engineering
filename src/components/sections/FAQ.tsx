import { MotionDiv } from "../MotionDiv";
import AccordionItem from "../ui/AccordionItem";
import SectionHeader from "../ui/SectionHeader";

const FAQ = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a wide range of services including site analysis, feasibility studies, architectural design, project management, and sustainable design solutions.",
    },
    {
      question: "How do you ensure the sustainability of your projects?",
      answer:
        "We integrate eco-friendly materials, energy-efficient systems, and sustainable practices into our designs to minimize environmental impact and promote long-term efficiency.",
    },
    {
      question: "What is your design process like?",
      answer:
        "Our design process involves an initial consultation, site analysis, concept development, detailed design, and project management. We collaborate closely with our clients at every stage to ensure their vision is realized.",
    },
    {
      question: "Do you handle residential and commercial projects?",
      answer:
        "Yes, we have extensive experience in both residential and commercial projects. Our team is equipped to handle a variety of project types and scales.",
    },
    {
      question: "How can I get started on my project?",
      answer:
        "You can start by contacting us via phone or email to schedule an initial consultation. We’ll discuss your ideas, requirements, and provide you with a tailored plan to move forward.",
    },
  ];
  return (
    <section className="overflow-hidden my-10 sm:my-20">
      <div className="container-x">
        <SectionHeader title="Frequently Asked Questions" letter="D" />
        <div className="mt-10">
          {faqs.map((item, i) => {
            return (
              <MotionDiv
                initial={{ y: 40, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: 0.1 * i },
                }}
                viewport={{ once: true }}
                key={i}
              >
                <AccordionItem key={i} title={item.question}>
                  <p>{item.answer}</p>
                </AccordionItem>
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
