import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

// Define authentication options using NextAuthOptions interface
export const authOptions: NextAuthOptions = {
  // added secret key
  secret: process.env.NEXT_PUBLIC_SECRET,
  // Configure authentication providers
  providers: [
    GoogleProvider({
      // Configure Google authentication provider with environment variables
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  adapter: PrismaAdapter(prisma),
};

export default NextAuth(authOptions);
