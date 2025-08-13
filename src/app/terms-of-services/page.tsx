import { Metadata } from "next";
import React, { FC } from "react";
import LegalNotes from "@/components/LegalNotes";

export const metadata: Metadata = { title: "Term of Conditions" };

const TermsOfServicesPage: FC = () => (
  <LegalNotes key="term-of-services" heading="Terms of Services" />
);

export default TermsOfServicesPage;
