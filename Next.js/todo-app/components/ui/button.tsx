import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Button styles
const buttonVariants = cva(`
  inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md
  text-sm font-medium transition-all shrink-0 outline-none
  [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4
  [&_svg]:shrink-0

  disabled:pointer-events-none disabled:opacity-50 
   
  focus-visible:border-ring focus-visible:ring-ring/50
  focus-visible:ring-[3px]
  
  aria-invalid:ring-destructive/20 aria-invalid:border-destructive
  dark:aria-invalid:ring-destructive/40
  `,
  {
    variants: {
      variant: {
        default: `
          bg-primary text-primary-foreground shadow-xs hover:bg-primary/90
        `,
        destructive: `
          bg-destructive text-white shadow-xs
          hover:bg-destructive/90 focus-visible:ring-destructive/20
          dark:focus-visible:ring-destructive/40 dark:bg-destructive/60
        `,
        outline: `
          border bg-background shadow-xs
          hover:bg-accent hover:text-accent-foreground
          dark:bg-input/30 dark:border-input dark:hover:bg-input/50
        `,
        secondary: `
          bg-secondary text-secondary-foreground shadow-xs
          hover:bg-secondary/80
        `,
        ghost: `
          hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50
        `,
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// std button props (i.e., onClick, className, etc.), buttonVariants props 
// (i.e., size, varient) and asChild boolean
type ButtonPropTypes = (
  React.ComponentProps<"button">
  & VariantProps<typeof buttonVariants>
  & {asChild?: boolean}
)


/**
  * A customizable button component that supports style variants, sizes, and
  * rendering as a different element using `Slot`.
  * 
  * @param {object} props - The button element's props.
  * @param {string} [props.className] - Additional custom CSS classes to apply to the button element.
  * @param {"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"} [props.variant] - The visual style of the button. Defaults to "default" if not provided.
  * @param {"default" | "sm" | "lg" | "icon"} [props.size] - The size of the button. Defaults to "default" if not provided.
  * @param {boolean} [props.asChild] - If true, renders the button using the `Slot` component instead of a native `<button>`.
  * @param {React.ComponentProps<"button">} props.props - All other button attributes (e.g., `type`, `onClick`, `disabled`, `aria-*`) are passed to the rendered element.
  * 
  * @returns {React.JSX.Element} The customized button element with merged styles and forwarded attributes.
  */
function Button(
  {className, variant, size, asChild = false, ...props}: ButtonPropTypes
):React.JSX.Element {
  const Comp = asChild ? Slot : "button"
  console.log(cn(buttonVariants({ variant, size, className })))
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
