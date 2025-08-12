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
  Link as HeroLink,
} from "@heroui/react";
import Input from "./ui/Input";
import Link from "next/link";
import { LOGIN_PAGE_PATH } from "@/lib/pathnames";
import { EnvelopeIcon } from "@/icons";
import z from "zod";
import { emailSchema } from "@/lib/zod-schemas";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import { RESENT_EMAIL_VERIFICATION_ROUTE } from "@/lib/constants";

const ResendVerificationEmailCard: FC = () => {
  const [successMessage, setSuccessMessage] = useState<string>("");

  const schema = z.object({ email: emailSchema });

  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
    setError,
    reset,
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { email: "" },
  });

  const submit: SubmitHandler<z.infer<typeof schema>> = async (values) => {
    try {
      const res = await axios
        .post<{ status: boolean; message: string }>(
          RESENT_EMAIL_VERIFICATION_ROUTE,
          values
        )
        .then((res) => res.data);

      if (res.status) {
        reset();
        addToast({ color: "success", description: res.message });
        setSuccessMessage(res.message);
      } else {
        addToast({ color: "danger", description: res.message });
        setError("root", { type: "manual", message: res.message });
      }
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError
          ? error.response?.data.message
          : error instanceof Error
          ? error.message
          : "Failed to sent email";

      addToast({ color: "danger", description: errorMessage });
      setError("root", { type: "manual", message: errorMessage });
    }
  };

  return (
    <Card
      as="form"
      onSubmit={handleSubmit(submit)}
      className="p-6 w-full max-w-md"
    >
      <CardHeader className="flex-col gap-y-2">
        <h1 className="text-2xl font-bold">Resend Verification Link</h1>
        <p className="text-default-500 text-base">
          Enter your email address to receive a new verification link.
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

export default ResendVerificationEmailCard;
