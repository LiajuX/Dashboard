interface CarProps {
  objectDetected: boolean
}

export function Car({ objectDetected }: CarProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="95"
      height="103"
      fill="none"
      viewBox="0 0 95 103"
    >
      {objectDetected && (
        <>
          <g filter="url(#filter0_d_31_77)">
            <path
              fill="#DE4C4C"
              d="M58.122 30.443a1.092 1.092 0 11-1.545 1.544c-7.663-7.663-20.133-7.663-27.797 0a1.092 1.092 0 01-1.544-1.544c8.515-8.515 22.37-8.515 30.886 0zm-23.937 6.95a1.092 1.092 0 001.544 1.544 9.839 9.839 0 0113.899 0 1.092 1.092 0 101.544-1.545 12.025 12.025 0 00-16.987 0z"
            ></path>
            <path
              stroke="#DD4B4B"
              d="M33.832 37.038h0a1.592 1.592 0 00-.467 1.127h.5-.5a1.592 1.592 0 002.718 1.126 9.339 9.339 0 0113.192 0 1.592 1.592 0 002.25-2.252h0a12.525 12.525 0 00-17.693 0zm25.11-5.823c0-.422-.168-.827-.467-1.126-8.71-8.71-22.883-8.71-31.593 0a1.592 1.592 0 002.252 2.252c7.468-7.469 19.621-7.469 27.09 0a1.592 1.592 0 002.718-1.126z"
            ></path>
          </g>
          <g filter="url(#filter1_d_31_77)">
            <path
              fill="#DE4C4C"
              d="M58.547 68.557a1.092 1.092 0 10-1.544-1.544c-7.664 7.663-20.134 7.663-27.798 0a1.092 1.092 0 10-1.544 1.544c8.515 8.515 22.371 8.515 30.886 0zm-23.937-6.95a1.092 1.092 0 111.545-1.544 9.839 9.839 0 0013.898 0 1.092 1.092 0 111.545 1.545 12.026 12.026 0 01-16.988 0z"
            ></path>
            <path
              stroke="#DD4B4B"
              d="M34.257 61.962h0a1.592 1.592 0 01-.467-1.127h.5-.5a1.592 1.592 0 012.718-1.126 9.339 9.339 0 0013.192 0 1.592 1.592 0 012.251 2.252h0a12.525 12.525 0 01-17.694 0zm25.11 5.823c0 .422-.168.827-.466 1.126-8.71 8.71-22.884 8.71-31.594 0a1.592 1.592 0 112.252-2.252c7.468 7.468 19.622 7.468 27.09 0a1.592 1.592 0 012.718 1.126z"
            ></path>
          </g>
          <g filter="url(#filter2_d_31_77)">
            <path
              fill="#DE4C4C"
              d="M62.459 64.518a1.092 1.092 0 01-1.545-1.545c7.664-7.663 7.664-20.133 0-27.797a1.092 1.092 0 111.545-1.544c8.515 8.515 8.515 22.37 0 30.886zm-6.95-23.937a1.092 1.092 0 00-1.544 1.544 9.839 9.839 0 010 13.899 1.092 1.092 0 001.544 1.544 12.025 12.025 0 000-16.987z"
            ></path>
            <path
              stroke="#DD4B4B"
              d="M55.863 40.228h0a1.592 1.592 0 00-1.126-.467v.5-.5a1.592 1.592 0 00-1.126 2.717 9.339 9.339 0 010 13.193 1.592 1.592 0 002.252 2.25h0a12.525 12.525 0 000-17.693zm5.824 25.11c.422 0 .827-.168 1.125-.467 8.71-8.71 8.71-22.883 0-31.593a1.592 1.592 0 10-2.251 2.252c7.468 7.468 7.468 19.621 0 27.09a1.592 1.592 0 001.126 2.718z"
            ></path>
          </g>
        </>
      )}
      <path
        fill="#F4FFF6"
        d="M40.152 52.014c1.666-.962 1.666-3.367 0-4.33L14.175 32.687c-1.921-1.11-4.228.647-3.67 2.794l3.578 13.738a2.5 2.5 0 010 1.26l-3.577 13.738c-.56 2.147 1.748 3.905 3.669 2.795l25.977-14.998z"
      ></path>
      <mask
        id="mask0_31_77"
        style={{ maskType: "alpha" }}
        width="32"
        height="36"
        x="10"
        y="32"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#D8FFDD"
          d="M40.152 52.014c1.666-.962 1.666-3.367 0-4.33L14.175 32.687c-1.921-1.11-4.228.647-3.67 2.794l3.578 13.738a2.5 2.5 0 010 1.26l-3.577 13.738c-.56 2.147 1.748 3.905 3.669 2.795l25.977-14.998z"
        ></path>
      </mask>
      <g mask="url(#mask0_31_77)">
        <path
          fill="#0BFD2B"
          d="M13.827 34.48l6.85 14.387a2.5 2.5 0 01.013 2.123l-6.85 14.82c-.956 2.069-3.956 1.883-4.65-.29L4.457 50.699a2.5 2.5 0 01.006-1.542l4.732-14.382c.705-2.142 3.662-2.33 4.632-.294z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_31_77"
          width="83.526"
          height="67.2"
          x="0.916"
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
            result="effect1_dropShadow_31_77"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_31_77"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="filter1_d_31_77"
          width="83.526"
          height="67.2"
          x="1.341"
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
            result="effect1_dropShadow_31_77"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_31_77"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="filter2_d_31_77"
          width="67.2"
          height="83.526"
          x="27.645"
          y="9.312"
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
            result="effect1_dropShadow_31_77"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_31_77"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  )
}
