import React, { FC } from "react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { ArrowUpIcon, DownloadIcon } from "@/icons";
import { Button } from "@heroui/button";
import Link from "next/link";
import { DOWNLOADS_PAGE_PATH, PRICING_PAGE_PATH } from "@/lib/pathnames";
import ServersTable from "@/components/dashboard/ServersTable";
import ServiceCards from "@/components/dashboard/ServiceCards";

const DashboardPage: FC = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        <ServiceCards />
      </div>

      <div className="grid xl:grid-cols-2 gap-8">
        <Card className="p-4">
          <CardHeader>
            <h4 className="text-lg font-semibold">Quick Actions</h4>
          </CardHeader>
          <CardBody className="gap-4">
            <Button
              as={Link}
              href={PRICING_PAGE_PATH}
              color="primary"
              size="lg"
              startContent={<ArrowUpIcon className="size-5" />}
            >
              Upgrade Plan
            </Button>
            <Button
              as={Link}
              href={DOWNLOADS_PAGE_PATH}
              color="primary"
              size="lg"
              startContent={<DownloadIcon className="size-5" />}
            >
              Download App
            </Button>
          </CardBody>
        </Card>
      </div>

      <Card className="p-0">
        <CardHeader className="p-6">
          <h4 className="text-lg font-semibold">All Servers Location</h4>
        </CardHeader>
        <CardBody className="p-0">
          <ServersTable />
        </CardBody>
      </Card>
    </div>
  );
};

export default DashboardPage;
