"use client";

import React, { FC } from "react";
import Section, { SectionProps } from "../Section";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Skeleton,
} from "@heroui/react";
import { BoltIcon, StarIcon, TickIcon } from "@/icons";
import { usePlans } from "@/hooks/usePlans";
import Link from "next/link";
import {
  CHECKOUT_PAGE_PATH,
  LOGIN_PAGE_PATH,
  PRICING_PAGE_PATH,
} from "@/lib/pathnames";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

const PricingSection: FC<SectionProps> = ({ ...props }) => {
  const pathname = usePathname();
  const { isPlansLoading, plans } = usePlans();
  const { status: sessionStatus } = useSession();
  return (
    <Section
      heading="Choose Your VPN Plan"
      description="Flexible and affordable VPN plans designed to meet your needs. Pay securely with PayPal, Cryptocurrencies or in-app via Google Play and Apple App stores."
      {...props}
    >
      {!isPlansLoading && plans.length === 0 && (
        <Card>
          <CardBody>
            <p className="text-lg font-medium text-default-500">
              No plans available at the moment. Please check back later.
            </p>
          </CardBody>
        </Card>
      )}

      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {isPlansLoading &&
          Array.from({ length: 3 }).map((_, index) => (
            <Card
              className="p-8 w-full max-w-96 mx-auto relative animate-pulse"
              key={index}
            >
              <CardHeader className="p-0 flex-col items-start gap-2">
                <Skeleton className="h-6 w-32 rounded-md"></Skeleton>
                <div className="flex items-center mt-2 gap-2">
                  <Skeleton className="h-8 w-16 rounded-md"></Skeleton>
                  <Skeleton className="h-4 w-12 rounded-md"></Skeleton>
                </div>
              </CardHeader>
              <CardBody className="px-0 py-10 flex flex-col items-start gap-6">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="flex gap-2 items-center">
                    <Skeleton className="h-4 w-4 rounded-full"></Skeleton>
                    <Skeleton className="h-4 w-48 rounded-md"></Skeleton>
                  </div>
                ))}
              </CardBody>
              <CardFooter className="p-0">
                <Skeleton className="h-10 w-full rounded-md"></Skeleton>
              </CardFooter>
            </Card>
          ))}

        {plans.map((plan) => (
          <div
            key={plan.id}
            className={cn(
              "w-full max-w-96 mx-auto p-1 rounded-2xl",
              plan.is_best_deal ? "bg-primary" : ""
            )}
          >
            {plan.is_best_deal ? (
              <span className="text-white flex items-center justify-center gap-2 py-2">
                <StarIcon /> Best Deals
              </span>
            ) : null}

            <Card
              className={cn(
                "p-6",
                plan.is_best_deal ? "h-[calc(100%-2.5rem)]" : ""
              )}
            >
              <CardHeader className="p-0 flex-col items-start gap-4">
                <div className="w-full flex gap-4 items-center">
                  <Button
                    isIconOnly
                    variant="shadow"
                    disabled
                    className="bg-white"
                  >
                    <BoltIcon className="text-primary" />
                  </Button>
                  <p className="flex-1 text-2xl font-semibold text-start">
                    {plan.name}
                  </p>
                  {plan.is_best_deal ? (
                    <Chip className="text-primary bg-[#E2FFE0] rounded-lg">
                      20% Off
                    </Chip>
                  ) : null}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">$</span>
                  <h4 className="font-semibold text-5xl">{plan.price}</h4>
                  <small className="text-default-500 text-lg font-normal self-end">
                    / {plan.duration > 1 && plan.duration} {plan.duration_unit}
                  </small>
                </div>
                <Button
                  as={Link}
                  href={
                    sessionStatus === "authenticated"
                      ? CHECKOUT_PAGE_PATH(plan.id)
                      : `${LOGIN_PAGE_PATH}?redirect=${CHECKOUT_PAGE_PATH(
                          plan.id
                        )}`
                  }
                  variant={plan.is_best_deal ? "shadow" : "solid"}
                  color={plan.is_best_deal ? "primary" : "default"}
                  radius="full"
                  size="lg"
                  fullWidth
                >
                  Upgrade Plan
                </Button>
              </CardHeader>
              <CardBody className="flex flex-col items-start gap-3">
                {plan.description.split(",").map((desc, index) => (
                  <div key={desc + index} className="flex gap-2">
                    <TickIcon className="text-primary" />
                    <span className="text-default-500 text-sm font-medium">
                      {desc.trim()}
                    </span>
                  </div>
                ))}
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
      {pathname !== PRICING_PAGE_PATH && (
        <Button
          as={Link}
          href={PRICING_PAGE_PATH}
          radius="full"
          size="lg"
          variant="bordered"
          className="mt-8"
        >
          See Plan Details
        </Button>
      )}
    </Section>
  );
};

export default PricingSection;
