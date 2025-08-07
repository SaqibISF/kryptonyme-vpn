import React, { FC, ReactNode } from "react";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import Sidebar from "@/components/dashboard/Sidebar";
import { ScrollShadow } from "@heroui/scroll-shadow";
import { DrawerContextProvider } from "@/components/dashboard/DrawerContext";

const DashboardLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <DrawerContextProvider>
    <div className="w-full min-h-screen flex">
      <Sidebar />
      <div className="flex-grow bg-default-200">
        <DashboardNavbar />
        <ScrollShadow className="w-full h-[calc(100vh-4.0625rem)] px-4 py-8">
          {children}
        </ScrollShadow>
      </div>
    </div>
  </DrawerContextProvider>
);

export default DashboardLayout;
