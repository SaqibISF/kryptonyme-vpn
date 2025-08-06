"use client";

import React, { FC, ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { DASHBOARD_PAGE_PATH } from "@/lib/pathnames";
import { usePathname } from "next/navigation";
import LogoutModal from "./LogoutModal";

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  return (
    <>
      {!pathname.startsWith(DASHBOARD_PAGE_PATH) && (
        <Navbar pathname={pathname} />
      )}
      <LogoutModal />
      <main className="flex-grow">{children}</main>
      {!pathname.startsWith(DASHBOARD_PAGE_PATH) && <Footer />}
    </>
  );
};

export default MainLayout;
