import { component$, type PropsOf } from "@builder.io/qwik";

export interface InputProps extends PropsOf<"input"> {}

export default component$<InputProps>(({ class: classList, ...props }) => {
  return (
    <input
      {...props}
      class={["w-full rounded-md border-2 border-gray-300 p-2", classList]}
    />
  );
});
