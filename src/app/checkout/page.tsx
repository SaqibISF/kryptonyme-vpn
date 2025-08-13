import { Metadata } from "next";
import React from "react";
import Section from "@/components/Section";
import { notFound } from "next/navigation";
import OrderSummaryCard from "@/components/OrderSummaryCard";
import CheckoutForm from "@/components/CheckoutForm";
import { Card, CardBody } from "@heroui/card";

export const metadata: Metadata = { title: "Checkout" };

const CheckoutPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ planId: string }>;
}) => {
  const { planId } = await searchParams;

  if (!planId) {
    notFound();
  }

  return (
    <Section
      isHeroSection
      bgDefault
      heading="Complete Your Order"
      description="Secure your digital privacy with Kryptonyme VPN"
    >
      <div className="w-full grid grid-cols-3 items-start gap-4">
        <Card className="p-6 col-span-2">
          <CardBody>
            <CheckoutForm planId={+planId} />
          </CardBody>
        </Card>
        <OrderSummaryCard planId={+planId} />
      </div>
    </Section>
  );
};

export default CheckoutPage;
