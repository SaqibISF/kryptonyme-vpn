"use client";

import React, { FC } from "react";
import Section from "./Section";
import { Alert, Spinner } from "@heroui/react";
import { useLegalNotes } from "@/hooks/useLegalNotes";

const LegalNotes: FC<{
  key: "privacy-policy" | "term-of-services";
  heading: string;
}> = ({ key, heading }) => {
  const {
    isLegalNotesLoading,
    privacyPolicy,
    termsAndConditions,
    errorMessage,
  } = useLegalNotes();
  return (
    <Section isHeroSection className="flex-col justify-start gap-4 py-10">
      <h2 className="text-4xl sm:text-5xl font-bold">{heading}</h2>
      {isLegalNotesLoading && (
        <span className="mt-4 flex items-center justify-center">
          <Spinner
            classNames={{ label: "text-foreground mt-4" }}
            label="Loading..."
            variant="spinner"
          />
        </span>
      )}

      {errorMessage && (
        <Alert
          color="danger"
          title={errorMessage}
          classNames={{ base: "w-full max-w-xl flex-grow-0" }}
        />
      )}

      <article
        className="w-full max-w-7xl prose prose-neutral dark:prose-invert"
        dangerouslySetInnerHTML={{
          __html: key === "privacy-policy" ? privacyPolicy : termsAndConditions,
        }}
      ></article>
    </Section>
  );
};

export default LegalNotes;
