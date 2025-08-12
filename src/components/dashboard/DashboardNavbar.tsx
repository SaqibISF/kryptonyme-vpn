"use client";

import React, { FC } from "react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";

import { MY_PLANS_PATH_PATH } from "@/lib/pathnames";
import { usePathname } from "next/navigation";
import { Button } from "@heroui/button";
import { MenubarIcon } from "@/icons";
import { useDrawerContext } from "./DrawerContext";
import { Avatar, AvatarUser } from "../Avatar";

const DashboardNavbar: FC = () => {
  const pathname = usePathname();
  const pageTitle = pathname === MY_PLANS_PATH_PATH ? "My Plans" : "Dashboard";

  const { onOpenChange } = useDrawerContext();
  return (
    <HeroUINavbar
      position="static"
      maxWidth="full"
      className="bg-default-50 border-b border-divider"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarItem className="lg:hidden">
          <Button variant="light" isIconOnly onPress={() => onOpenChange(true)}>
            <MenubarIcon />
          </Button>
        </NavbarItem>

        <NavbarItem className="text-xl sm:text-2xl font-bold">
          {pageTitle}
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="flex lg:gap-4 gap-3">
          <Avatar className="sm:hidden" skeletonClassName="sm:hidden" />
          <AvatarUser
            className="hidden sm:inline-flex"
            skeletonClassName="hidden sm:inline-flex"
          />
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
};

export default DashboardNavbar;
