import { MotionDiv } from "../MotionDiv";
import AccordionItem from "../ui/AccordionItem";
import SectionHeader from "../ui/SectionHeader";

const FAQ = () => {
  const faqs = [
    {
      question: "Corporis illum nam assumenda beatae, ipsummaiores?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,magnam repellat. Corporis illum nam assumenda beatae, ipsummaiores, facilis odit aspernatur repellat rem ex cum optio, fugitfuga explicabo eligendi.",
    },
    {
      question: "Corporis illum nam assumenda beatae, ipsummaiores?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,magnam repellat. Corporis illum nam assumenda beatae, ipsummaiores, facilis odit aspernatur repellat rem ex cum optio, fugitfuga explicabo eligendi.",
    },
    {
      question: "Corporis illum nam assumenda beatae, ipsummaiores?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,magnam repellat. Corporis illum nam assumenda beatae, ipsummaiores, facilis odit aspernatur repellat rem ex cum optio, fugitfuga explicabo eligendi.",
    },
    {
      question: "Corporis illum nam assumenda beatae, ipsummaiores?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,magnam repellat. Corporis illum nam assumenda beatae, ipsummaiores, facilis odit aspernatur repellat rem ex cum optio, fugitfuga explicabo eligendi.",
    },
    {
      question: "Corporis illum nam assumenda beatae, ipsummaiores?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,magnam repellat. Corporis illum nam assumenda beatae, ipsummaiores, facilis odit aspernatur repellat rem ex cum optio, fugitfuga explicabo eligendi.",
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
