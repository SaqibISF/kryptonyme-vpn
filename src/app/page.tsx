import React, { FC } from "react";
import HomeSection from "@/components/sections/HomeSection";
import Section from "@/components/Section";
import { GlobeIcon, LockIcon, UserNotIcon, VideoPlayerIcon } from "@/icons";
import WhyKryptonymeSection from "@/components/sections/WhyKryptonymeSection";
import WorkFlowSection from "@/components/sections/WorkFlowSection";

const HomePage: FC = () => (
  <>
    <HomeSection isHeroSection bgDefault />

    <Section className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8">
      {[
        {
          title: "No-Logs Policy",
          description: "Independently audited",
          Icon: UserNotIcon,
        },
        {
          title: "AES-256 Encryption",
          description: "Military-grade security",
          Icon: LockIcon,
        },
        {
          title: "30-Day Guarantee",
          description: "Risk-free trial",
          Icon: VideoPlayerIcon,
        },
        {
          title: "94 Countries",
          description: "Global server network",
          Icon: GlobeIcon,
        },
      ].map(({ title, description, Icon }, index) => (
        <div key={index} className="flex flex-col items-center gap-2">
          <div className="p-3.5 text-primary bg-primary-200/80 rounded-xl">
            <Icon />
          </div>
          <h4 className="text-base font-semibold">{title}</h4>
          <p className="text-default-500">{description}</p>
        </div>
      ))}
    </Section>

    <WhyKryptonymeSection bgDefault />

    <WorkFlowSection />
  </>
);

export default HomePage;
