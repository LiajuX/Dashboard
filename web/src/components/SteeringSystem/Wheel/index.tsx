interface WheelProps {
  angle: number
}

export function Wheel({ angle }: WheelProps) {
  const realAngle = Math.round(0.22 * angle)

  return (
    <div style={{ transform: `rotate(${realAngle}deg)` }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="33"
        height="80"
        fill="none"
        viewBox="0 0 33 80"
      >
        <rect
          className="stroke-brand-blue"
          width="28"
          height="72.8"
          x="2.744"
          y="1.498"
          strokeOpacity="0.3"
          strokeWidth="1.4"
          rx="14"
        ></rect>
        <rect
          className="stroke-brand-blue"
          width="30.8"
          height="77"
          x="1.343"
          y="1.499"
          strokeOpacity="0.1"
          strokeWidth="1.4"
          rx="15.4"
        ></rect>
        <rect
          className="stroke-brand-blue fill-petrol-900"
          width="26.6"
          height="68.6"
          x="3.443"
          y="1.498"
          strokeWidth="1.4"
          rx="13.3"
        ></rect>
      </svg>
    </div>
  )
}
