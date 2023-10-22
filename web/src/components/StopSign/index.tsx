'use client'

import { twMerge } from 'tailwind-merge'

interface StopSignProps {
  isActive?: boolean
  width?: number
}

export function StopSign({ isActive = false, width = 56 }: StopSignProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      fill="none"
      viewBox="0 0 145 145"
    >
      <path
        className={twMerge(
          isActive ? 'fill-red-900' : 'fill-petrol-900',
          'stroke-petrol-500',
        )}
        strokeWidth="2.5"
        d="M105.448 3.623l.001.001 35.927 35.927a10.743 10.743 0 013.124 7.54v50.817a10.744 10.744 0 01-3.124 7.541l-35.927 35.927a10.744 10.744 0 01-7.54 3.124H47.091a10.743 10.743 0 01-7.54-3.124L3.623 105.449v-.001A10.746 10.746 0 01.5 97.909V47.091a10.745 10.745 0 013.123-7.539h.001L39.551 3.623h.001A10.745 10.745 0 0147.091.5h50.818a10.746 10.746 0 017.539 3.123z"
      ></path>
      <path
        className={isActive ? 'fill-red-500' : 'fill-white-opacity-10'}
        d="M94.566 66.556V78.56a22.007 22.007 0 11-44.015 0V56.552a4.001 4.001 0 018.002 0v14.005a2 2 0 004.002 0V48.55a4.001 4.001 0 118.003 0v20.007a2 2 0 004.001 0V52.55a4.001 4.001 0 018.003 0v20.174a12.025 12.025 0 00-10.004 11.837 2 2 0 004.002 0 8.003 8.003 0 018.002-8.003 2 2 0 002.001-2v-8.003a4.001 4.001 0 018.003 0z"
      ></path>
    </svg>
  )
}
