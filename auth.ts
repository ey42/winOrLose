// import { PrismaAdapter } from "@auth/prisma-adapter";
import type {NextAuthConfig} from "next-auth"
import NextAuth from "next-auth";
import Google from "next-auth/providers/google"
// import { prisma } from "@/lib/prisma";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

const config = {
   
    // adapter: PrismaAdapter(prisma),
    providers: [Google],
  
} satisfies NextAuthConfig;

export const {handlers, auth, signOut, signIn} = NextAuth(config);