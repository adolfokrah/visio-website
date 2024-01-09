import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "vs-inline-flex vs-items-center vs-rounded-md vs-border vs-px-2.5 vs-py-0.5 vs-text-xs vs-font-semibold vs-transition-colors focus:vs-outline-none focus:vs-ring-2 focus:vs-ring-ring focus:vs-ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "vs-border-transparent vs-bg-primary vs-text-primary-foreground vs-shadow hover:vs-bg-primary/80",
        secondary:
          "vs-border-transparent vs-bg-secondary vs-text-secondary-foreground hover:vs-bg-secondary/80",
        destructive:
          "vs-border-transparent vs-bg-destructive vs-text-destructive-foreground vs-shadow hover:vs-bg-destructive/80",
        outline: "vs-text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
