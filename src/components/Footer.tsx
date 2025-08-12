import React, { FC } from "react";
import AppLogo from "./AppLogo";
import {
  FacebookFIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/icons";
import Link from "next/link";
import {
  DASHBOARD_PAGE_PATH,
  DOWNLOADS_PAGE_PATH,
  FEATURES_PAGE_PATH,
  MY_PLANS_PATH_PATH,
  PRICING_PAGE_PATH,
  PRIVACY_POLICY_PAGE_PATH,
  TERMS_OF_SERVICES_PAGE_PATH,
} from "@/lib/pathnames";
import { Divider } from "@heroui/divider";

const Footer: FC = () => (
  <footer className="w-full bg-[#2C2C2C]">
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="w-full py-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div className="flex flex-col gap-4 col-span-2 md:col-span-3 lg:col-span-2">
          <AppLogo className="text-white" />
          <p className="text-default-500 text-base">
            Protecting your online privacy with military-grade encryption and
            lightning-fast servers worldwide.
          </p>
          <ul className="flex items-center gap-4">
            {[
              { href: "https://facebook.com", Icon: FacebookFIcon },
              { href: "https://x.com", Icon: TwitterIcon },
              { href: "https://instagram.com", Icon: InstagramIcon },
              { href: "https://linkedin.com", Icon: LinkedInIcon },
            ].map(({ href, Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  className="text-[#9CA3AF] hover:text-[#9CA3AF]/80 duration-300 transition-colors"
                >
                  <Icon className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {[
          {
            heading: "Products",
            links: [
              { name: "Downloads", href: DOWNLOADS_PAGE_PATH },
              { name: "Pricing", href: PRICING_PAGE_PATH },
              { name: "Features", href: FEATURES_PAGE_PATH },
            ],
          },
          {
            heading: "Dashboard",
            links: [
              { name: "Dashboard", href: DASHBOARD_PAGE_PATH },
              { name: "My Plans", href: MY_PLANS_PATH_PATH },
            ],
          },
          {
            heading: "Legal",
            links: [
              { name: "Privacy Policy", href: PRIVACY_POLICY_PAGE_PATH },
              { name: "Terms of Use", href: TERMS_OF_SERVICES_PAGE_PATH },
            ],
          },
        ].map(({ heading, links }) => (
          <section key={heading} className="w-full px-4 flex flex-col gap-4">
            <h4 className="text-white text-lg font-semibold">{heading}</h4>
            <ul className="text-lg flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.name + link.href}
                  href={link.href}
                  className="text-sm font-medium text-default-500"
                >
                  {link.name}
                </Link>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <Divider className="bg-default-500" />

      <div className="w-full flex justify-between items-center py-4 lg:py-6">
        <div className="text-sm text-default-500">
          © 2025 KryptonymeVPN. All rights reserved.
        </div>
        <div className="text-base text-default-500">
          <span>Powered by </span>
          <Link
            href="https://www.tecclubx.com/"
            target="_blank"
            className="text-accent font-bold"
          >
            Tecclub
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
