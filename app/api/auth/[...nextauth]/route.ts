import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log(
        `${JSON.stringify(user)} ${JSON.stringify(account)} ${JSON.stringify(
          profile
        )} ${email} ${credentials}`
      );
      return true;
    },
    async redirect({ baseUrl }) {
      return `${baseUrl}/home`;
    },
  },
});

export { handler as GET, handler as POST };
