"use client";

import React, { FC, Suspense } from "react";
import Section from "@/components/Section";
import { usePlan } from "@/hooks/usePlans";
import { notFound, useSearchParams } from "next/navigation";
import OrderSummaryCard from "@/components/OrderSummaryCard";
import CheckoutForm from "@/components/CheckoutForm";
import { Card, CardBody } from "@heroui/card";

const CheckoutPage: FC = () => {
  const searchParams = useSearchParams();
  const planId = searchParams.get("planId");

  if (!planId) {
    notFound();
  }

  const { isPlansLoading, plan } = usePlan(+planId);

  if (!isPlansLoading && !plan) {
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
            <CheckoutForm priceId={plan!.paddle_price_id} />
          </CardBody>
        </Card>
        <OrderSummaryCard isPlansLoading={isPlansLoading} plan={plan!} />
      </div>
    </Section>
  );
};

const Page: FC = () => (
  <Suspense>
    <CheckoutPage />
  </Suspense>
);

export default Page;
