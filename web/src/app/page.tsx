'use client'

import { Cable, Gauge, TriangleRight } from 'lucide-react'
import { SteeringWheel, ToggleRight } from '@phosphor-icons/react'

import { Container } from '../components/Container'
import { DataBox } from '../components/DataBox'
import { Speedometer } from '../components/Speedometer'
import { Value } from '../components/Value'
import { Battery } from '../components/Battery'
import { SteeringSystem } from '../components/SteeringSystem'
import { LineChart } from '../components/LineChart'

function Home() {
  const charts = [
    {
      title: 'Velocidade x Tempo',
      labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      leftEngineData: [
        0, 0.1, 0.2, 0.1, 0.4, 0.5, 0.6, 0.4, 0.8, 0.9, 1.0, 1.1, 0,
      ],
      rightEngineData: [
        0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1.05, 1.2, 1.35, 1.0, 1.5, 1,
      ],
    },
    {
      title: 'PWM x Tempo',
      labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      leftEngineData: [0, 10, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130],
      rightEngineData: [
        0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240,
      ],
    },
  ]

  return (
    <div className="grid grid-cols-base gap-16 h-auto">
      <Container title="Velocidade">
        <DataBox title="Motor esquerdo" icon={Gauge}>
          <Speedometer speed={0.3} pwm={140} />
        </DataBox>

        <DataBox title="Motor direito" icon={Gauge}>
          <Speedometer speed={0.5} pwm={180} />
        </DataBox>
      </Container>

      <Container title="Dados do carro">
        <div className="flex gap-12 w-full h-full">
          {charts.map((chart) => (
            <LineChart
              key={chart.title}
              title={chart.title}
              labels={chart.labels}
              leftEngineData={chart.leftEngineData}
              rightEngineData={chart.rightEngineData}
            />
          ))}
        </div>

        <div className="flex gap-8 w-full">
          <DataBox title="Status das baterias" icon={Cable}>
            <div className="flex flex-col justify-between items-center w-full h-full my-7 px-2">
              <div className="flex justify-between w-full">
                <Battery level={9} />
                <Battery level={6} />
                <Battery level={12} />
              </div>

              <span className="text-sm font-bold text-petrol-500">
                motores • servo • sensores
              </span>
            </div>
          </DataBox>

          <DataBox
            title="Ângulo de direção"
            icon={SteeringWheel}
            iconProps={{ weight: 'bold' }}
          >
            <div className="flex flex-col items-center justify-between w-full h-full mt-8">
              <SteeringSystem angle={45} />

              <Value value="0°" />
            </div>
          </DataBox>

          <div className="flex flex-col gap-8 w-full">
            <DataBox title="Modo de controle" icon={ToggleRight}>
              <Value value="Autônomo" />
            </DataBox>

            <DataBox title="Ângulo de inclinação" icon={TriangleRight}>
              <Value value="20°" />
            </DataBox>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Home
