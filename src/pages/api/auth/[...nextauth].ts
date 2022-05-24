import instance from "modules/apiInstance";
import NextAuth from "next-auth";
// import EmailProvider from "next-auth/providers/email";
import Credentials from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    Credentials({
      id: "login",
      name: "Credentials",
      credentials: {
        identifier: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await instance.post("/auth/local", credentials);

        // --------------- test
        // const bb = { identifier: "omid@omid.com", password: "testtest" };
        // if (bb) {
        //   return bb;
        // }
        // -----------------
        if (res.statusText === "OK") {
          return res.data.user;
        }
        // If you return null then an error will be displayed advising the user to check their details.
        return null;

        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      },
    }),
  ],
  callbacks: {
    async jwt({ account, token, user }) {
      if (user) {
        token.user = user;
        token.accessToken = user.jwt;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as any;
      session.accessToken = token.accessToken;
      console.log("back session: ", session);
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  pages: {
    error: "/auth/error",
  },
  session: {
    maxAge: 15 * 24 * 60 * 60,
  },
});
