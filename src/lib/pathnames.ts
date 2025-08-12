export const HOME_PAGE_PATH = "/";

export const FEATURES_PAGE_PATH = "/features";

export const PRICING_PAGE_PATH = "/pricing";

export const DOWNLOADS_PAGE_PATH = "/downloads";

export const LOGIN_PAGE_PATH = "/login";

export const SIGNUP_PAGE_PATH = "/signup";

export const FORGOT_PASSWORD_PAGE_PATH = "/forgot-password";

export const RESET_PASSWORD_PAGE_PATH = "/reset-password";

export const RESEND_VERIFICATION_EMAIL_PAGE_PATH = "/resend-verification-email";

export const EMAIL_VERIFICATION_PAGE_PATH = "/email-verification";

export const CHECKOUT_PAGE_PATH = (planId: number) =>
  `/checkout?planId=${planId}`;

export const DASHBOARD_PAGE_PATH = "/dashboard";
export const MY_PLANS_PATH_PATH = "/dashboard/my-plans";

export const TERMS_OF_SERVICES_PAGE_PATH = "/terms-of-services";
export const PRIVACY_POLICY_PAGE_PATH = "/privacy-policy";
