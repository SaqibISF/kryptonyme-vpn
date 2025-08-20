import React, { FC } from "react";
import Section, { SectionProps } from "../Section";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { AndroidIcon, AppStoreIcon, TickIcon, WindowsIcon } from "@/icons";
import { Button } from "@heroui/button";

const AvailableDevicesSection: FC<SectionProps> = ({ ...props }) => {
  return (
    <Section
      heading="Available on All Your Devices"
      description="Kryptonyme VPN works seamlessly across all your devices. Download our app for your preferred platform and enjoy secure browsing everywhere."
      {...props}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          {
            href: "/downloads/kryptonyme v1.0.1.exe",
            target: "_self",
            title: "Windows",
            description: "Protect your PC with our dedicated window",
            Icon: WindowsIcon,
            features: [
              "Windows 10 and 11",
              "Easy setup process",
              "Auto-connect feature",
            ],
          },
          {
            href: "https://play.google.com/store/apps/details?id=com.app.kryptonyme.vpn",
            target: "_blank",
            title: "Android",
            description: "Protect your mobile device with our Android app",
            Icon: AndroidIcon,
            features: ["Android 6.0+", "Split tunneling", "Dark mode support"],
          },
          {
            href: "https://apps.apple.com/pk/app/kryptonyme-vpn/id6745729564",
            target: "_blank",
            title: "iOS",
            description: "Secure your iPhone and iPad with our iOS app",
            Icon: AppStoreIcon,
            features: ["iOS 14.0+", "iPad compatibility", "Widget support"],
          },
        ].map(({ href, target, title, description, Icon, features }) => (
          <Card key={href} className="p-4 max-w-xs">
            <CardBody className="items-center gap-4">
              <div className="p-4 text-primary bg-primary-50/80 rounded-full">
                <Icon className="size-9" />
              </div>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-default-500 text-base">{description}</p>
              <ul className="text-default-500 text-sm flex flex-col gap-y-2 self-start">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-1">
                    <TickIcon className="text-primary size-4" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardBody>
            <CardFooter>
              <Button
                as="a"
                href={href}
                target={target}
                color="primary"
                size="lg"
                fullWidth
              >
                Download
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default AvailableDevicesSection;
