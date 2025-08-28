import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

console.log("🔑 Env check:", {
  DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
  DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET ? "set" : "missing",
  DATABASE_URL: process.env.DATABASE_URL ? "set" : "missing",
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET ? "set" : "missing",
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
});

const handler = NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/",
  },
  callbacks: {
    async redirect({ baseUrl }) {
      return baseUrl; // always go back to "/"
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.sub;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
