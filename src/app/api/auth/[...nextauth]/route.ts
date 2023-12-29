import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import User from "@/models/users"
import connect from "@/utils/database"
import { Account, Session, User as AuthUser } from "next-auth"

const handler = NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? "",
        }),
    ],
    callbacks: {
        async signIn({ user, account }: { user: AuthUser, account: Account | null }) {
            if (!account) {
                throw new Error("Account is null");
            }
            await connect();
            try{
                const existingUser = await User.findOne({ githubId: user.id });
                if(!existingUser){
                    await User.create({
                        username: user.name ?? user.email ?? "",
                        email: user.email ?? "",
                        githubId: user.id,
                        createdAt: new Date().toISOString(),
                    });
                    return true;
                }
                return true;
            }
            catch(error){
                console.log(error);
                return false;
            }
        }
    },
})

export { handler as GET, handler as POST }