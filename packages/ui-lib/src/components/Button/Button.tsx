import { clsx } from 'clsx';
import type * as React from 'react';

type ReactButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const buttonVariants = ['default', 'primary', 'secondary'] as const;
export type ButtonVariant = (typeof buttonVariants)[number];

export interface ButtonProps extends ReactButtonProps {
  variant?: ButtonVariant;
}

export const DefaultButtonProps = {
  variant: 'default',
} as const;

// ---------- Style Mappings ----------
const baseStyles = 'button button--contained button--small';

const variantStyles: Record<ButtonVariant, string> = {
  default: 'button--contained-default',
  primary: 'button--contained-primary',
  secondary: 'button--contained-secondary',
} as const;
// ------------------------------------

export function Button({
  className, // eslint-disable-line react/prop-types
  variant = DefaultButtonProps.variant,
  children,
  ...props
}: ButtonProps) {
  const styles = clsx(className, baseStyles, variantStyles[variant]);

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}
