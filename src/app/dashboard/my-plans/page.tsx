"use client";

import React, { FC } from "react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { TickIcon } from "@/icons";
import { Alert } from "@heroui/alert";
import { useActivePlan } from "@/hooks/usePlans";
import { Skeleton } from "@heroui/skeleton";
import { formatDate } from "@/lib/utils";
import { Link as HeroLink } from "@heroui/link";
import Link from "next/link";
import { PRICING_PAGE_PATH } from "@/lib/pathnames";
import PaymentHistoryTable from "@/components/dashboard/PaymentHistoryTable";

const MyPlansPage: FC = () => {
  const { activePlan, isActivePlanLoading } = useActivePlan();
  return (
    <div className="flex flex-col gap-6">
      <Card className="p-4">
        <CardHeader>
          <h4 className="text-lg font-semibold">Current Plan</h4>
        </CardHeader>
        <CardBody className="gap-4">
          {isActivePlanLoading && (
            <div className="flex flex-col gap-4">
              <Skeleton className="h-6 w-32 rounded" />
              <Skeleton className="h-5 w-48 rounded" />
              <div className="flex gap-4">
                <Skeleton className="h-7 w-20 rounded" />
                <Skeleton className="h-7 w-20 rounded" />
                <Skeleton className="h-7 w-20 rounded" />
              </div>
              <Skeleton className="h-10 w-full rounded" />
            </div>
          )}

          {!isActivePlanLoading && activePlan && (
            <>
              <h5 className="text-lg font-medium">
                {activePlan?.plan.name}{" "}
                <Chip color="primary" size="sm">
                  Active
                </Chip>
              </h5>

              <div className="flex flex-col gap-2">
                <p className="text-default-500 text-base">
                  Your plan ends on{" "}
                  <span className="text-default-600 font-medium">
                    {formatDate(activePlan.end_date)}
                  </span>
                </p>

                <div className="flex gap-4">
                  {activePlan.plan.description.split(",").map((item, index) => (
                    <Chip
                      key={index}
                      color="secondary"
                      variant="flat"
                      startContent={<TickIcon className="size-4" />}
                      className="px-2"
                    >
                      {item}
                    </Chip>
                  ))}
                </div>
              </div>

              <Alert
                color="success"
                title="Save 40% by switching to an Annual Plan!"
              />
            </>
          )}

          {!isActivePlanLoading && !activePlan && (
            <div className="text-default-500">
              No Active Plan Found{" "}
              <HeroLink as={Link} href={PRICING_PAGE_PATH}>
                Upgrade Now
              </HeroLink>
            </div>
          )}
        </CardBody>
      </Card>

      <Card className="p-0">
        <CardHeader className="p-6">
          <h4 className="text-lg font-semibold">Purchase History</h4>
        </CardHeader>
        <CardBody className="p-0">
          <PaymentHistoryTable />
        </CardBody>
      </Card>
    </div>
  );
};

export default MyPlansPage;
