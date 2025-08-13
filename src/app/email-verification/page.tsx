import { Metadata } from "next";
import React from "react";
import { notFound } from "next/navigation";
import axios, { AxiosError } from "axios";
import { EMAIL_VERIFICATION_ROUTE } from "@/lib/constants";
import { Alert } from "@heroui/alert";
import Section from "@/components/Section";
import { ErrorIcon, VerifiedIcon } from "@/icons";

export const metadata: Metadata = { title: "Email Verification" };

type SearchParams = Promise<{
  expires: string | null;
  hash: string | null;
  id: string | null;
  signature: string | null;
}>;

const verifyEmail = async (
  searchParams: SearchParams
): Promise<{ status: boolean; message: string }> => {
  const { expires, hash, id, signature } = await searchParams;

  if (!expires || !hash || !id || !signature) {
    notFound();
  }

  try {
    const res = await axios.get<{ status: boolean; message: string }>(
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
    );
    return res.data;
  } catch (error) {
    const errorMessage =
      error instanceof AxiosError
        ? error.response
          ? error.response.data.message
          : error.message
        : error instanceof Error
        ? error.message
        : "An unexpected error occurred.";

    return { status: false, message: errorMessage };
  }
};

const EmailVerificationPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const { status, message } = await verifyEmail(searchParams);

  return (
    <Section isHeroSection bgDefault>
      <div className="flex flex-col items-center justify-center gap-4">
        {status ? (
          <>
            <VerifiedIcon className="size-48 text-success-500" />
            <h3 className="text-2xl font-bold text-success-500">Verified</h3>
            <Alert color="success" title={message} />
          </>
        ) : (
          <>
            <ErrorIcon className="size-48 text-danger-500" />
            <h3 className="text-2xl font-bold text-danger-500">An Error</h3>
            <Alert color="danger" title={message} />
          </>
        )}
      </div>
    </Section>
  );
};

export default EmailVerificationPage;
