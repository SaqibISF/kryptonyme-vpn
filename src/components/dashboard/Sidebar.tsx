"use client";

import React, { FC } from "react";

import { Button, Drawer, DrawerContent } from "@heroui/react";
import { cn } from "@/lib/utils";
import {
  DASHBOARD_PAGE_PATH,
  DEVICES_PATH_PATH,
  HOME_PAGE_PATH,
  MY_PLANS_PATH_PATH,
} from "@/lib/pathnames";
import Link from "next/link";
import { useLogout } from "@/hooks/useLogout";
import { usePathname } from "next/navigation";
import { useDrawerContext } from "./DrawerContext";
import {
  CrownIcon,
  GraphIcon,
  QuestionMarkIcon,
  RightFromBracketIcon,
} from "@/icons";
import AppLogo from "../AppLogo";

const SidebarContent: FC<{ className?: string }> = ({ className }) => {
  const pathname = usePathname();
  const { openLogoutModal } = useLogout();
  const { onOpenChange } = useDrawerContext();
  const listItems = [
    {
      href: DASHBOARD_PAGE_PATH,
      name: "Dashboard",
      Icon: GraphIcon,
    },
    {
      href: MY_PLANS_PATH_PATH,
      name: "My Plans",
      Icon: CrownIcon,
    },
    {
      href: DEVICES_PATH_PATH,
      name: "Devices",
      Icon: QuestionMarkIcon,
    },
  ];
  return (
    <aside className={cn("w-64 px-2 pb-4 bg-default-100 border-r border-divider", className)}>
      <ul className="w-full h-full flex flex-col gap-2">
        <li className="pt-4 pb-6">
          <Link href={HOME_PAGE_PATH}>
            <AppLogo />
          </Link>
        </li>
        {listItems.map(({ name, href, Icon }) => (
          <li key={href}>
            <Button
              as={Link}
              href={href}
              color={pathname === href ? "primary" : "default"}
              variant={pathname === href ? "solid" : "light"}
              startContent={<Icon />}
              fullWidth
              className={cn(
                "justify-start",
                pathname === href ? "pointer-events-none" : ""
              )}
              onPress={() => onOpenChange(false)}
            >
              {name}
            </Button>
          </li>
        ))}

        <Button
          as="li"
          color="danger"
          variant="flat"
          startContent={<RightFromBracketIcon />}
          fullWidth
          className="justify-start mt-auto"
          onPress={() => {
            onOpenChange(false);
            openLogoutModal();
          }}
        >
          Log Out
        </Button>
      </ul>
    </aside>
  );
};

const Sidebar: FC = () => {
  const { isOpen, onOpenChange } = useDrawerContext();
  return (
    <>
      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="left"
        className="w-64"
      >
        <DrawerContent>
          <SidebarContent className="w-full h-full" />
        </DrawerContent>
      </Drawer>

      <SidebarContent className="hidden lg:block" />
    </>
  );
};

export default Sidebar;
