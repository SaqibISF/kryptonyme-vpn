import React, { FC } from "react";
import Section from "@/components/Section";
import { Button } from "@heroui/button";
import Link from "next/link";
import { PRICING_PAGE_PATH } from "@/lib/pathnames";
import { Card, CardBody } from "@heroui/card";
import {
  ArrowsRotateIcon,
  BanIcon,
  BoltIcon,
  DualLocationIcon,
  EyeSlashIcon,
  InfinityIcon,
  LockIcon,
  LogsIcon,
  MultiNodesIcon,
  PowerOffIcon,
  SettingsSlashIcon,
  ShieldIcon,
  TickIcon,
  TimerIcon,
} from "@/icons";
import { Progress } from "@heroui/progress";
import FAQSection from "@/components/sections/FAQSection";

const FeaturesPage: FC = () => (
  <>
    <Section
      heading="Powerful VPN Features"
      description="Discover why millions trust Kryptonyme VPN for ultimate online privacy and security"
      bgDefault
    >
      <Button as={Link} href={PRICING_PAGE_PATH} size="lg" color="primary">
        Start Free Trial
      </Button>
    </Section>

    <Section
      heading="Advanced Privacy Protection"
      description="Comprehensive tools to protect your identity and data online"
    >
      <div className="w-full grid md:grid-cols-2 gap-6">
        {[
          {
            heading: "Built-in Ad Blocker",
            description:
              "Block ads, trackers, and malicious websites automatically for a cleaner browsing experience.",
            Icon: BanIcon,
            features: [
              "Blocks 99% of ads and trackers",
              "Malware protection included",
              "Faster page loading times",
            ],
          },
          {
            heading: "Threat Protection",
            description:
              "Real-time protection against malware, phishing, and other online threats.",
            Icon: SettingsSlashIcon,
            features: [
              "Real-time threat detection",
              "Phishing site blocking",
              "Malicious download prevention",
            ],
          },
          {
            heading: "Double VPN",
            description:
              "Route your traffic through two VPN servers for maximum privacy and security.",
            Icon: ArrowsRotateIcon,
            features: [
              "Double encryption layer",
              "Enhanced anonymity",
              "IP address masking",
            ],
          },
          {
            heading: "Onion Over VPN",
            description:
              "Combine VPN encryption with Tor network for ultimate anonymity.",
            Icon: LogsIcon,
            features: [
              "Maximum anonymity",
              "Access .onion sites",
              "Enhanced privacy",
            ],
          },
        ].map(({ heading, description, Icon, features }, index) => (
          <Card
            key={index}
            className="p-4 border-l-4 border-primary rounded-xl"
          >
            <CardBody className="gap-4">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <Icon className="text-primary" /> {heading}
              </h3>
              <p className="text-default-500 text-base">{description}</p>
              <ul className="text-default-500 text-sm flex flex-col gap-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <TickIcon className="text-primary size-3.5" /> {feature}
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        ))}
      </div>
    </Section>

    <Section
      heading="Lightning-Fast Performance"
      description="Experience blazing speeds without compromising security"
      bgDefault
    >
      <div className="grid lg:grid-cols-2 items-center gap-4">
        <div className="flex flex-col gap-4">
          {[
            {
              heading: "Ultra-Fast Servers",
              description:
                "5000+ servers in 60+ countries optimized for maximum speed and minimal latency.",
              Icon: BoltIcon,
            },
            {
              heading: "Unlimited Bandwidth",
              description:
                "No throttling, no data caps. Stream, download, and browse without limits.",
              Icon: InfinityIcon,
            },
            {
              heading: "Smart Server Selection",
              description:
                "Automatically connects to the fastest available server based on your location.",
              Icon: TimerIcon,
            },
          ].map(({ heading, description, Icon }, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="p-3 text-white bg-primary rounded-full">
                <Icon />
              </div>
              <div className="flex flex-col gap-2 text-start">
                <h3 className="text-xl font-bold">{heading}</h3>
                <p className="text-default-500 text-base">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <Card className="p-4">
          <CardBody className="items-center gap-4">
            <h1 className="text-2xl font-bold">Speed Test Results</h1>
            <div className="w-full flex flex-col sm:flex-row gap-y-2 justify-between">
              <p className="text-default-500 text-base">Without VPN</p>
              <div className="w-full sm:w-1/2 text-base font-bold flex items-center gap-3">
                <Progress
                  aria-label="net speed"
                  className="w-full max-w-48"
                  value={80}
                  isDisabled
                />{" "}
                <span className="min-w-24">80 Mbps</span>
              </div>
            </div>
            <div className="w-full flex flex-col sm:flex-row gap-y-2 justify-between">
              <p className="text-default-500 text-base">With Kryptonyme</p>
              <div className="w-full sm:w-1/2 text-base font-bold flex items-center gap-3">
                <Progress
                  aria-label="net speed"
                  className="w-full max-w-48"
                  value={100}
                />{" "}
                <span className="min-w-24">87 Mbps</span>
              </div>
            </div>
            <p className="text-default-500 text-sm">
              Only 3% speed reduction with maximum security
            </p>
          </CardBody>
        </Card>
      </div>
    </Section>

    <Section
      heading="Core Security Features"
      description="Military-grade encryption and advanced security protocols to keep your data safe"
    >
      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          {
            title: "AES-256 Encryption",
            description:
              "Military-grade encryption that's virtually unbreakable, protecting your data from hackers and surveillance.",
            Icon: LockIcon,
          },
          {
            title: "Zero-Logs Policy",
            description:
              "We don't track, collect, or store your online activities. Your privacy is guaranteed.",
            Icon: EyeSlashIcon,
          },
          {
            title: "Automatic Kill Switch",
            description:
              "Instantly blocks internet traffic if your VPN connection drops, preventing data leaks.",
            Icon: PowerOffIcon,
          },
          {
            title: "Split Tunneling",
            description:
              "Choose which apps use the VPN while others connect directly for optimal performance.",
            Icon: DualLocationIcon,
          },
          {
            title: "DNS Leak Protection",
            description:
              "Prevents DNS requests from bypassing the VPN tunnel, ensuring complete privacy.",
            Icon: ShieldIcon,
          },
          {
            title: "Multiple Protocols",
            description:
              "Choose from OpenVPN, IKEv2, and WireGuard protocols for optimal speed and security.",
            Icon: MultiNodesIcon,
          },
        ].map(({ title, description, Icon }, index) => (
          <Card key={index} className="p-4">
            <CardBody className="gap-y-2">
              <span className="text-primary bg-primary-50/80 p-4 self-start rounded-full">
                <Icon />
              </span>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-default-500 text-base text-justify">
                {description}
              </p>
            </CardBody>
          </Card>
        ))}
      </div>
    </Section>

    <FAQSection bgDefault />
  </>
);

export default FeaturesPage;
