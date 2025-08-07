"use client";

import React, { FC, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  Divider,
  Link as HeroLink,
} from "@heroui/react";
import Input from "./ui/Input";
import Link from "next/link";
import {
  DASHBOARD_PAGE_PATH,
  FORGOT_PASSWORD_PAGE_PATH,
  SIGNUP_PAGE_PATH,
} from "@/lib/pathnames";
import { AppleICon, EnvelopeIcon, GoogleIcon, LockIcon } from "@/icons";
import { signIn } from "next-auth/react";

const LoginCard: FC = () => {
  useEffect(() => {
    signIn("credentials", {
      redirectTo: DASHBOARD_PAGE_PATH,
      id: 2,
      email: "saqib@gmail.com",
      name: "Saqib",
      access_token: "lskjdfkjsciodoicsljdklfjsklfjksdmc",
    });
  }, []);
  return (
    <Card as="form" className="p-6 w-full max-w-md">
      <CardHeader className="flex-col gap-y-2">
        <h1 className="text-2xl font-bold">Welcome Back</h1>
        <p className="text-default-500 text-base">
          Sign in to your Kryptonyme account
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

        <Input
          isRequired
          label="Password"
          type="password"
          placeholder="Enter your Password"
          startContent={<LockIcon className="size-5 text-default-500" />}
        />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-y-2">
          <Checkbox
            className="self-start"
            classNames={{ label: "text-default-500 text-base" }}
          >
            Remember me
          </Checkbox>

          <HeroLink
            as={Link}
            href={FORGOT_PASSWORD_PAGE_PATH}
            className="self-end"
          >
            Forgot Password?
          </HeroLink>
        </div>
      </CardBody>
      <CardFooter className="flex-col gap-y-4">
        <Button type="submit" color="primary" size="lg" fullWidth>
          Log In
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
          Don&apos;t have an account?{" "}
          <HeroLink as={Link} href={SIGNUP_PAGE_PATH}>
            Sign up
          </HeroLink>
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoginCard;
