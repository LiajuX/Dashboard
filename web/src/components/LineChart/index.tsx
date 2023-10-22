import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)

interface LineChartProps {
  title: string
  labels: number[]
  leftEngineData: number[]
  rightEngineData: number[]
}

const options = {
  responsive: true,
  scales: {
    y: {
      ticks: { color: '#1B3945', beginAtZero: true },
      grid: {
        color: 'rgba(27, 56, 69, 0.15)',
      },
    },
    x: {
      ticks: { color: '#1B3945', beginAtZero: true },
      grid: {
        color: 'rgba(27, 56, 69, 0.15)',
      },
    },
  },
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    legend: {
      display: false,
    },
  },
}

export function LineChart({
  title,
  labels,
  leftEngineData,
  rightEngineData,
}: LineChartProps) {
  const data = {
    labels,
    datasets: [
      {
        label: 'Motor esquerdo',
        data: leftEngineData,
        borderWidth: 2,
        borderColor: '#0C9CD1',
        backgroundColor: '#0C9CD1',
        fill: true,
      },
      {
        label: 'Motor direito',
        data: rightEngineData,
        borderWidth: 2,
        borderColor: '#0AD2AB',
        backgroundColor: '#0AD2AB',
        fill: true,
      },
    ],
  }

  return (
    <div className="flex flex-col items-center w-full h-full">
      <span className="mb-2 font-bold text-petrol-500">{title}</span>

      <Line data={data} options={options} className="border-brand-blue" />
    </div>
  )
}
