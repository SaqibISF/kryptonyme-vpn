"use client";

import React, { FC, Suspense, useEffect, useState } from "react";
import { notFound, useSearchParams } from "next/navigation";
import axios, { AxiosError } from "axios";
import { EMAIL_VERIFICATION_ROUTE } from "@/lib/constants";
import { addToast, Alert, Spinner } from "@heroui/react";
import Section from "@/components/Section";
import { ErrorIcon, VerifiedIcon } from "@/icons";

const EmailVerificationPage: FC = () => {
  const searchParams = useSearchParams();
  const expires = searchParams.get("expires");
  const hash = searchParams.get("hash");
  const id = searchParams.get("id");
  const signature = searchParams.get("signature");

  if (!expires || !hash || !id || !signature) {
    notFound();
  }

  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const verification = async () => {
      try {
        setLoading(true);
        const res = await axios
          .get<{ status: boolean; message: string }>(
            EMAIL_VERIFICATION_ROUTE(id!, hash!),
            {
              params: {
                expires,
                signature,
              },
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
          setSuccessMessage(res.message);
        } else {
          addToast({
            color: "danger",
            description: res.message,
          });
          setErrorMessage(res.message);
        }
      } catch (error) {
        const errorMessage =
          error instanceof AxiosError
            ? error.response
              ? error.response.data.message
              : error.message
            : "";
        addToast({
          color: "danger",
          description: errorMessage,
        });
        setErrorMessage(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    verification();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Section isHeroSection bgDefault>
      <div className="flex flex-col items-center justify-center gap-4">
        {isLoading && (
          <Spinner
            size="lg"
            color="current"
            variant="spinner"
            label="Verifying..."
            className="space-y-8"
            classNames={{ wrapper: "size-32", label: "text-xl font-bold" }}
          />
        )}

        {errorMessage && (
          <>
            <ErrorIcon className="size-48 text-danger-500" />
            <h3 className="text-2xl font-bold text-danger-500">An Error</h3>
            <Alert color="danger" title={errorMessage} />
          </>
        )}

        {successMessage && (
          <>
            <VerifiedIcon className="size-48 text-success-500" />
            <h3 className="text-2xl font-bold text-success-500">Verified</h3>
            <Alert color="success" title={successMessage} />
          </>
        )}
      </div>
    </Section>
  );
};

const Page: FC = () => (
  <Suspense>
    <EmailVerificationPage />
  </Suspense>
);

export default Page;
