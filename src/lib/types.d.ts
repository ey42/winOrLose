import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt"; 

interface Usera {
    id: string
    email: string
    title: string 
    image: string 
    role: string
}
declare module "next-auth"{
    interface Session {
        user: Usera
    }
}

declare module "next-auth/jwt"{
    type JWT = Usera;
}