import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { adapter } from "next/dist/server/web/adapter";

const prisma = new PrismaClient();

export const authOptions:NextAuthOptions =({

    
    adapter: PrismaAdapter(prisma),

    providers:[
        GoogleProvider({
            clientId: process.env.GOGGLE_CLIENT_ID !,
            clientSecret: process.env.GOGGLE_CLIENT_SECRET !
        })
    ],
    session:{
        strategy:"jwt"
    }
})
const handler= NextAuth(authOptions)

export {handler as GET, handler as POST}