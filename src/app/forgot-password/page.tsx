import React, { FC } from "react";
import Section from "@/components/Section";
import ForgotPasswordCard from "@/components/ForgotPasswordCard";
import { LogoIcon } from "@/icons";

const ForgotPasswordPage: FC = () => (
  <Section isHeroSection bgDefault className="gap-y-4">
    <LogoIcon className="size-24" />
    <h1 className="text-3xl font-black">Kryptonyme</h1>
    <p className="text-default-500 text-base">Secure your digital life</p>
    <ForgotPasswordCard />
  </Section>
);

export default ForgotPasswordPage;
