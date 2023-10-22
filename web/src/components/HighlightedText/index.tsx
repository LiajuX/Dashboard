import { VariantProps, tv } from 'tailwind-variants'
import {
  WarningOctagon,
  ArrowCircleUp,
  ArrowCircleDown,
} from '@phosphor-icons/react'

const highlightedText = tv({
  slots: {
    textStyles: 'font-semibold text-3xl uppercase',
    iconStyles: '',
  },

  variants: {
    state: {
      forward: {
        textStyles: 'text-brand-green drop-shadow-green-lg',
        iconStyles: 'text-brand-green',
      },

      backward: {
        textStyles: 'text-brand-green drop-shadow-green-lg',
        iconStyles: 'text-brand-green',
      },

      stopped: {
        textStyles: 'text-red-500 drop-shadow-red-lg',
        iconStyles: 'text-red-500',
      },

      'object-detected': {
        textStyles: 'text-red-500 drop-shadow-red-lg',
        iconStyles: 'text-red-500',
      },
    },
  },

  defaultVariants: {
    state: 'forward',
  },
})

type HighlightedTextProps = VariantProps<typeof highlightedText>

export function HighlightedText({ state }: HighlightedTextProps) {
  const { textStyles, iconStyles } = highlightedText({ state })

  const text =
    state === 'forward' || state === 'backward'
      ? 'andando'
      : state === 'object-detected'
      ? 'obstáculo detectado'
      : 'parado'

  const icon =
    state === 'forward' ? (
      <ArrowCircleUp size={32} weight="bold" className={iconStyles()} />
    ) : state === 'backward' ? (
      <ArrowCircleDown size={32} weight="bold" className={iconStyles()} />
    ) : (
      <WarningOctagon size={32} weight="bold" className={iconStyles()} />
    )

  return (
    <div className="flex items-center gap-4">
      {icon}
      <span className={textStyles()}>{text}</span>
      {icon}
    </div>
  )
}
