import {} from "next-auth";

declare module "next-auth" {
  interface User {
    id: number;
    access_token: string;
    name: string;
    email: string;
  }

  interface JWT {
    id: number;
    access_token: string;
    name: string;
    email: string;
  }

  interface Session {
    user: User;
  }
}
