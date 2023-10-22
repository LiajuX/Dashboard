'use client'

import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ContainerProps {
  children: ReactNode
  title: string
}

export function Container({ title, children }: ContainerProps) {
  return (
    <div className="flex flex-col gap-0.5 h-full">
      <div
        className={twMerge(
          'flex flex-col items-center w-full p-6',
          'rounded-ss-2xl rounded-se-2xl border border-b-0 border-petrol-500 bg-petrol-800',
        )}
      >
        <h3 className="text-[18px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-brand-aqua to-brand-blue">
          {title}
        </h3>
      </div>

      <div
        className={twMerge(
          'flex flex-col gap-8 items-center w-full h-full p-8',
          'rounded-es-2xl rounded-ee-2xl border border-t-0 border-petrol-500 bg-petrol-800',
        )}
      >
        {children}
      </div>
    </div>
  )
}
