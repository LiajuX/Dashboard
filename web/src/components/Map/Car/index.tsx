interface CarProps {
  objectDetected: boolean
}

export function Car({ objectDetected }: CarProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="94"
      height="103"
      fill="none"
      viewBox="0 0 94 103"
    >
      {objectDetected && (
        <>
          <g filter="url(#filter0_d_1_87)">
            <path
              fill="#DE4C4C"
              d="M36.78 68.557a1.092 1.092 0 111.544-1.544c7.664 7.663 20.134 7.663 27.798 0a1.092 1.092 0 011.544 1.544c-8.515 8.515-22.371 8.515-30.886 0zm23.937-6.95a1.092 1.092 0 00-1.545-1.544 9.839 9.839 0 01-13.898 0 1.092 1.092 0 00-1.545 1.545 12.025 12.025 0 0016.988 0z"
            ></path>
            <path
              stroke="#DE4C4C"
              d="M61.07 61.962h0c.299-.3.466-.704.466-1.127h-.5.5a1.592 1.592 0 00-2.717-1.126 9.339 9.339 0 01-13.192 0 1.591 1.591 0 00-2.251 2.252h0a12.525 12.525 0 0017.694 0zm-25.11 5.823c0 .422.168.827.466 1.126 8.71 8.71 22.883 8.71 31.594 0a1.592 1.592 0 00-2.252-2.252c-7.468 7.468-19.622 7.468-27.09 0a1.592 1.592 0 00-2.718 1.126z"
            ></path>
          </g>
          <g filter="url(#filter1_d_1_87)">
            <path
              fill="#DE4C4C"
              d="M36.355 30.443a1.092 1.092 0 101.544 1.544c7.664-7.663 20.134-7.663 27.797 0a1.092 1.092 0 101.545-1.544c-8.515-8.515-22.371-8.515-30.886 0zm23.936 6.95a1.092 1.092 0 11-1.544 1.544 9.839 9.839 0 00-13.899 0 1.092 1.092 0 11-1.544-1.545 12.026 12.026 0 0116.987 0z"
            ></path>
            <path
              stroke="#DE4C4C"
              d="M60.645 37.038h0c.299.3.466.704.466 1.127h-.5.5a1.592 1.592 0 01-2.717 1.126 9.34 9.34 0 00-13.192 0 1.592 1.592 0 01-2.251-2.252h0a12.525 12.525 0 0117.694 0zm-25.11-5.823c0-.422.168-.827.466-1.126 8.71-8.71 22.883-8.71 31.593 0a1.592 1.592 0 11-2.251 2.252c-7.468-7.469-19.622-7.469-27.09 0a1.592 1.592 0 01-2.718-1.126z"
            ></path>
          </g>
          <g filter="url(#filter2_d_1_87)">
            <path
              fill="#DE4C4C"
              d="M32.443 34.482a1.092 1.092 0 111.544 1.545c-7.663 7.663-7.663 20.133 0 27.797a1.092 1.092 0 11-1.544 1.544c-8.515-8.515-8.515-22.37 0-30.886zm6.95 23.937a1.092 1.092 0 101.544-1.544 9.839 9.839 0 010-13.899 1.092 1.092 0 10-1.545-1.544 12.025 12.025 0 000 16.987z"
            ></path>
            <path
              stroke="#DE4C4C"
              d="M39.038 58.772h0c.3.299.704.467 1.127.467v-.5.5a1.592 1.592 0 001.126-2.717 9.339 9.339 0 010-13.193 1.592 1.592 0 00-2.252-2.25h0a12.525 12.525 0 000 17.693zm-5.823-25.11c-.422 0-.827.168-1.126.467-8.71 8.71-8.71 22.883 0 31.593a1.592 1.592 0 102.252-2.252c-7.469-7.468-7.469-19.621 0-27.09a1.592 1.592 0 00-1.126-2.718z"
            ></path>
          </g>
        </>
      )}

      <path
        fill="#F4FFF6"
        d="M54.75 46.986c-1.667.962-1.667 3.367 0 4.33l25.977 14.998c1.921 1.109 4.228-.648 3.67-2.795L80.818 49.78a2.499 2.499 0 010-1.26l3.577-13.738c.56-2.147-1.748-3.905-3.67-2.795L54.75 46.986z"
      ></path>
      <mask
        id="mask0_1_87"
        style={{ maskType: 'alpha' }}
        width="32"
        height="36"
        x="53"
        y="31"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#D8FFDD"
          d="M54.75 46.986c-1.667.962-1.667 3.367 0 4.33l25.977 14.998c1.921 1.109 4.228-.648 3.67-2.795L80.818 49.78a2.499 2.499 0 010-1.26l3.577-13.738c.56-2.147-1.748-3.905-3.67-2.795L54.75 46.986z"
        ></path>
      </mask>
      <g mask="url(#mask0_1_87)">
        <path
          fill="#0BFD2B"
          d="M81.075 64.52l-6.851-14.387a2.5 2.5 0 01-.012-2.123l6.849-14.82c.956-2.069 3.957-1.883 4.65.29l4.734 14.822a2.5 2.5 0 01-.007 1.542l-4.731 14.382c-.705 2.142-3.663 2.33-4.632.294z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_1_87"
          width="83.526"
          height="67.2"
          x="10.46"
          y="35.743"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="2"></feOffset>
          <feGaussianBlur stdDeviation="12.5"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.870588 0 0 0 0 0.298039 0 0 0 0 0.298039 0 0 0 1 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_87"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_87"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="filter1_d_1_87"
          width="83.526"
          height="67.2"
          x="10.035"
          y="0.057"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="2"></feOffset>
          <feGaussianBlur stdDeviation="12.5"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.870588 0 0 0 0 0.298039 0 0 0 0 0.298039 0 0 0 1 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_87"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_87"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="filter2_d_1_87"
          width="67.2"
          height="83.526"
          x="0.057"
          y="10.162"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="2"></feOffset>
          <feGaussianBlur stdDeviation="12.5"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.870588 0 0 0 0 0.298039 0 0 0 0 0.298039 0 0 0 1 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_87"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_87"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  )
}
