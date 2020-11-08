import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

export default function Faq(props) {
  const { page } = props;
  //  console.log("Faq ======> ", page);
  return (
    <section className="compare-area ptb-60">
      <div className="container">
        <div className="section-title">
          <h2>
            <span className="dot" /> {page.title}
          </h2>
        </div>
        <p>{page.description}</p>
        <div
          className="products-details-tab-content"
          dangerouslySetInnerHTML={{
            __html: page.productReview,
          }}
        />
        <div className="faq-accordion">
          <ul className="accordion">
            <Accordion>
              {page &&
                page.faq &&
                page.faq.map(item => (
                  <AccordionItem key={item.id}>
                    <AccordionItemHeading>
                      <AccordionItemButton>{item.title}</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>{item.description}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                ))}
            </Accordion>
          </ul>
        </div>
      </div>
    </section>
  );
}
