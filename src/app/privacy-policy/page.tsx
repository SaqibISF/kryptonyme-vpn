import { Metadata } from "next";
import React, { FC } from "react";
import LegalNotes from "@/components/LegalNotes";

export const metadata: Metadata = { title: "Privacy Policy" };

const PrivacyPolicyPage: FC = () => (
  <LegalNotes key="privacy-policy" heading="Privacy Policy" />
);

export default PrivacyPolicyPage;
