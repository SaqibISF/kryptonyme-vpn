import React, { FC } from "react";
import Section, { SectionProps } from "../Section";
import { Card, CardBody } from "@heroui/card";
import {
  EyeSlashIcon,
  LogsIcon,
  RocketIcon,
  ServerIcon,
  ShieldIcon,
  WiFiIcon,
} from "@/icons";

const WhyKryptonymeSection: FC<SectionProps> = ({ ...props }) => (
  <Section
    heading="Why Choose Kryptonyme"
    description="Advanced security features designed for the modern digital world"
    {...props}
  >
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
      {[
        {
          title: "Zero-Log Policy",
          description:
            "Independently audited no-logs policy ensures your browsing history never leaves your device.",
          Icon: LogsIcon,
        },
        {
          title: "Ultra-Fast Speeds",
          description:
            "Next-gen WireGuard protocol delivers blazing speeds without compromising security.",
          Icon: RocketIcon,
        },
        {
          title: "Advanced Threat Protection",
          description:
            "Built-in malware and ad blocking keeps your devices safe from online threats.",
          Icon: ShieldIcon,
        },
        {
          title: "IP & DNS Leak Protection",
          description:
            "Advanced leak protection ensures your real identity stays hidden at all times.",
          Icon: EyeSlashIcon,
        },
        {
          title: "Public Wi-Fi Security",
          description:
            "Secure encryption on public networks protects you from hackers and snoopers.",
          Icon: WiFiIcon,
        },
        {
          title: "Smart Server Selection",
          description:
            "AI-powered server recommendations for optimal speed and performance.",
          Icon: ServerIcon,
        },
      ].map(({ title, description, Icon }, index) => (
        <Card key={index} className="p-4">
          <CardBody className="flex-col gap-4">
            <div className="self-start p-4 text-primary bg-primary-100/70 rounded-full">
              <Icon />
            </div>
            <h4 className="text-base font-semibold">{title}</h4>
            <p className="text-default-500">{description}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  </Section>
);

export default WhyKryptonymeSection;
