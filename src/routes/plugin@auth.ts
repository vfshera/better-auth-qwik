import type { RequestHandler } from "@builder.io/qwik-city";
import { auth } from "~/lib/auth";

export const onRequest: RequestHandler = async ({
  request,
  next,
  sharedMap,
}) => {
  const session = await auth.api.getSession({ headers: request.headers });

  if (session) {
    sharedMap.set("user", session.user);
    sharedMap.set("session", session);
    sharedMap.set("isAuthenticated", true);
  } else {
    sharedMap.set("user", null);
    sharedMap.set("session", null);
    sharedMap.set("isAuthenticated", false);
  }

  await next();
};
