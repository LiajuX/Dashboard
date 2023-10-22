'use client'

import { twMerge } from 'tailwind-merge'

interface TrafficLightProps {
  state: 'red' | 'yellow' | 'green'
  height?: number
}

export function TrafficLight({ state, height = 56 }: TrafficLightProps) {
  const width = (height * 172) / 68
  const circleRadius = (height * 0.48) / 2
  const centerY = height / 2

  const viewBox = `0 0 ${width + 1} ${height + 1}`

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox={viewBox}
    >
      <rect
        width={width - 1}
        height={height - 1}
        x="0.5"
        y="0.5"
        className="fill-petrol-900 stroke-petrol-500"
        rx="7.5"
      ></rect>

      <circle
        className={twMerge(
          state === 'red' ? 'fill-red-opacity-80' : 'fill-white-opacity-5',
          'stroke-petrol-500',
        )}
        cx={width * 0.25}
        cy={centerY}
        r={circleRadius}
      ></circle>

      <circle
        className={twMerge(
          state === 'yellow'
            ? 'fill-yellow-opacity-80'
            : 'fill-white-opacity-5',
          'stroke-petrol-500',
        )}
        cx={width * 0.5}
        cy={centerY}
        r={circleRadius}
      ></circle>

      <circle
        className={twMerge(
          state === 'green' ? 'fill-green-opacity-80' : 'fill-white-opacity-5',
          'stroke-petrol-500',
        )}
        cx={width * 0.75}
        cy={centerY}
        r={circleRadius}
      ></circle>
    </svg>
  )
}
