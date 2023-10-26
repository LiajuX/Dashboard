'use client'

import { Flag, Ruler, Timer } from 'lucide-react'

import { useArduinoData } from '../../contexts/ArduinoDataContext'

import { Container } from '../../components/Container'
import { DataBox } from '../../components/DataBox'
import { Value } from '../../components/Value'
import { TrafficLight } from '../../components/TrafficLight'
import { StopSign } from '../../components/StopSign'
import { Map } from '../../components/Map'
import { HighlightedText } from '../../components/HighlightedText'
import { Stopwatch } from '../../components/Stopwatch'

function Location() {
  const { data, timerIsRunning, lapsCounter } = useArduinoData()

  const trafficLightState =
    data.trafficLightStatus === 1
      ? 'red'
      : data.trafficLightStatus === 2
      ? 'yellow'
      : data.trafficLightStatus === 3
      ? 'green'
      : 'off'

  const carStatus =
    data.engineStatus === 1 && !data.objectDetected
      ? 'forward'
      : data.engineStatus === -1 && !data.objectDetected
      ? 'backward'
      : data.objectDetected
      ? 'object-detected'
      : 'stopped'

  return (
    <div className="grid grid-cols-base gap-8 h-auto max-w-[1120px] mx-auto mt-4">
      <Container title="Dados">
        <DataBox title="Tempo de percurso" icon={Timer}>
          <Stopwatch isActive={timerIsRunning} />
        </DataBox>

        <DataBox title="Distância percorrida" icon={Ruler}>
          <Value value={data.distance} unit="metros" />
        </DataBox>

        <DataBox title="Número de voltas" icon={Flag}>
          <Value value={lapsCounter} unit="voltas" />
        </DataBox>

        <div className="flex items-start justify-between w-full">
          <TrafficLight state={trafficLightState} height={56} />
          <StopSign isActive={data.stopSignDetected} width={56} />
        </div>
      </Container>

      <Container title="Mapa da pista">
        <div className="flex flex-col items-center gap-4">
          <Map />

          <HighlightedText state={carStatus} />
        </div>
      </Container>
    </div>
  )
}

export default Location
