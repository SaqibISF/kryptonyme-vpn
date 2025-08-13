import { Metadata } from "next";
import React, { FC } from "react";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";

export const metadata: Metadata = { title: "Pricing" };

const PricingPage: FC = () => (
  <>
    <PricingSection bgDefault />
    <FAQSection />
  </>
);

export default PricingPage;
