import React, { FC } from "react";
import { Plan } from "@/types/plan";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { TickIcon } from "@/icons";
import { Divider } from "@heroui/divider";
import { Skeleton } from "@heroui/skeleton";

const OrderSummarySkeleton: FC = () => (
  <Card className="p-4">
    <CardHeader>
      <Skeleton className="w-24 h-6 rounded-md"></Skeleton>
    </CardHeader>
    <CardBody className="gap-4">
      <div className="text-base border border-primary rounded-xl p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <Skeleton className="w-32 h-5 rounded-md"></Skeleton>
          <Skeleton className="w-16 h-6 rounded-md"></Skeleton>
        </div>
        <Skeleton className="w-48 h-5 rounded-md"></Skeleton>
        <Skeleton className="w-24 h-6 rounded-md"></Skeleton>
      </div>

      <ul className="flex flex-col gap-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <li key={index} className="flex gap-2">
            <Skeleton className="w-4 h-4 rounded-full"></Skeleton>
            <Skeleton className="w-48 h-4 rounded-md"></Skeleton>
          </li>
        ))}
      </ul>

      <Divider />

      <div className="text-sm flex items-center justify-between">
        <Skeleton className="w-16 h-5 rounded-md"></Skeleton>
        <Skeleton className="w-16 h-5 rounded-md"></Skeleton>
      </div>
      <div className="text-sm flex items-center justify-between">
        <Skeleton className="w-16 h-5 rounded-md"></Skeleton>
        <Skeleton className="w-16 h-5 rounded-md"></Skeleton>
      </div>

      <Divider />
    </CardBody>
    <CardFooter className="text-base font-semibold justify-between">
      <Skeleton className="w-24 h-6 rounded-md"></Skeleton>
      <Skeleton className="w-24 h-6 rounded-md"></Skeleton>
    </CardFooter>
  </Card>
);

const OrderSummaryCard: FC<{
  isPlansLoading: boolean;
  plan: Plan;
}> = ({ isPlansLoading, plan }) =>
  isPlansLoading ? (
    <OrderSummarySkeleton />
  ) : (
    <Card className="p-4">
      <CardHeader>
        <h2 className="text-xl font-semibold">Order Summary</h2>
      </CardHeader>
      <CardBody className="gap-4">
        <div className="bg-primary-50 text-primary text-base border border-primary rounded-xl p-4 flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <span className="font-semibold">{plan.name}</span>
            {plan.is_best_deal && (
              <Chip color="primary" size="sm">
                Best Value
              </Chip>
            )}
          </div>
          <p>
            {plan.duration}{" "}
            {plan.duration_unit + (plan.duration > 1 ? "s" : "")} of premium VPN
            service
          </p>

          <h1 className="text-2xl font-bold">${plan.price}</h1>
        </div>

        <ul className="flex flex-col gap-2">
          {plan.description.split(",").map((desc, index) => (
            <li key={desc + index} className="flex gap-2">
              <TickIcon className="text-primary size-5" />
              <span className="text-default-500 text-base font-medium">
                {desc.trim()}
              </span>
            </li>
          ))}
        </ul>

        <Divider />

        <div className="text-sm flex items-center justify-between">
          <span>Sub total</span>
          <span>${plan.price}</span>
        </div>
        <div className="text-sm flex items-center justify-between">
          <span>Discount</span>
          <span className="text-success">-$0.00</span>
        </div>

        <Divider />
      </CardBody>
      <CardFooter className="text-base font-semibold justify-between">
        <span>Total</span>
        <span className="text-primary">${plan.price}</span>
      </CardFooter>
    </Card>
  );

export default OrderSummaryCard;
