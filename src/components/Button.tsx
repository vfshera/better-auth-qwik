import type { ClassList, FunctionComponent, PropsOf } from "@builder.io/qwik";
import { component$, Slot } from "@builder.io/qwik";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "~/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export default component$(
  <C extends string | FunctionComponent = "button">({
    as,
    variant,
    size,
    class: className,
    ...props
  }: { as?: C } & PropsOf<string extends C ? "button" : C> &
    VariantProps<typeof buttonVariants>) => {
    const Component = as || "button";

    return (
      <Component
        class={[cn(buttonVariants({ variant, size })), className as ClassList]}
        {...props}
      >
        <Slot />
      </Component>
    );
  },
);
