import type { RequestHandler } from "@builder.io/qwik-city";
import { auth } from "~/lib/auth";

export const onGet: RequestHandler = async ({ request }) => {
  await auth.handler(request);
};

export const onPost: RequestHandler = async ({ request }) => {
  await auth.handler(request);
};
