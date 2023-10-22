interface SteeringSystemProps {
  angle: number
}

export function SteeringSystem({ angle }: SteeringSystemProps) {
  return (
    <svg
      width="140"
      height="80"
      viewBox="0 0 140 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="18"
        y1="39"
        x2="125"
        y2="39"
        stroke="white"
        strokeOpacity="0.05"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="69"
        y1="63"
        x2="69"
        y2="12"
        stroke="#0F1F26"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="6 6"
      />
      <g filter="url(#filter0_d_276_184)">
        <circle cx="69" cy="39" r="3" className="fill-brand-blue" />
      </g>
      <rect
        x="2.54277"
        y="1.49834"
        width="27.9998"
        height="72.7999"
        rx="13.9999"
        stroke="#0C9CD1"
        strokeOpacity="0.3"
        strokeWidth="1.4"
      />
      <rect
        x="1.14336"
        y="1.49809"
        width="30.7998"
        height="76.9999"
        rx="15.3999"
        stroke="#0C9CD1"
        strokeOpacity="0.1"
        strokeWidth="1.4"
      />
      <rect
        x="3.24199"
        y="1.49858"
        width="26.5998"
        height="68.5999"
        rx="13.2999"
        fill="#010C11"
        stroke="#0C9CD1"
        strokeWidth="1.4"
      />

      <rect
        x="109.1"
        y="1.7"
        width="27.9998"
        height="72.7999"
        rx="13.9999"
        stroke="#0C9CD1"
        strokeOpacity="0.3"
        strokeWidth="1.4"
      />
      <rect
        x="107.7"
        y="1.70036"
        width="30.7998"
        height="76.9999"
        rx="15.3999"
        stroke="#0C9CD1"
        strokeOpacity="0.1"
        strokeWidth="1.4"
      />
      <rect
        x="109.8"
        y="1.70012"
        width="26.5998"
        height="68.5999"
        rx="13.2999"
        fill="#010C11"
        stroke="#0C9CD1"
        strokeWidth="1.4"
      />
      <defs>
        <filter
          id="filter0_d_276_184"
          x="51"
          y="22"
          width="36"
          height="36"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0470588 0 0 0 0 0.611765 0 0 0 0 0.819608 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_276_184"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_276_184"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
