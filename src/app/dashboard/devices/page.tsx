import React, { FC } from "react";
import { LaptopIcon } from "@/icons";
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";

const DevicesPage: FC = () => {
  const devices = [
    {
      deviceName: "MacBook Pro",
      ipAddress: "192.168.1.101",
      Icon: LaptopIcon,
      status: "online",
      dataUsage: "84.2 GB",
      lastActive: "Now",
    },
  ];
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold">Connected Devices</h1>
      <table className="lg:w-[calc(100vw-18rem)] w-[calc(100vw-2rem)] overflow-scroll prose-th:px-4 prose-th:py-1 prose-td:px-4 prose-td:py-2 prose-tr:border-b prose-tr:border-divider">
        <thead>
          <tr>
            {["Device", "Status", "Data Used", "Last Active", "Actions"].map(
              (column, index) => (
                <th
                  key={index}
                  className="text-default-600 text-base font-medium text-start"
                >
                  {column}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody className="prose-tr:bg-background">
          {devices.map(
            (
              { deviceName, ipAddress, Icon, status, dataUsage, lastActive },
              index
            ) => (
              <tr key={index}>
                <td className="flex gap-1.5">
                  <span className="size-12 bg-blue-300 text-blue-500 rounded-full grid place-items-center">
                    <Icon className="size-8" />
                  </span>
                  <div>
                    <h6 className="text-base font-medium">{deviceName}</h6>
                    <p className="text-default-500">{ipAddress}</p>
                  </div>
                </td>

                <td>
                  <Chip color="primary" size="sm">
                    {status}
                  </Chip>
                </td>
                <td>{dataUsage}</td>
                <td>{lastActive}</td>
                <td>
                  <Button color="danger" variant="flat" size="sm">
                    Disconnect
                  </Button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DevicesPage;
