'use client'

import { twMerge } from 'tailwind-merge'
import { Value } from '../Value'

interface SpeedometerProps {
  speed: number
  pwm: number
}

export function Speedometer({ speed, pwm }: SpeedometerProps) {
  return (
    <div className="flex flex-col items-center w-full p-4">
      <div className="flex flex-col items-center w-full">
        <Value
          size="lg-md"
          value={speed.toString().replace('.', ',')}
          unit="PWM"
          breakline
        />

        <progress
          className={twMerge(
            'h-1.5 w-full my-3 [&::-moz-progress-bar]:bg-brand-blue [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-bar]:bg-gray-700 [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-value]:bg-brand-blue',
          )}
          value={pwm}
          max={255}
        />

        <Value size="md" value={pwm} unit="PWM" />
      </div>
    </div>
  )
}
