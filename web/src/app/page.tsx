'use client'

import { Cable, Gauge, TriangleRight } from 'lucide-react'
import { SteeringWheel, ToggleRight } from '@phosphor-icons/react'

import { useArduinoData } from '../contexts/ArduinoDataContext'

import { Container } from '../components/Container'
import { DataBox } from '../components/DataBox'
import { Speedometer } from '../components/Speedometer'
import { Value } from '../components/Value'
import { Battery } from '../components/Battery'
import { SteeringSystem } from '../components/SteeringSystem'
import { LineChart } from '../components/LineChart'

function Home() {
  const { data, speedChartData, pwmChartData } = useArduinoData()

  const charts = [
    {
      title: 'Velocidade x Tempo',
      labels: speedChartData.labels,
      leftEngineData: speedChartData.leftEngineData,
      rightEngineData: speedChartData.rightEngineData,
    },
    {
      title: 'PWM x Tempo',
      labels: pwmChartData.labels,
      leftEngineData: pwmChartData.leftEngineData,
      rightEngineData: pwmChartData.rightEngineData,
    },
  ]

  const carControlModeText =
    data.carControlMode === 1
      ? 'Autônomo'
      : data.carControlMode === 2
      ? 'Controle de velocidade'
      : data.carControlMode === 3
      ? 'Ajuste do servo'
      : data.carControlMode === 4
      ? 'Controle remoto'
      : 'Menu'

  return (
    <div className="grid grid-cols-base gap-8 h-auto max-w-[1120px] mx-auto mt-4">
      <Container title="Velocidade">
        <DataBox title="Motor esquerdo" icon={Gauge}>
          <Speedometer
            speed={parseFloat(data.leftWheelSpeed.toFixed(1))}
            pwm={data.leftWheelPwm}
          />
        </DataBox>

        <DataBox title="Motor direito" icon={Gauge}>
          <Speedometer
            speed={parseFloat(data.rightWheelSpeed.toFixed(1))}
            pwm={data.rightWheelPwm}
          />
        </DataBox>
      </Container>

      <Container title="Dados do carro">
        <div className="flex flex-col justify-between w-full h-full">
          <div className="flex gap-12 w-full">
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
              <div className="flex flex-col justify-center items-center gap-2 w-full h-full px-1">
                <div className="flex justify-center gap-7 w-full">
                  <div className="flex flex-col items-center gap-3">
                    <span className="mt-2 text-sm font-bold text-petrol-500">
                      motores
                    </span>

                    <Battery
                      level={
                        data.enginesBatteryStatus as
                          | 0
                          | 1
                          | 2
                          | 3
                          | 4
                          | 5
                          | 6
                          | 7
                          | 8
                          | 9
                          | 10
                          | 11
                          | 12
                      }
                    />

                    <Value
                      size="md"
                      value={data.enginesBatteryStatus}
                      unit="V"
                    />
                  </div>

                  <div className="flex flex-col items-center gap-3">
                    <span className="mt-2 text-sm font-bold text-petrol-500">
                      placa solar
                    </span>

                    <Battery
                      level={
                        data.solarBatteryStatus as
                          | 0
                          | 1
                          | 2
                          | 3
                          | 4
                          | 5
                          | 6
                          | 7
                          | 8
                          | 9
                          | 10
                          | 11
                          | 12
                      }
                    />

                    <Value size="md" value={data.solarBatteryStatus} unit="V" />
                  </div>
                </div>
              </div>
            </DataBox>

            <DataBox
              title="Ângulo de direção"
              icon={SteeringWheel}
              iconProps={{ weight: 'bold' }}
            >
              <div className="flex flex-col items-center justify-between w-full h-full mt-8">
                <SteeringSystem angle={data.steeringAngle} />

                <Value value={`${data.steeringAngle}°`} />
              </div>
            </DataBox>

            <div className="flex flex-col gap-8 w-full">
              <DataBox title="Modo de controle" icon={ToggleRight}>
                <Value value={carControlModeText} />
              </DataBox>

              <DataBox title="Ângulo de inclinação" icon={TriangleRight}>
                <Value value={`${data.carInclination}°`} />
              </DataBox>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Home
