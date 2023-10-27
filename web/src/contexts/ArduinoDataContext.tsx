'use client'

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'
import { onValue } from 'firebase/database'

import { dataRef } from '../services/firebase'

interface DataType {
  is_arduino_connected: boolean
  timer_started: boolean
  car_control_mode: number
  engine_status: number
  right_wheel_pwm: number
  left_wheel_pwm: number
  right_wheel_speed: number
  left_wheel_speed: number
  distance: number
  steering_angle: number
  car_inclination: number
  object_detected: boolean
  traffic_light_status: number
  stop_sign_detected: boolean
  solar_battery_status: number
  engines_battery_status: number
}

interface LineChartData {
  labels: number[]
  leftEngineData: number[]
  rightEngineData: number[]
}

interface ArduinoDataContextType {
  data: DataType
  elapsedTime: number
  lapsCounter: number
  speedChartData: LineChartData
  pwmChartData: LineChartData
}

const ArduinoDataContext = createContext({} as ArduinoDataContextType)

interface ArduinoDataProviderProps {
  children: ReactNode
}

export function ArduinoDataProvider({ children }: ArduinoDataProviderProps) {
  const [data, setData] = useState<DataType>({
    is_arduino_connected: false,
    timer_started: false,
    car_control_mode: 0,
    engine_status: 0,
    right_wheel_pwm: 0,
    left_wheel_pwm: 0,
    right_wheel_speed: 0,
    left_wheel_speed: 0,
    distance: 0,
    steering_angle: 0,
    car_inclination: 0,
    object_detected: false,
    traffic_light_status: 0,
    stop_sign_detected: false,
    solar_battery_status: 0,
    engines_battery_status: 0,
  })
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)
  const [lapsCounter, setLapsCounter] = useState(0)
  const [accumulatedDistance, setAccumulatedDistance] = useState(0)
  const [speedChartData, setSpeedChartData] = useState({
    labels: Array(12).fill(0),
    leftEngineData: Array(12).fill(0),
    rightEngineData: Array(12).fill(0),
  })

  const [pwmChartData, setPwmChartData] = useState({
    labels: Array(12).fill(0),
    leftEngineData: Array(12).fill(0),
    rightEngineData: Array(12).fill(0),
  })

  function dataHasChanged(oldData: DataType, newData: DataType): boolean {
    return Object.entries(newData).some(
      ([key, value]) => oldData[key as keyof DataType] !== value,
    )
  }

  useEffect(() => {
    const offValueListener = onValue(dataRef, (snapshot) => {
      const firebaseData = snapshot.val()

      if (firebaseData && dataHasChanged(data, firebaseData)) {
        const distanceDifference = firebaseData.distance - (data.distance || 0)
        const newAccumulatedDistance = accumulatedDistance + distanceDifference

        if (newAccumulatedDistance >= 55) {
          setLapsCounter(lapsCounter + 1)
          setAccumulatedDistance(newAccumulatedDistance - 55)
        } else {
          setAccumulatedDistance(newAccumulatedDistance)
        }

        setData(firebaseData)

        // console.log(lapsCounter)
        // console.log(firebaseData)

        if (firebaseData.timer_started && firebaseData.is_arduino_connected) {
          setIsTimerRunning(true)
        } else {
          setIsTimerRunning(false)
        }

        const minutes = Math.floor(elapsedTime / 60)
        const seconds = elapsedTime % 60

        const currentTime = `${String(minutes).padStart(2, '0')}:${String(
          seconds,
        ).padStart(2, '0')}`

        setSpeedChartData((prevChartData) => ({
          labels: [...prevChartData.labels.slice(1), currentTime],
          leftEngineData: [
            ...prevChartData.leftEngineData.slice(1),
            firebaseData.left_wheel_speed,
          ],
          rightEngineData: [
            ...prevChartData.rightEngineData.slice(1),
            firebaseData.right_wheel_speed,
          ],
        }))

        setPwmChartData((prevChartData) => ({
          labels: [...prevChartData.labels.slice(1), currentTime],
          leftEngineData: [
            ...prevChartData.leftEngineData.slice(1),
            firebaseData.left_wheel_pwm,
          ],
          rightEngineData: [
            ...prevChartData.rightEngineData.slice(1),
            firebaseData.right_wheel_pwm,
          ],
        }))
      }
    })

    return () => {
      offValueListener()
    }
  }, [accumulatedDistance, data, lapsCounter])

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isTimerRunning) {
      interval = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1)
      }, 1000)
    }

    console.log(isTimerRunning)

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [isTimerRunning])

  return (
    <ArduinoDataContext.Provider
      value={{
        data,
        elapsedTime,
        lapsCounter,
        speedChartData,
        pwmChartData,
      }}
    >
      {children}
    </ArduinoDataContext.Provider>
  )
}

export const useArduinoData = () => {
  const context = useContext(ArduinoDataContext)

  return context
}
