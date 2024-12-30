import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import  CredentialsProvider from "next-auth/providers/credentials";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";


const prisma = new PrismaClient();

export const authOptions:NextAuthOptions =({

    
    adapter: PrismaAdapter(prisma),

    providers:[
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                email:{label:"email", type:"email",placeholder:"Email"},
                password:{label:"password", type:"password",placeholder:"Password"}
            },

            async authorize(credentials, req){
                if (!credentials?.email || !credentials.password)
                    return null;

                const user =await prisma.user.findUnique({
                    where:{email:credentials.email}
                })

                if(!user) return null;

                bcrypt.compare(credentials.password, user.has)
            }
        }),
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