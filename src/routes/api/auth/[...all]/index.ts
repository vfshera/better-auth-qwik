import type { RequestHandler } from "@builder.io/qwik-city";
import { auth } from "~/lib/auth";

export const onGet: RequestHandler = async ({ request, send }) => {
  const response = await auth.handler(request);

  send(response.status, await response.text());
};

export const onPost: RequestHandler = async ({ request, send }) => {
  const response = await auth.handler(request);

  send(response.status, await response.text());
};
