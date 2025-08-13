import React from "react";
import Link from "next/link";
import { Button } from "@heroui/button";
import Section from "@/components/Section";
import { Alert } from "@heroui/alert";
import { HOME_PAGE_PATH } from "@/lib/pathnames";

const NotFoundPage = () => (
  <Section isHeroSection className="gap-y-6 items-center text-center">
    <div className="flex flex-col items-center gap-4">
      <span className="text-7xl font-bold text-danger-500">404</span>
      <h1 className="text-3xl font-semibold">Page Not Found</h1>
      <Alert
        color="danger"
        title="Sorry, the page you are looking for does not exist."
        className="w-fit flex-grow-0"
      />
      <Button
        as={Link}
        href={HOME_PAGE_PATH}
        color="primary"
        variant="shadow"
        className="mt-4"
      >
        Go to Home
      </Button>
    </div>
  </Section>
);

export default NotFoundPage;
