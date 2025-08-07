import React, { FC } from "react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { TickIcon } from "@/icons";
import { Button } from "@heroui/button";
import { Alert } from "@heroui/alert";

const MyPlansPage: FC = () => {
  return (
    <Card className="p-4">
      <CardHeader>
        <h4 className="text-lg font-semibold">Current Plan</h4>
      </CardHeader>
      <CardBody className="gap-4">
        <h5 className="text-lg font-medium">
          Premium Plan{" "}
          <Chip color="primary" size="sm">
            Active
          </Chip>
        </h5>

        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-default-500 text-base">
              Your plan renews on{" "}
              <span className="text-default-600 font-medium">May 15, 2024</span>
            </p>

            <div className="flex gap-4">
              {["Unlimited Bandwidth", "5 Devices", "80+ Locations"].map(
                (item, index) => (
                  <Chip
                    key={index}
                    color="secondary"
                    variant="flat"
                    startContent={<TickIcon className="size-4" />}
                    className="px-2"
                  >
                    {item}
                  </Chip>
                )
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <Button color="primary" variant="bordered" size="lg">
              Change Plan
            </Button>
            <Button color="danger" variant="flat" size="lg">
              Cancel Subscription
            </Button>
          </div>
        </div>

        <Alert color="success" title="Save 40% by switching to an Annual Plan!" />

      </CardBody>
    </Card>
  );
};

export default MyPlansPage;
