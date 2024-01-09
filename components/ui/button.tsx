import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'vs-inline-flex vs-items-center vs-justify-center vs-whitespace-nowrap vs-rounded-md vs-text-sm vs-font-medium vs-transition-colors focus-visible:vs-outline-none focus-visible:vs-ring-1 focus-visible:vs-ring-ring disabled:vs-pointer-events-none disabled:vs-opacity-50',
  {
    variants: {
      variant: {
        default: 'vs-bg-primary vs-text-primary-foreground vs-shadow hover:vs-bg-brand-green-100',
        destructive: 'vs-bg-destructive vs-text-destructive-foreground vs-shadow-sm hover:vs-bg-destructive/90',
        outline:
          'vs-border vs-border-input vs-bg-background vs-shadow-sm hover:vs-bg-accent hover:vs-text-accent-foreground',
        secondary: 'vs-bg-secondary vs-text-secondary-foreground vs-shadow-sm hover:vs-bg-secondary/80',
        ghost: 'hover:vs-bg-accent hover:vs-text-accent-foreground',
        link: 'vs-text-primary vs-underline-offset-4 hover:vs-underline',
      },
      size: {
        default: 'vs-h-9 vs-px-4 vs-py-2',
        sm: 'vs-h-8 vs-rounded-md vs-px-3 vs-text-xs',
        lg: 'vs-h-10 vs-rounded-md vs-px-8',
        icon: 'vs-h-9 vs-w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
