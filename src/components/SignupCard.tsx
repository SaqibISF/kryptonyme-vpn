"use client";

import React, { FC } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link as HeroLink,
} from "@heroui/react";
import Input from "./ui/Input";
import Link from "next/link";
import { LOGIN_PAGE_PATH } from "@/lib/pathnames";
import {
  AppleICon,
  EnvelopeIcon,
  GoogleIcon,
  LockIcon,
  UserIcon,
} from "@/icons";

const SignupCard: FC = () => {
  return (
    <Card as="form" className="p-6 w-full max-w-md">
      <CardHeader className="flex-col gap-y-2">
        <h1 className="text-2xl font-bold">Sign Up</h1>
        <p className="text-default-500 text-base">
          Create an account to continue!
        </p>
      </CardHeader>
      <CardBody className="gap-y-5">
        <Input
          isRequired
          label="Name"
          type="text"
          placeholder="Enter your Name"
          startContent={<UserIcon className="size-5 text-default-500" />}
        />

        <Input
          isRequired
          label="Email"
          type="email"
          placeholder="Enter your Email Address"
          startContent={<EnvelopeIcon className="size-5 text-default-500" />}
        />

        <Input
          isRequired
          label="Password"
          type="password"
          placeholder="Enter your Password"
          startContent={<LockIcon className="size-5 text-default-500" />}
        />
      </CardBody>
      <CardFooter className="flex-col gap-y-4">
        <Button type="submit" color="primary" size="lg" fullWidth>
          Sign Up
        </Button>

        <div className="w-full flex items-center gap-2">
          <Divider className="flex-grow w-auto" />
          <span className="text-default-500 text-sm">Or continue with</span>
          <Divider className="flex-grow w-auto" />
        </div>

        <div className="w-full flex gap-4">
          <Button
            size="lg"
            variant="faded"
            fullWidth
            startContent={<GoogleIcon />}
          >
            Google
          </Button>
          <Button
            size="lg"
            variant="faded"
            fullWidth
            startContent={<AppleICon />}
          >
            Apple
          </Button>
        </div>
        <p className="text-default-500 text-sm">
          Already have an account?{" "}
          <HeroLink as={Link} href={LOGIN_PAGE_PATH}>
            Login
          </HeroLink>
        </p>
      </CardFooter>
    </Card>
  );
};

export default SignupCard;
