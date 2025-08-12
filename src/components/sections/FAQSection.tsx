"use client";

import React, { FC, useState } from "react";
import Section, { SectionProps } from "../Section";
import {
  Accordion,
  AccordionItem,
  addToast,
  Alert,
  Button,
  Chip,
} from "@heroui/react";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import { emailSchema, messageSchema, subjectSchema } from "@/lib/zod-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import { SEND_FEEDBACK_ROUTE } from "@/lib/constants";

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

  const feedbackSchema = z.object({
    subject: subjectSchema,
    email: emailSchema,
    message: messageSchema,
  });

  const [successMessage, setSuccessMessage] = useState<string>("");

  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
    setError,
    reset,
  } = useForm<z.infer<typeof feedbackSchema>>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: { subject: "", email: "", message: "" },
  });

  const submit: SubmitHandler<z.infer<typeof feedbackSchema>> = async (
    values
  ) => {
    try {
      const res = await axios
        .post<{ status: boolean; message: string }>(
          SEND_FEEDBACK_ROUTE,
          values,
          { headers: { Accept: "application/json" } }
        )
        .then((res) => res.data);

      if (res.status) {
        setSuccessMessage(res.message);
        addToast({ color: "success", description: res.message });
        reset();
      } else {
        setError("root", { type: "manual", message: res.message });
        addToast({ color: "danger", description: res.message });
      }
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError
          ? error.response
            ? error.response.data.message
            : error.message
          : error instanceof Error
          ? error.message
          : "Failed to send feedback";
      setError("root", { type: "manual", message: errorMessage });
      addToast({ color: "danger", description: errorMessage });
    }
  };

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

        <form
          onSubmit={handleSubmit(submit)}
          className="lg:col-span-1 w-full flex flex-col gap-4 order-1 lg:order-2"
        >
          <Chip color="primary" size="lg" className="lg:self-start self-center">
            FAQs
          </Chip>

          <Input
            isRequired
            label="Subject"
            placeholder="Enter your subject"
            type="text"
            errorMessage={errors.subject?.message}
            {...register("subject")}
          />

          <Input
            isRequired
            label="Email"
            placeholder="Enter your email address"
            type="email"
            errorMessage={errors.email?.message}
            {...register("email")}
          />

          <Textarea
            isRequired
            label="Question"
            placeholder="Type here your question"
            errorMessage={errors.message?.message}
            {...register("message")}
          />

          {errors.root && (
            <Alert
              color="danger"
              title={errors.root.message}
              className="text-start"
            />
          )}

          {successMessage && (
            <Alert
              color="success"
              title={successMessage}
              className="text-start"
            />
          )}

          <Button
            type="submit"
            isLoading={isSubmitting}
            size="lg"
            color="primary"
            className="self-end"
          >
            Ask Us A Question
          </Button>
        </form>
      </div>
    </Section>
  );
};

export default FAQSection;
