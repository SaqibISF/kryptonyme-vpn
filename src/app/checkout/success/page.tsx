import { Metadata } from "next";
import React from "react";
import VerifiedIcon from "@/icons/VerifiedIcon";
import Link from "next/link";
import { Button } from "@heroui/button";
import { Alert } from "@heroui/alert";
import Section from "@/components/Section";
import { DASHBOARD_PAGE_PATH } from "@/lib/pathnames";

export const metadata: Metadata = { title: "Payment Successful" };

const PaymentSuccessPage = () => (
  <Section isHeroSection className="gap-y-4">
    <VerifiedIcon className="size-48 text-green-500" />
    <h1 className="text-3xl font-semibold text-gray-900">Payment Successful</h1>
    <Alert
      color="success"
      title="Success! Your payment is complete, and you’re all set."
      className="w-fit flex-grow-0"
    />

    <Button
      as={Link}
      href={DASHBOARD_PAGE_PATH}
      color="primary"
      variant="shadow"
    >
      Go to Dashboard
    </Button>
  </Section>
);

export default PaymentSuccessPage;
