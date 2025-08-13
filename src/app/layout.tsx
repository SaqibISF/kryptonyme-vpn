import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import MainLayout from "@/components/MainLayout";

const fontSans = Poppins({
  weight: "400",
  variable: "--font-poppins-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Kryptonyme VPN",
    template: "%s | Kryptonyme VPN",
  },

  description:
    "Kryptonyme VPN offers fast, secure, and anonymous browsing with advanced encryption protocols, providing online privacy and protection.",

  keywords:
    "VPN, privacy, internet security, encrypted connection, anonymous browsing, Saqib Ali, M Saqib Ali, Kryptonyme VPN",

  authors: [
    {
      name: "M Saqib Ali",
      url: "https://www.linkedin.com/in/SaqibISF/",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`bg-background text-foreground font-sans antialiased ${fontSans.variable}`}
      >
        <Providers
          themeProps={{ attribute: "class", defaultTheme: "light" }}
          className="min-h-screen flex flex-col"
        >
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
