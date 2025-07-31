import React, { FC } from "react";
import Section, {
  SectionDescription,
  SectionHeading,
  SectionProps,
} from "../Section";
import { Button } from "@heroui/button";
import Link from "next/link";
import { PRICING_PAGE_PATH } from "@/lib/pathnames";
import Image from "next/image";
import { Chip } from "@heroui/chip";
import { ClockIcon, LockIcon, QuestionMarkIcon } from "@/icons";

const HomeSection: FC<SectionProps> = ({ ...props }) => (
  <Section className="grid lg:grid-cols-2 gap-8" {...props}>
    <div className="flex flex-col items-start order-2 lg:order-1">
      <Chip
        size="md"
        startContent={<LockIcon className="size-4" />}
        color="primary"
        variant="flat"
        className="mb-4 px-3 py-1.5"
      >
        Trusted by 10M+ users globally
      </Chip>
      <SectionHeading className="text-4xl sm:text-5xl font-black text-start">
        Secure Your
      </SectionHeading>
      <SectionHeading className="text-primary underline text-4xl sm:text-5xl font-black text-start">
        Digital Identity
      </SectionHeading>
      <SectionDescription className="lg:w-full text-start p-0 font-medium leading-8">
        Military-grade encryption, unlimited bandwidth, and lightning- fast
        servers in 90+ countries. Browse, stream, and work securely from
        anywhere in the world.
      </SectionDescription>
      <Button as={Link} href={PRICING_PAGE_PATH} color="primary" size="lg">
        Get Started
      </Button>

      <div className="mt-4 flex gap-8">
        <div className="flex items-center gap-1">
          <QuestionMarkIcon className="size-4 text-primary" />
          <span className="text-default-500">30-day money-back</span>
        </div>
        <div className="flex items-center gap-1">
          <ClockIcon className="size-4 text-primary" />
          <span className="text-default-500">24/7 customer support</span>
        </div>
      </div>
    </div>

    <Image
      src="/home-section-image.png"
      alt="Home Section Image"
      width={0}
      height={0}
      sizes="100vw"
      className="w-full max-w-lg h-auto place-self-center order-1 lg:order-2"
      placeholder="blur"
      blurDataURL="/home-section-image.png"
    />
  </Section>
);

export default HomeSection;
