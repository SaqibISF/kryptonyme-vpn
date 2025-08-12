"use client";

import React, { FC, useState } from "react";
import {
  addToast,
  Alert,
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
import { DASHBOARD_PAGE_PATH, LOGIN_PAGE_PATH } from "@/lib/pathnames";
import {
  AppleICon,
  EnvelopeIcon,
  GoogleIcon,
  LockIcon,
  UserIcon,
} from "@/icons";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import {
  emailSchema,
  nameSchema,
  choosePasswordSchema,
} from "@/lib/zod-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import { SIGNUP_ROUTE } from "@/lib/constants";
import { User } from "next-auth";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";

const SignupCard: FC = () => {
  const [successMessage, setSuccessMessage] = useState<string>("");

  const signupSchema = z.object({
    name: nameSchema,
    email: emailSchema,
    password: choosePasswordSchema,
  });

  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
    setError,
    reset,
  } = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: { name: "", email: "", password: "" },
  });

  const signup: SubmitHandler<z.infer<typeof signupSchema>> = async (
    values
  ) => {
    try {
      const res = await axios
        .post<{
          status: boolean;
          message: string;
          user: User;
        }>(SIGNUP_ROUTE, values)
        .then((res) => res.data);

      if (res.status) {
        reset();
        setSuccessMessage(res.message);
        addToast({
          color: "success",
          title: "Sign Up",
          description: res.message,
        });
      } else {
        addToast({
          color: "danger",
          title: "Sign Up Failed",
          description: res.message,
        });

        setError("root", { type: "manual", message: res.message });
      }
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError
          ? error.response?.data.message
          : error instanceof Error
          ? error.message
          : "Failed to signup";

      addToast({
        color: "danger",
        title: "Sign Up Failed",
        description: errorMessage,
      });

      setError("root", { type: "manual", message: errorMessage });
    }
  };

  const handleGoogleSignin = async () => {
    await signIn("google", {
      callbackUrl: DASHBOARD_PAGE_PATH,
    });
  };

  const handleAppleSignin = async () => {
    await signIn("apple", {
      callbackUrl: DASHBOARD_PAGE_PATH,
    });
  };

  return (
    <Card
      as="form"
      onSubmit={handleSubmit(signup)}
      className="p-6 w-full max-w-md"
    >
      <CardHeader className="flex-col gap-y-2">
        <h1 className="text-2xl font-bold">Sign Up</h1>
        <p className="text-default-500 text-base">
          Create an account to continue!
        </p>
        {successMessage && (
          <Alert
            color="success"
            title={successMessage}
            className="text-start"
          />
        )}
        {errors.root && (
          <Alert
            color="danger"
            title={errors.root.message}
            className="text-start"
          />
        )}
      </CardHeader>
      <CardBody className={cn("gap-y-5", successMessage ? "hidden" : "")}>
        <Input
          isRequired
          label="Name"
          type="text"
          placeholder="Enter your Name"
          startContent={<UserIcon className="size-5 text-default-500" />}
          errorMessage={errors.name?.message}
          {...register("name")}
        />

        <Input
          isRequired
          label="Email"
          type="email"
          placeholder="Enter your Email Address"
          startContent={<EnvelopeIcon className="size-5 text-default-500" />}
          errorMessage={errors.email?.message}
          {...register("email")}
        />

        <Input
          isRequired
          label="Password"
          type="password"
          placeholder="Enter your Password"
          startContent={<LockIcon className="size-5 text-default-500" />}
          errorMessage={errors.password?.message}
          {...register("password")}
        />
      </CardBody>
      <CardFooter
        className={cn("flex-col gap-y-4", successMessage ? "hidden" : "")}
      >
        <Button
          type="submit"
          isLoading={isSubmitting}
          color="primary"
          size="lg"
          fullWidth
        >
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
            onPress={handleGoogleSignin}
          >
            Google
          </Button>
          <Button
            size="lg"
            variant="faded"
            fullWidth
            startContent={<AppleICon />}
            onPress={handleAppleSignin}
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
