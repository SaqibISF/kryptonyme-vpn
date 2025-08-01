import React, { FC } from "react";
import Section, {
  SectionDescription,
  SectionHeading,
  SectionProps,
} from "../Section";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import Image from "next/image";
import { mockupBase64Src } from "@/lib/mockup-base64";
import Link from "next/link";
import { DOWNLOADS_PAGE_PATH } from "@/lib/pathnames";

const DownloadSection: FC<SectionProps> = ({ ...props }) => (
  <Section className="grid lg:grid-cols-5 gap-8" {...props}>
    <div className="lg:col-span-3 flex flex-col items-start px-4">
      <Chip
        size="md"
        color="primary"
        variant="flat"
        className="mb-4 px-3 py-1.5"
      >
        Download Mobile App
      </Chip>
      <SectionHeading className="text-4xl sm:text-5xl leading-14 font-black text-start">
        Download The Fastest Vpn App Secure Your Internet
      </SectionHeading>
      <SectionDescription className="lg:w-full text-start p-0 font-medium leading-8">
        At GShield, we are committed to providing secure, private, and
        unrestricted internet access to our users worldwide. In an age where
        online privacy is more important than ever, our mission is to protect
        your personal data.
      </SectionDescription>
      <Button as={Link} href={DOWNLOADS_PAGE_PATH} color="primary" size="lg">
        Download App
      </Button>
    </div>

    <Image
      src="/mockup.png"
      alt="image not founded"
      width={0}
      height={0}
      sizes="100vw"
      className="lg:col-span-2 w-full max-w-64 h-auto place-self-center"
      placeholder="blur"
      blurDataURL={mockupBase64Src}
    />
  </Section>
);

export default DownloadSection;
