import { FAQ_DATA } from "@/constants";
import { useState } from "react";
import { AccordionItem } from "./accordion-item";

const FAQ = () => {
  const [selected, setSelected] = useState<number | null>(0);

  return (
    <div id="faqs" className="py-8 bg-white">
      <h2 className="text-3xl font-semi-bold text-center">
        Frequently Asked Questions
      </h2>
      <ul className="mt-8 border-2 w-2/3 mx-auto rounded-md">
        {FAQ_DATA.map((faq, index) => (
          <AccordionItem
            key={index}
            value={index}
            question={faq.question}
            answer={faq.answer}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
