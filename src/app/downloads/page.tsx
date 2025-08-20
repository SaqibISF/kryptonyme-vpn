import { Metadata } from "next";
import React, { FC } from "react";
import Section from "@/components/Section";
import { Button } from "@heroui/button";
import AvailableDevicesSection from "@/components/sections/AvailableDevicesSection";
import FAQSection from "@/components/sections/FAQSection";

export const metadata: Metadata = { title: "Downloads" };

const DownloadPage: FC = () => (
  <>
    <Section
      heading="Download Kryptonyme VPN"
      description="Discover why millions trust Kryptonyme VPN for ultimate online privacy and security"
      bgDefault
    >
      <Button
        as="a"
        href="/downloads/kryptonyme v1.0.1.exe"
        color="primary"
        size="lg"
      >
        Download Now
      </Button>
    </Section>

    <AvailableDevicesSection />

    <FAQSection bgDefault />
  </>
);

export default DownloadPage;
