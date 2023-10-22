'use client'

import { Flag, Ruler, Timer } from 'lucide-react'

import { Container } from '../../components/Container'
import { DataBox } from '../../components/DataBox'
import { Value } from '../../components/Value'
import { TrafficLight } from '../../components/TrafficLight'
import { StopSign } from '../../components/StopSign'
import { Map } from '../../components/Map'
import { HighlightedText } from '../../components/HighlightedText'

function Location() {
  return (
    <div className="grid grid-cols-base gap-8 h-auto max-w-[1120px] mx-auto mt-4">
      <Container title="Dados">
        <DataBox title="Tempo de percurso" icon={Timer}>
          <Value value="01:25" />
        </DataBox>

        <DataBox title="Distância percorrida" icon={Ruler}>
          <Value value="3" unit="metros" />
        </DataBox>

        <DataBox title="Número de voltas" icon={Flag}>
          <Value value="0" unit="voltas" />
        </DataBox>

        <div className="flex items-start justify-between w-full">
          <TrafficLight state="green" height={56} />
          <StopSign isActive={true} width={56} />
        </div>
      </Container>

      <Container title="Mapa da pista">
        <div className="flex flex-col items-center gap-4">
          <Map />

          <HighlightedText state="stopped" />
        </div>
      </Container>
    </div>
  )
}

export default Location
