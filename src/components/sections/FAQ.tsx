import AccordionItem from "../ui/AccordionItem";
import SectionHeader from "../ui/SectionHeader";

const FAQ = () => {
  return (
    <section className="overflow-x-hidden my-10 sm:my-20">
      <div className="container-x">
        <SectionHeader title="Frequently Asked Questions" letter="D" />
        <div className="mt-10">
          <AccordionItem
            title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              magnam repellat?"
          >
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              magnam repellat. Corporis illum nam assumenda beatae, ipsum
              maiores, facilis odit aspernatur repellat rem ex cum optio, fugit
              fuga explicabo eligendi.
            </p>
          </AccordionItem>
          <AccordionItem
            title=" Corporis illum nam assumenda beatae, ipsum
            maiores?"
          >
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              magnam repellat. Corporis illum nam assumenda beatae, ipsum
              maiores, facilis odit aspernatur repellat rem ex cum optio, fugit
              fuga explicabo eligendi.
            </p>
          </AccordionItem>
          <AccordionItem
            title="Facilis odit aspernatur repellat rem ex cum optio, fugit
              fuga explicabo eligendi?"
          >
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              magnam repellat. Corporis illum nam assumenda beatae, ipsum
              maiores, facilis odit aspernatur repellat rem ex cum optio, fugit
              fuga explicabo eligendi.
            </p>
          </AccordionItem>
          <AccordionItem
            title="Aspernatur repellat rem ex cum optio, fugit
              fuga explicabo consectetur adipisicing elit. Dolore,
              magnam repellat?"
          >
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              magnam repellat. Corporis illum nam assumenda beatae, ipsum
              maiores, facilis odit aspernatur repellat rem ex cum optio, fugit
              fuga explicabo eligendi.
            </p>
          </AccordionItem>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
