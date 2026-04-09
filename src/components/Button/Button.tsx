import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { focusRingVariants } from "src/styles.js";
import { cn } from "src/utils/classnames.js";

const buttonVariants = cva(
	[
		"inline-flex items-center gap-2 whitespace-nowrap overflow-hidden text-decoration-none cursor-pointer",
		"disalbed:cursor-default disabled:pointer-events-none disabled:opacity-50",

		focusRingVariants(),
	],
	{
		variants: {
			size: {
				xs: [
					"text-xxs font-bold",
					'rounded-md min-w-6 h-6 px-2 gap-1 [&_svg:not([class*="size-"])]:size-3',
				],
				sm: [
					"text-xs font-bold",
					'rounded-lg min-w-7.5 h-7.5 px-2 gap-1 [&_svg:not([class*="size-"])]:size-3',
				],
				default: [
					"text-sm font-bold",
					'rounded-lg min-w-8 h-8 px-3 [&_svg:not([class*="size-"])]:size-4',
				],
				lg: [
					"text-base font-bold",
					'rounded-xl min-w-10 h-10 px-4 [&_svg:not([class*="size-"])]:size-4',
				],
			},

			variant: {
				default:
					"bg-background-inverse text-background-primary hover:bg-primary/80",
				secondary:
					"bg-background-secondary text-primary border-1 border-border-button hover:border-border-hover hover:bg-background-hover",
				outline:
					"bg-transparent text-primary border-1 border-current hover:opacity-80",
				ghost:
					"bg-transparent text-primary/80 hover:bg-background-inverse/15 hover:text-primary",
				destructive: "bg-destructive text-white hover:bg-destructive/80",
				link: "text-primary underline-offset-4 hover:underline",
			},

			iconOnly: {
				true: "p-0 shrink-0 items-center justify-center",
			},
		},

		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

function Button({
	className,
	variant,
	size,
	iconOnly,
	...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
	return (
		<ButtonPrimitive
			data-slot="button"
			className={cn(buttonVariants({ variant, size, iconOnly }), className)}
			{...props}
		/>
	);
}

export { Button, buttonVariants };
