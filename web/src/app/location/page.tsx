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
  const { data, lapsCounter } = useArduinoData()

  const trafficLightState =
    data.traffic_light_status === 1
      ? 'red'
      : data.traffic_light_status === 2
      ? 'yellow'
      : data.traffic_light_status === 3
      ? 'green'
      : 'off'

  const carStatus =
    data.engine_status === 1 && !data.object_detected
      ? 'forward'
      : data.engine_status === -1 && !data.object_detected
      ? 'backward'
      : data.object_detected
      ? 'object-detected'
      : 'stopped'

  return (
    <div className="grid grid-cols-base gap-8 h-auto max-w-[1120px] mx-auto mt-4">
      <Container title="Dados">
        <DataBox title="Tempo de percurso" icon={Timer}>
          <Stopwatch />
        </DataBox>

        <DataBox title="Distância percorrida" icon={Ruler}>
          <Value
            value={data.distance}
            unit={data.distance === 1 ? 'metro' : 'metros'}
          />
        </DataBox>

        <DataBox title="Número de voltas" icon={Flag}>
          <Value
            value={lapsCounter}
            unit={lapsCounter === 1 ? 'volta' : 'voltas'}
          />
        </DataBox>

        <div className="flex items-start justify-between w-full">
          <TrafficLight state={trafficLightState} height={56} />
          <StopSign isActive={data.stop_sign_detected} width={56} />
        </div>
      </Container>

      <Container title="Mapa da pista">
        <div className="flex flex-col items-center gap-4">
          <Map
            isAnimating={data.is_arduino_connected && data.engine_status === 1}
            objectDetected={data.object_detected}
          />

          {data.is_arduino_connected ? (
            <HighlightedText state={carStatus} />
          ) : (
            <span className="mb-2 font-bold text-petrol-500">
              Conecte o arduino para iniciar o percurso!
            </span>
          )}
        </div>
      </Container>
    </div>
  )
}

export default Location
