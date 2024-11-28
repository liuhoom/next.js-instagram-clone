import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import { signIn } from 'next-auth/react'

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      httpOptions: {
        timeout: 10000,
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      redirectUri:
        process.env.GOOGLE_REDIRECT_URI ||
        'http://localhost:3001/api/auth/callback/googleflowName=GeneralOAuthFlow',
      httpOptions: {
        timeout: 100000,
      },
    }),
  ],

  pages: {
    signIn: '/auth/signin',
  },
}

export default NextAuth(authOptions)
