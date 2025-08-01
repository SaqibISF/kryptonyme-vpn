"use client";

import React, { FC } from "react";
import Section, { SectionProps } from "../Section";
import { Accordion, AccordionItem, Button } from "@heroui/react";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";

const FAQSection: FC<SectionProps> = ({ ...props }) => {
  const faqs = [
    {
      question: "Is it really free for 30 days?",
      answer: "Yes — no charge until day 31. Cancel anytime.",
    },
    {
      question: "What happens after the trial ends?",
      answer:
        "You’ll be automatically billed $11.99/month — no contracts, cancel whenever.",
    },
    {
      question: "Do you log my data or activity?",
      answer: "Never. We operate with a 100% no-logs policy.",
    },
    {
      question: "Will it slow my internet?",
      answer: "No. Our global server architecture is optimized for speed.",
    },
    {
      question: "Can I use it on all my devices?",
      answer: "Yes — one account covers unlimited devices.",
    },
  ];

  return (
    <Section {...props}>
      <div className="w-full grid lg:grid-cols-3 lg:items-start gap-8">
        <Accordion
          variant="splitted"
          className="lg:col-span-2 w-full order-2 lg:order-1"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              aria-label={"FAQ " + (index + 1)}
              title={faq.question}
              className="text-start"
            >
              {faq.answer}
            </AccordionItem>
          ))}
        </Accordion>

        <form className="lg:col-span-1 w-full flex flex-col gap-4 order-1 lg:order-2">
          <span className="px-4 py-2 bg-primary-100/70 text-primary rounded-full lg:self-start self-center">
            FAQs
          </span>
          <Input label="Name" placeholder="Enter your name" type="text" />
          <Input
            label="Email"
            placeholder="Enter your email address"
            type="email"
          />
          <Textarea label="Question" placeholder="Type here your question" />
          <Button size="lg" color="primary" className="self-end">
            Ask Us A Question
          </Button>
        </form>
      </div>
    </Section>
  );
};

export default FAQSection;
