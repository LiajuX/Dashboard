'use client'

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'
import io from 'socket.io-client'

interface ArduinoDataType {
  timerStarted: boolean
  carControlMode: number
  engineStatus: number
  rightWheelPwm: number
  leftWheelPwm: number
  rightWheelSpeed: number
  leftWheelSpeed: number
  distance: number
  steeringAngle: number
  carInclination: number
  objectDetected: boolean
  trafficLightStatus: number
  stopSignDetected: boolean
  solarBatteryStatus: number
  enginesBatteryStatus: number
}

interface LineChartData {
  labels: number[]
  leftEngineData: number[]
  rightEngineData: number[]
}

interface ArduinoDataContextType {
  data: ArduinoDataType
  timerIsRunning: boolean
  lapsCounter: number
  speedChartData: LineChartData
  pwmChartData: LineChartData
}

const ArduinoDataContext = createContext({} as ArduinoDataContextType)

interface ArduinoDataProviderProps {
  children: ReactNode
}

export function ArduinoDataProvider({ children }: ArduinoDataProviderProps) {
  const [data, setData] = useState<ArduinoDataType>({
    timerStarted: false,
    carControlMode: 0,
    engineStatus: 0,
    rightWheelPwm: 0,
    leftWheelPwm: 0,
    rightWheelSpeed: 0,
    leftWheelSpeed: 0,
    distance: 0,
    steeringAngle: 0,
    carInclination: 0,
    stopSignDetected: false,
    trafficLightStatus: 0,
    objectDetected: false,
    solarBatteryStatus: 0,
    enginesBatteryStatus: 0,
  })
  const [timerIsRunning, setTimerIsRunning] = useState(false)
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

  useEffect(() => {
    const socket = io('http://localhost:8080')

    const fetchData = () => {
      socket.emit('requestData')
    }

    const interval = setInterval(fetchData, 1000)

    socket.on('arduinoData', (arduinoData: ArduinoDataType) => {
      const dataHasChanged = Object.entries(arduinoData).some(
        ([key, value]) => data[key as keyof ArduinoDataType] !== value,
      )

      if (dataHasChanged) {
        const distanceDifference = arduinoData.distance - (data.distance || 0)
        const newAccumulatedDistance = accumulatedDistance + distanceDifference

        if (newAccumulatedDistance >= 55) {
          setLapsCounter(lapsCounter + 1)
          setAccumulatedDistance(newAccumulatedDistance - 55)
        } else {
          setAccumulatedDistance(newAccumulatedDistance)
        }

        setData(arduinoData)

        // console.log(lapsCounter)
        console.log(data)

        if (arduinoData.timerStarted) {
          setTimerIsRunning(true)
        }

        setSpeedChartData((prevChartData) => ({
          labels: [...prevChartData.labels.slice(1), arduinoData.distance],
          leftEngineData: [
            ...prevChartData.leftEngineData.slice(1),
            arduinoData.leftWheelSpeed,
          ],
          rightEngineData: [
            ...prevChartData.rightEngineData.slice(1),
            arduinoData.rightWheelSpeed,
          ],
        }))

        setPwmChartData((prevChartData) => ({
          labels: [...prevChartData.labels.slice(1), arduinoData.distance], // Remove o primeiro valor e adiciona o novo valor no final
          leftEngineData: [
            ...prevChartData.leftEngineData.slice(1),
            arduinoData.leftWheelPwm,
          ],
          rightEngineData: [
            ...prevChartData.rightEngineData.slice(1),
            arduinoData.rightWheelPwm,
          ],
        }))
      }
    })

    return () => {
      clearInterval(interval)
      socket.disconnect()
    }
  }, [accumulatedDistance, data, lapsCounter])

  return (
    <ArduinoDataContext.Provider
      value={{
        data,
        timerIsRunning,
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
