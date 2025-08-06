"use client";

import React, { FC, ReactNode } from "react";
import {
  AvatarProps,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Avatar as HeroAvatar,
  Skeleton,
  User,
  UserProps,
} from "@heroui/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { PRICING_PAGE_PATH } from "@/lib/pathnames";
import { useLogout } from "@/hooks/useLogout";
import { User as UserTypes } from "next-auth";
import { cn } from "@/lib/utils";

const AvatarDropdown: FC<{ user: UserTypes; children: ReactNode }> = ({
  user,
  children,
}) => {
  const { openLogoutModal } = useLogout();
  return (
    <Dropdown
      showArrow
      classNames={{
        base: "before:bg-default-200",
        content: "p-0 border-small border-divider bg-background",
      }}
      radius="sm"
    >
      <DropdownTrigger>{children}</DropdownTrigger>
      <DropdownMenu
        aria-label="Custom item styles"
        className="p-3"
        disabledKeys={["profile"]}
        itemClasses={{
          base: [
            "rounded-md",
            "text-default-500",
            "transition-opacity",
            "data-[hover=true]:text-foreground",
            "data-[hover=true]:bg-default-100",
            "dark:data-[hover=true]:bg-default-50",
            "data-[selectable=true]:focus:bg-default-50",
            "data-[pressed=true]:opacity-70",
            "data-[focus-visible=true]:ring-default-500",
          ],
        }}
      >
        <DropdownSection showDivider aria-label="Profile">
          <DropdownItem
            key="profile"
            isReadOnly
            className="h-14 gap-2 opacity-100"
          >
            <User
              avatarProps={{
                size: "sm",
                // src: user.avatar,
                showFallback: false,
              }}
              classNames={{
                name: "text-default-600",
                description: "text-default-500",
              }}
              description={user.email}
              name={user.name}
            />
          </DropdownItem>
        </DropdownSection>

        <DropdownSection showDivider aria-label="Actions">
          <DropdownItem key="pricing" as={Link} href={PRICING_PAGE_PATH}>
            Pricing
          </DropdownItem>
        </DropdownSection>

        <DropdownSection aria-label="Help & Feedback">
          <DropdownItem key="logout" onPress={openLogoutModal}>
            Log Out
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};

const Avatar: FC<AvatarProps & { skeletonClassName?: string }> = ({
  className,
  skeletonClassName,
  ...props
}) => {
  const { data: session, status: authStatus } = useSession();
  return authStatus === "authenticated" ? (
    <AvatarDropdown user={session.user}>
      <HeroAvatar
        as="button"
        showFallback={false}
        // src={session.user.avatar}
        className={cn("transition-transform", className)}
        {...props}
      />
    </AvatarDropdown>
  ) : authStatus === "loading" ? (
    <Skeleton
      className={cn("w-10 h-10 rounded-full bg-default-200", skeletonClassName)}
    />
  ) : null;
};

const AvatarUser: FC<
  Omit<UserProps, "name" | "description" | "avatarProps"> & {
    skeletonClassName?: string;
  }
> = ({ className, skeletonClassName, ...props }) => {
  const { data: session, status: authStatus } = useSession();
  return authStatus === "authenticated" ? (
    <AvatarDropdown user={session.user}>
      <User
        as="button"
        avatarProps={{
          // src: session.user.avatar,
          showFallback: false,
        }}
        className={cn("transition-transform", className)}
        description={session.user.email}
        name={session.user.name}
        {...props}
      />
    </AvatarDropdown>
  ) : authStatus === "loading" ? (
    <div
      className={cn("flex items-center gap-3 animate-pulse", skeletonClassName)}
    >
      <Skeleton className="w-10 h-10 rounded-full bg-default-200" />
      <div className="flex flex-col gap-1">
        <Skeleton className="w-24 h-4 rounded bg-default-200" />
        <Skeleton className="w-16 h-3 rounded bg-default-100" />
      </div>
    </div>
  ) : null;
};

export { Avatar, AvatarUser };
