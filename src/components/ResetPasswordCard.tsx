"use client";

import React, { FC } from "react";
import {
  addToast,
  Alert,
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
import { LockIcon } from "@/icons";
import { notFound, useRouter, useSearchParams } from "next/navigation";
import z from "zod";
import { choosePasswordSchema } from "@/lib/zod-schemas";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import { RESET_PASSWORD_ROUTE } from "@/lib/constants";

const ResetPasswordCard: FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("token");

  if (!email || !token) {
    notFound();
  }

  const schema = z
    .object({
      password: choosePasswordSchema,
      confirm_password: z.string().min(1, "Please confirm your password"),
    })
    .refine((data) => data.password === data.confirm_password, {
      message: "Passwords do not match",
      path: ["confirm_password"],
    });

  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
    setError,
    reset,
    setFocus,
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { password: "", confirm_password: "" },
  });

  const resetPassword: SubmitHandler<z.infer<typeof schema>> = async (
    values
  ) => {
    try {
      const res = await axios
        .post<{ status: boolean; message: string }>(
          RESET_PASSWORD_ROUTE,
          {
            token,
            email,
            password: values.password,
            password_confirmation: values.confirm_password,
          },
          {
            headers: {
              Accept: "application/json",
            },
          }
        )
        .then((res) => res.data);

      if (res.status) {
        addToast({
          color: "success",
          description: res.message,
        });
        reset();
        router.push(LOGIN_PAGE_PATH);
      } else {
        addToast({
          color: "danger",
          description: res.message,
        });
        setError("root", { type: "manual", message: res.message });
        reset();
        setFocus("password");
      }
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError
          ? error.response
            ? error.response.data.message
            : error.message
          : "Failed to reset password";
      reset();
      setFocus("password");
      setError("root", { type: "manual", message: errorMessage });
      addToast({
        color: "danger",
        description: errorMessage,
      });
    }
  };

  return (
    <Card
      as="form"
      onSubmit={handleSubmit(resetPassword)}
      className="p-6 w-full max-w-md"
    >
      <CardHeader className="flex-col gap-y-2">
        <h1 className="text-2xl font-bold">Reset Password</h1>
        <p className="text-default-500 text-base">
          Secure Your Account with a New Password
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
          label="New Password"
          type="password"
          placeholder="Enter your new Password"
          startContent={<LockIcon className="size-5 text-default-500" />}
          errorMessage={errors.password?.message}
          {...register("password")}
        />
        <Input
          isRequired
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          startContent={<LockIcon className="size-5 text-default-500" />}
          errorMessage={errors.confirm_password?.message}
          {...register("confirm_password")}
        />
      </CardBody>
      <CardFooter className="flex-col gap-y-4">
        <Button
          type="submit"
          isLoading={isSubmitting}
          color="primary"
          size="lg"
          fullWidth
        >
          Submit
        </Button>

        <HeroLink as={Link} href={LOGIN_PAGE_PATH}>
          Back to Login
        </HeroLink>
      </CardFooter>
    </Card>
  );
};

export default ResetPasswordCard;
