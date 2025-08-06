import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import {
  DASHBOARD_PAGE_PATH,
  HOME_PAGE_PATH,
  LOGIN_PAGE_PATH,
  SIGNUP_PAGE_PATH,
} from "./lib/pathnames";

export const middleware = async (req: NextRequest) => {
  const session = await auth();

  if (req.nextUrl.pathname.includes(DASHBOARD_PAGE_PATH)) {
    if (!session) {
      return NextResponse.redirect(new URL(LOGIN_PAGE_PATH, req.url));
    }
  } else if (
    req.nextUrl.pathname === LOGIN_PAGE_PATH ||
    req.nextUrl.pathname === SIGNUP_PAGE_PATH
  ) {
    if (session) {
      return NextResponse.redirect(new URL(HOME_PAGE_PATH, req.url));
    }
  }

  return NextResponse.next();
};

export const config: MiddlewareConfig = {
  matcher: ["/dashboard/:path*", "/login", "/signup"],
};
