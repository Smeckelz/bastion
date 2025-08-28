import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export const authOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/", // fallback sign-in page
  },
  callbacks: {
    async redirect({ baseUrl }: any) {
      // Always send users to root ("/") after login
      return baseUrl;
    },
    async session({ session, token }: any) {
      // Expose Discord user ID on session
      session.user.id = token.sub;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
