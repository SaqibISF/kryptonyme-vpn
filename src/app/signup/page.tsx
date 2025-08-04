import React, { FC } from "react";
import Section from "@/components/Section";
import SignupCard from "@/components/SignupCard";
import { LogoIcon } from "@/icons";

const SignUpPage: FC = () => (
  <Section isHeroSection bgDefault className="gap-y-4">
    <LogoIcon className="size-24" />
    <h1 className="text-3xl font-black">Kryptonyme</h1>
    <p className="text-default-500 text-base">Secure your digital life</p>
    <SignupCard />
  </Section>
);

export default SignUpPage;
