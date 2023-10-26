import React, { useState, useEffect } from 'react'
import { Value } from '../Value'

interface StopwatchProps {
  isActive: boolean
}

export function Stopwatch({ isActive }: StopwatchProps) {
  const [elapsedTime, setElapsedTime] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isActive) {
      interval = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1)
      }, 1000)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [isActive])

  const minutes = Math.floor(elapsedTime / 60)
  const seconds = elapsedTime % 60

  return (
    <Value
      value={`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
        2,
        '0',
      )}`}
    />
  )
}
