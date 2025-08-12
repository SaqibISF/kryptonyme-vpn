import React, { FC, Suspense } from "react";
import Section from "@/components/Section";
import ResetPasswordCard from "@/components/ResetPasswordCard";
import { LogoIcon } from "@/icons";

const ResetPasswordPage: FC = () => (
  <Section isHeroSection bgDefault className="gap-y-4">
    <LogoIcon className="size-24" />
    <h1 className="text-3xl font-black">Kryptonyme</h1>
    <p className="text-default-500 text-base">Secure your digital life</p>
    <Suspense>
      <ResetPasswordCard />
    </Suspense>
  </Section>
);

export default ResetPasswordPage;
