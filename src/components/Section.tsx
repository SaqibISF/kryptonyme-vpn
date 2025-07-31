"use client";

import React, { ComponentProps, FC, HTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type SectionProps = HTMLAttributes<HTMLElement> & {
  isHeroSection?: boolean;
  heading?: ReactNode;
  description?: ReactNode;
  bgDefault?: boolean;
  classNames?: {
    section?: string;
    container?: string;
    title?: string;
    heading?: string;
    subtitle?: string;
    description?: string;
  };
};

const SectionHeading: FC<ComponentProps<typeof motion.h3>> = ({
  children,
  className,
  ...props
}) =>
  children ? (
    <motion.h3
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={cn(
        "sm:text-4xl text-3xl font-bold leading-14 text-center mb-6",
        className
      )}
      {...props}
    >
      {children}
    </motion.h3>
  ) : null;

const SectionDescription: FC<ComponentProps<typeof motion.p>> = ({
  children,
  className,
  ...props
}) =>
  children ? (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn(
        "text-default-500 lg:w-2/3 px-8 text-lg leading-8 capitalize text-center mb-14",
        className
      )}
      {...props}
    >
      {children}
    </motion.p>
  ) : null;

const Section: FC<SectionProps> = ({
  isHeroSection,
  heading,
  description,
  bgDefault,
  classNames,
  className,
  children,
  ...props
}) => (
  <section
    className={cn(
      "w-full flex flex-col items-center justify-center",
      bgDefault ? "bg-default-100" : "",
      classNames?.section
    )}
    {...props}
  >
    <div
      className={cn(
        "container w-full max-w-7xl flex flex-col items-center justify-center text-center",
        isHeroSection ? "p-4 min-h-[calc(100vh-4rem)]" : "px-4 py-12 lg:py-14",
        classNames?.container,
        className
      )}
    >
      {heading && (
        <SectionHeading className={classNames?.heading}>
          {heading}
        </SectionHeading>
      )}
      {description && (
        <SectionDescription className={classNames?.description}>
          {description}
        </SectionDescription>
      )}
      {children}
    </div>
  </section>
);

export { SectionHeading, SectionDescription };

export default Section;
