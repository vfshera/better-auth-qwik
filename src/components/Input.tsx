import type { PropsOf } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import { cn } from "~/utils";

export default component$<PropsOf<"input">>(
  ({ class: className, ...props }) => {
    return (
      <input
        {...props}
        class={cn(
          "border-input file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
      />
    );
  },
);
