import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import env from "~/env";
import { db, schema } from "../db";

export const auth = betterAuth({
  appName: "BetterAuth Qwik",
  basePath: "/api/auth",
  baseURL: env.BETTER_AUTH_URL,
  emailAndPassword: { enabled: true },
  socialProviders: {
    github: {
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    },
  },
  database: drizzleAdapter(db, {
    provider: "pg",
    usePlural: true,
    schema,
  }),
});
