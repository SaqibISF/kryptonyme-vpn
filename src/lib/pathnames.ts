export const HOME_PAGE_PATH = "/";

export const FEATURES_PAGE_PATH = "/features";

export const PRICING_PAGE_PATH = "/pricing";

export const DOWNLOADS_PAGE_PATH = "/downloads";

export const LOGIN_PAGE_PATH = "/login";

export const SIGNUP_PAGE_PATH = "/signup";

export const FORGOT_PASSWORD_PAGE_PATH = "/forgot-password";

export const CHECKOUT_PAGE_PATH = (planId: number) =>
  `/checkout?planId=${planId}`;

export const DASHBOARD_PAGE_PATH = "/dashboard";
export const MY_PLANS_PATH_PATH = "/dashboard/my-plans";
export const DEVICES_PATH_PATH = "/dashboard/devices";
