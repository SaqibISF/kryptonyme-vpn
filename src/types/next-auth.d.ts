import {} from "next-auth";

declare module "next-auth" {
  interface User {
    id: number;
    access_token: string;
    name: string;
    email: string;
    rememberMe?: boolean;
  }

  interface JWT {
    id: number;
    access_token: string;
    name: string;
    email: string;
    rememberMe?: boolean;
  }

  interface Session {
    user: User;
  }
}
