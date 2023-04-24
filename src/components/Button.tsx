import { cva, type VariantProps } from 'cva'
import Link from 'next/link'
import { forwardRef } from 'react'

/**
 * Styles
 */
const ButtonStyles = cva(
  'inline-flex font-sans justify-center rounded-full py-3 px-4 text-sm font-semibold outline-2 outline-offset-2 transition-colors relative overflow-hidden',
  {
    variants: {
      color: {
        primary:
          'bg-accent-500 text-siteBackground before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-accent-600 active:text-white/80 before:transition-colors',
      },
      weight: {
        solid:
          'inline-flex font-sans justify-center rounded-full py-3 px-4 text-sm font-semibold outline-2 outline-offset-2 transition-colors',
        outline:
          'border-2 border-accent-500 px-12 py-5 text-center font-sans text-sm font-bold uppercase text-accent-500 hover:bg-accent-500 hover:text-siteBackground',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-fit',
      },
    },
    compoundVariants: [
      {
        color: 'primary',
        weight: 'outline',
        class:
          'w-full rounded-full bg-transparent border-2 border-accent-500 px-12 py-5 text-center font-sans text-sm font-bold uppercase !text-accent-500 hover:bg-accent-500 hover:!text-siteBackground',
      },
    ],
    defaultVariants: {
      color: 'primary',
      weight: 'solid',
      fullWidth: false,
    },
  }
)

/**
 * Types
 */
export type ButtonBaseProps = VariantProps<typeof ButtonStyles>
export interface ButtonProps extends ButtonBaseProps {
  href: string
  className: string
}

/**
 * Component
 */
export function Button({
  color,
  weight,
  fullWidth,
  href,
  className,
  ...props
}: ButtonProps) {
  return href ? (
    <Link
      href={href}
      className={ButtonStyles({ color, weight, fullWidth, className })}
      {...props}
    />
  ) : (
    <button
      className={ButtonStyles({ color, weight, fullWidth, className })}
      {...props}
    />
  )
}
