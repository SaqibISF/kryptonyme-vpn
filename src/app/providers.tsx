"use client";

import React, { FC, ReactNode } from "react";
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { ThemeProvider, type ThemeProviderProps } from "next-themes";
import { useRouter } from "next/navigation";
import { Provider } from "react-redux";
import store from "@/store/store";
import { SessionProvider } from "next-auth/react";

export const Providers: FC<{
  className?: string;
  children: ReactNode;
  themeProps: ThemeProviderProps;
}> = ({ className, children, themeProps }) => {
  const router = useRouter();
  return (
    <HeroUIProvider navigate={router.push} className={className}>
      <ThemeProvider {...themeProps}>
        <SessionProvider>
          <Provider store={store}>{children}</Provider>
        </SessionProvider>
      </ThemeProvider>
      <ToastProvider />
    </HeroUIProvider>
  );
};
