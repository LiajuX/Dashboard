import { Wheel } from './Wheel'

interface SteeringSystemProps {
  angle: number
}

export function SteeringSystem({ angle }: SteeringSystemProps) {
  return (
    <div className="flex items-center justify-center">
      <Wheel angle={angle} />

      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="73"
          height="53"
          fill="none"
          viewBox="0 0 73 53"
        >
          <path
            stroke="#0F1F26"
            strokeDasharray="6 6"
            strokeLinecap="round"
            strokeWidth="2"
            d="M36 52L36 1"
          ></path>
          <path
            stroke="#0F1F26"
            strokeLinecap="square"
            strokeWidth="3"
            d="M1.5 25.5L71.5 25.5"
          ></path>
          <g filter="url(#filter0_d_17_2)">
            <circle cx="36.143" cy="26.5" r="3.5" fill="#0C9CD1"></circle>
          </g>
          <defs>
            <filter
              id="filter0_d_17_2"
              width="37"
              height="37"
              x="17.643"
              y="9"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              ></feColorMatrix>
              <feOffset dy="1"></feOffset>
              <feGaussianBlur stdDeviation="7.5"></feGaussianBlur>
              <feComposite in2="hardAlpha" operator="out"></feComposite>
              <feColorMatrix values="0 0 0 0 0.0470588 0 0 0 0 0.611765 0 0 0 0 0.819608 0 0 0 1 0"></feColorMatrix>
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_17_2"
              ></feBlend>
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_17_2"
                result="shape"
              ></feBlend>
            </filter>
          </defs>
        </svg>
      </div>

      <Wheel angle={angle} />
    </div>
  )
}
