import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="no-visible-scrollbar flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-6 md:px-0">
      <div class="flex items-center gap-2">
        <svg
          class="size-24"
          width="500"
          height="500"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="500" height="500" fill="black" />
          <rect x="69" y="121" width="86.9879" height="259" fill="white" />
          <rect x="337.575" y="121" width="92.4247" height="259" fill="white" />
          <rect
            x="427.282"
            y="121"
            width="83.4555"
            height="174.52"
            transform="rotate(90 427.282 121)"
            fill="white"
          />
          <rect
            x="430"
            y="296.544"
            width="83.4555"
            height="177.238"
            transform="rotate(90 430 296.544)"
            fill="white"
          />
          <rect
            x="252.762"
            y="204.455"
            width="92.0888"
            height="96.7741"
            transform="rotate(90 252.762 204.455)"
            fill="white"
          />
        </svg>
        <p class="text-3xl font-bold">Better Auth</p>
      </div>
      <div class="mt-4 flex items-center justify-center gap-5 *:rounded-lg *:border *:border-white *:px-4 *:py-1.5">
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
