import * as React from "react"
import { cn } from "@/lib/utils"


const style = `
  flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent
  px-3 py-1 text-base shadow-xs transition-[color, box-shadow] outline-none
  md:text-sm placeholder:text-muted-foreground selection:bg-primary
  selection:text-primary-foreground
  
  dark:bg-input/30 dark:aria-invalid:ring-destructive/40
  
  disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 
  
  focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
  
  aria-invalid:ring-destructive/20aria-invalid:border-destructive
  
  file:text-foreground file:inline-flex file:h-7 file:border-0
  file:bg-transparent file:text-sm file:font-medium
`

/**
 * A customizable input component that forwards all props to the native 
 * `<input>` element, while allowing you to specify a custom 
 * `className` and `type`.
 * 
 * @param {object} props - The input element's props.
 * @param {string} [props.className] - Additional custom CSS classes to apply to the input element.
 * @param {string} [props.type] - The type of the input (e.g., "text", "email", "password"). Defaults to "text" if not provided.
 * @param {React.ComponentProps<"input">} props.props - All other input attributes (e.g., `placeholder`, `disabled`, `aria-*`) are passed to the native `<input>` element.
 * 
 * @returns {React.JSX.Element} The customized input element with merged styles and provided attributes.
 */
function Input(
  { className, type="text", ...props }: React.ComponentProps<"input">
): React.JSX.Element {


  return (
    <input
      type={type}
      data-slot="input"
      className={cn(style, className)}
      {...props}
    />
  )
}

export { Input }
