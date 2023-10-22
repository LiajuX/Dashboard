'use client'

import { ElementType, ReactNode } from 'react'

interface DataBoxProps {
  icon: ElementType
  iconProps?: Record<string, string>
  title: string
  children: ReactNode
}

export function DataBox({
  icon: Icon,
  iconProps,
  title,
  children,
}: DataBoxProps) {
  return (
    <div className="flex flex-col items-start w-full rounded-lg border border-petrol-500 bg-petrol-800">
      <div className="flex items-center gap-2 w-full px-4 py-2 border-b border-petrol-500">
        <Icon size={20} className="text-petrol-500" {...iconProps} />

        <span className="font-medium text-petrol-200">{title}</span>
      </div>

      <div className="flex flex-col items-center w-full h-full px-6 py-2">
        {children}
      </div>
    </div>
  )
}
