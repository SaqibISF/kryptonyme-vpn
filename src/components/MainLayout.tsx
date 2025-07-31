"use client";

import React, { FC, ReactNode } from "react";
import Navbar from "./Navbar";

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="flex-grow">{children}</main>
    </>
  );
};

export default MainLayout;
