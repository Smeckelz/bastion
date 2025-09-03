// FILE: lib/auth.ts
import { getServerSession, type NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export const authOptions: NextAuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, account, profile }) {
      // token.sub is the user id for OAuth flows
      // If you have a User table, you can look up your internal ID here and set token.uid
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        // put an ID on the session for your queries
        (session.user as any).id = token.sub;
      }
      return session;
    },
  },
};

export const auth = () => getServerSession(authOptions);
export type Session = Awaited<ReturnType<typeof auth>>;
