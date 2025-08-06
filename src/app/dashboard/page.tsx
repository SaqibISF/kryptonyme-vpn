import React, { FC } from "react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import {
  ArrowUpIcon,
  CrownIcon,
  DownloadIcon,
  GlobeIcon,
  GraphIcon,
  LaptopIcon,
  MobileIcon,
  QuestionMarkIcon,
  WindowsIcon,
} from "@/icons";
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import Link from "next/link";
import { DOWNLOADS_PAGE_PATH, PRICING_PAGE_PATH } from "@/lib/pathnames";

const DashboardPage: FC = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {[
          {
            title: "Premium Plan",
            description: "247 days remaining",
            tag: <Chip color="primary">Active</Chip>,
            Icon: CrownIcon,
          },
          {
            title: "Data Usage",
            description: "234.5 GB this month",
            tag: (
              <Chip color="primary" variant="flat">
                UNLIMITED
              </Chip>
            ),
            Icon: GraphIcon,
          },
          {
            title: "Devices",
            description: "Connected devices",
            tag: (
              <span className="text-primary text-lg font-semibold">3/10</span>
            ),
            Icon: QuestionMarkIcon,
          },
          {
            title: "Servers",
            description: "Countries available",
            tag: (
              <span className="text-primary text-lg font-semibold">60+</span>
            ),
            Icon: GlobeIcon,
          },
        ].map(({ title, description, tag, Icon }, index) => (
          <Card key={index} className="p-4">
            <CardHeader className="justify-between">
              <Icon className="text-primary" />
              {tag}
            </CardHeader>
            <CardBody>
              <h4 className="text-lg font-semibold">{title}</h4>
              <p className="text-default-500 text-sm">{description}</p>
            </CardBody>
          </Card>
        ))}
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

        <Card className="p-4">
          <CardHeader>
            <h4 className="text-lg font-semibold">Connected Devices</h4>
          </CardHeader>
          <CardBody className="gap-4">
            {[
              {
                title: "MacBook Pro",
                description: "Connected 2h ago",
                Icon: LaptopIcon,
              },
              {
                title: "iPhone 13",
                description: "Connected 5m ago",
                Icon: MobileIcon,
              },
              {
                title: "Windows PC",
                description: "Connected 1d ago",
                Icon: WindowsIcon,
              },
            ].map(({ title, description, Icon }, index) => (
              <div
                key={index}
                className="bg-default-100 p-4 rounded-xl flex items-center gap-1.5"
              >
                <span className="w-fit">
                  <Icon className="size-7 text-primary" />
                </span>
                <div className="flex-grow">
                  <h5 className="text-base font-medium">{title}</h5>
                  <p className="text-default-500 text-sm">{description}</p>
                </div>
                <Button size="sm" color="danger" variant="flat">
                  Disconnect
                </Button>
              </div>
            ))}
          </CardBody>
        </Card>
      </div>

      <Card className="p-4">
        <CardHeader>
          <h4 className="text-lg font-semibold">Recent Activity</h4>
        </CardHeader>
        <CardBody className="gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-green-500 size-2 rounded-full"></div>
            <p className="text-default-500 text-sm">
              Connected to US - New York server
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-blue-500 size-2 rounded-full"></div>
            <p className="text-default-500 text-sm">
              iPhone 13 device connected
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-red-500 size-2 rounded-full"></div>
            <p className="text-default-500 text-sm">
              Disconnected from UK - London server
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default DashboardPage;
