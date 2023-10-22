'use client'

import { twMerge } from 'tailwind-merge'
import { tv, VariantProps } from 'tailwind-variants'

const valueVariants = tv({
  slots: {
    valueStyles: 'text-brand-blue',
    unitStyles: 'text-lightgreen-50',
  },

  variants: {
    size: {
      lg: { valueStyles: 'text-2xl', unitStyles: 'text-xl' },
      'lg-md': { valueStyles: 'text-2xl', unitStyles: 'text-lg' },
      md: { valueStyles: 'text-xl', unitStyles: 'text-sm font-normal' },
    },
  },

  defaultVariants: {
    size: 'lg',
  },
})

interface ValueProps extends VariantProps<typeof valueVariants> {
  value: string | number
  unit?: string
  breakline?: boolean
}

export function Value({
  size,
  value,
  unit = '',
  breakline = false,
}: ValueProps) {
  const { valueStyles, unitStyles } = valueVariants({ size })

  return (
    <span className={breakline ? 'flex flex-col items-center' : ''}>
      <strong className={valueStyles()}>{value}</strong>{' '}
      {unit && (
        <span className={twMerge(unitStyles(), breakline && 'block')}>
          {unit}
        </span>
      )}
    </span>
  )
}
