"use client";

import React, { FC } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link as HeroLink,
} from "@heroui/react";
import Input from "./ui/Input";
import Link from "next/link";
import { LOGIN_PAGE_PATH } from "@/lib/pathnames";
import { EnvelopeIcon } from "@/icons";

const ForgotPasswordCard: FC = () => {
  return (
    <Card as="form" className="p-6 w-full max-w-md">
      <CardHeader className="flex-col gap-y-2">
        <h1 className="text-2xl font-bold">Forgot Password?</h1>
        <p className="text-default-500 text-base">
          Please enter your email we will send you password reset link to your
          email
        </p>
      </CardHeader>
      <CardBody className="gap-y-5">
        <Input
          isRequired
          label="Email"
          type="email"
          placeholder="Enter your Email Address"
          startContent={<EnvelopeIcon className="size-5 text-default-500" />}
        />
      </CardBody>
      <CardFooter className="flex-col gap-y-4">
        <Button type="submit" color="primary" size="lg" fullWidth>
          Submit
        </Button>

        <HeroLink as={Link} href={LOGIN_PAGE_PATH}>
          Back to Login
        </HeroLink>
      </CardFooter>
    </Card>
  );
};

export default ForgotPasswordCard;
