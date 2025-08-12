"use client";

import React, { FC, ReactNode, SVGProps } from "react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Skeleton } from "@heroui/skeleton";
import { Chip } from "@heroui/chip";
import { CrownIcon, GlobeIcon } from "@/icons";
import { useServers } from "@/hooks/useServers";
import { useActivePlan } from "@/hooks/usePlans";

const ServiceCard: FC<{
  title: string;
  description: string;
  tag: ReactNode;
  Icon: FC<SVGProps<SVGSVGElement>>;
  isLoading?: boolean;
}> = ({ title, description, tag, Icon, isLoading }) =>
  isLoading ? (
    <Card className="p-4 animate-pulse">
      <CardHeader className="justify-between">
        <Skeleton className="rounded-full w-8 h-8" />
        <Skeleton className="rounded-md w-16 h-6" />
      </CardHeader>
      <CardBody>
        <Skeleton className="h-5 w-32 rounded mb-2" />
        <Skeleton className="h-4 w-24 rounded" />
      </CardBody>
    </Card>
  ) : (
    <Card className="p-4">
      <CardHeader className="justify-between">
        <Icon className="text-primary" />
        {tag}
      </CardHeader>
      <CardBody>
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-default-500 text-sm">{description}</p>
      </CardBody>
    </Card>
  );

const ServiceCards: FC = () => {
  const { totalServers, isServersLoading } = useServers();
  const { activePlan, isActivePlanLoading } = useActivePlan();

  return (
    <>
      {[
        {
          title: activePlan ? activePlan.plan.name : "No Premium Plan Founded",
          description: activePlan
            ? `${Math.floor(
                (+new Date(activePlan.end_date) -
                  +new Date(activePlan.start_date)) /
                  (1000 * 3600 * 24) -
                  1
              )} days remaining`
            : "",
          tag: (
            <Chip color={activePlan ? "primary" : "warning"}>
              {activePlan ? "Active" : "No Active"}
            </Chip>
          ),
          Icon: CrownIcon,
          isLoading: isActivePlanLoading,
        },
        {
          title: "Servers",
          description: "Countries available",
          tag: (
            <span className="text-primary text-lg font-semibold">
              {totalServers}
            </span>
          ),
          Icon: GlobeIcon,
          isLoading: isServersLoading,
        },
      ].map(({ title, description, tag, Icon, isLoading }, index) => (
        <ServiceCard
          key={index}
          title={title}
          description={description}
          tag={tag}
          Icon={Icon}
          isLoading={isLoading}
        />
      ))}
    </>
  );
};

export default ServiceCards;
