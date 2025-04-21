import type { PropsOf } from "@builder.io/qwik";
import { component$, Slot } from "@builder.io/qwik";

export interface LabelProps extends PropsOf<"label"> {}

export default component$<LabelProps>(({ class: classList, ...props }) => {
  return (
    <label {...props} class={["text-lg font-semibold text-white", classList]}>
      <Slot />
    </label>
  );
});
