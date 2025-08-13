import { Metadata } from "next";
import React, { FC, Suspense } from "react";
import Section from "@/components/Section";
import LoginCard from "@/components/LoginCard";
import { LogoIcon } from "@/icons";

export const metadata: Metadata = { title: "Log In" };

const LoginPage: FC = () => (
  <Section isHeroSection bgDefault className="gap-y-4">
    <LogoIcon className="size-24" />
    <h1 className="text-3xl font-black">Kryptonyme</h1>
    <p className="text-default-500 text-base">Secure your digital life</p>
    <Suspense>
      <LoginCard />
    </Suspense>
  </Section>
);

export default LoginPage;
