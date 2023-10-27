import React from 'react'
import { Value } from '../Value'
import { useArduinoData } from '../../contexts/ArduinoDataContext'

export function Stopwatch() {
  const { elapsedTime } = useArduinoData()

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
