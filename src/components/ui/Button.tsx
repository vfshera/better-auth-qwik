import type { PropsOf } from "@builder.io/qwik";
import { component$, Slot } from "@builder.io/qwik";

export interface ButtonProps extends PropsOf<"button"> {}

export default component$<ButtonProps>(({ class: classList, ...props }) => {
  return (
    <button {...props} class={["rounded-md px-5 py-3", classList]}>
      <Slot />
    </button>
  );
});
