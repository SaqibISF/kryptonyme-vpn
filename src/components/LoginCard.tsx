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
  Checkbox,
  // Divider,
  Link as HeroLink,
} from "@heroui/react";
import Input from "./ui/Input";
import Link from "next/link";
import {
  DASHBOARD_PAGE_PATH,
  FORGOT_PASSWORD_PAGE_PATH,
  RESEND_VERIFICATION_EMAIL_PAGE_PATH,
  SIGNUP_PAGE_PATH,
} from "@/lib/pathnames";
import { /*AppleICon,*/ EnvelopeIcon, /*GoogleIcon,*/ LockIcon } from "@/icons";
import { signIn } from "next-auth/react";
import z from "zod";
import { emailSchema, passwordSchema } from "@/lib/zod-schemas";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import { LOGIN_ROUTE } from "@/lib/constants";
import { User } from "next-auth";
import { useSearchParams } from "next/navigation";

const LoginCard: FC = () => {
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const loginSchema = z.object({
    email: emailSchema,
    password: passwordSchema,
  });

  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
    setError,
    reset,
  } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const login: SubmitHandler<z.infer<typeof loginSchema>> = async (values) => {
    try {
      const res = await axios
        .post<{
          status: boolean;
          message: string;
          access_token: string;
          user: User;
        }>(LOGIN_ROUTE, values)
        .then((res) => res.data);

      if (res.status) {
        signIn("credentials", {
          redirectTo: redirect ? redirect : DASHBOARD_PAGE_PATH,
          id: res.user.id,
          email: res.user.email,
          name: res.user.name,
          access_token: res.access_token,
          rememberMe,
        });

        addToast({
          color: "success",
          title: "Login",
          description: res.message,
        });

        reset();
      } else {
        addToast({
          color: "danger",
          title: "Login Failed",
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
          : "Failed to login";

      addToast({
        color: "danger",
        title: "Login Failed",
        description: errorMessage,
      });

      setError("root", { type: "manual", message: errorMessage });
    }
  };

  // const handleGoogleSignin = async () => {
  //   await signIn("google", {
  //     callbackUrl: redirect ? redirect : DASHBOARD_PAGE_PATH,
  //   });
  // };

  // const handleAppleSignin = async () => {
  //   await signIn("apple", {
  //     callbackUrl: redirect ? redirect : DASHBOARD_PAGE_PATH,
  //   });
  // };

  return (
    <Card
      as="form"
      onSubmit={handleSubmit(login)}
      className="p-6 w-full max-w-md"
    >
      <CardHeader className="flex-col gap-y-2">
        <h1 className="text-2xl font-bold">Welcome Back</h1>
        <p className="text-default-500 text-base">
          Sign in to your Kryptonyme account
        </p>

        {errors.root && (
          <Alert
            color="danger"
            title={errors.root.message}
            className="text-start"
          />
        )}
      </CardHeader>
      <CardBody className="gap-y-5">
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

        <div className="flex flex-col sm:flex-row items-center justify-between gap-y-2">
          <Checkbox
            isSelected={rememberMe}
            onValueChange={setRememberMe}
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
        <Button
          type="submit"
          isLoading={isSubmitting}
          color="primary"
          size="lg"
          fullWidth
        >
          Log In
        </Button>

        <HeroLink as={Link} href={RESEND_VERIFICATION_EMAIL_PAGE_PATH}>
          Resend verification email
        </HeroLink>

        {/* <div className="w-full flex items-center gap-2">
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
        </div> */}
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
