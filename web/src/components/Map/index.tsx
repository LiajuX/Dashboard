import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

import { useArduinoData } from '../../contexts/ArduinoDataContext'

import { Car } from './Car'

interface MapProps {
  isAnimating: boolean
  objectDetected: boolean
}

gsap.registerPlugin(MotionPathPlugin)

export function Map({ isAnimating = false, objectDetected = false }: MapProps) {
  const animationRef = useRef<GSAPTween | null>(null)

  const { data } = useArduinoData()

  const color = isAnimating ? '#0BFD2B' : '#707C82'

  useEffect(() => {
    if (!animationRef.current) {
      animationRef.current = gsap.to('#rect', {
        duration: 200,
        repeat: -1,
        ease: 'none',
        paused: true,
        motionPath: {
          path: '#path',
          align: '#path',
          autoRotate: true,
          start: 1.8,
          end: 0,
          alignOrigin: [0.5, 0.5],
        },
      })
    }

    if (isAnimating) {
      animationRef.current.play()
    } else {
      animationRef.current.pause()
    }
  }, [isAnimating])

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="721"
        height="380"
        fill="none"
        viewBox="0 0 721 415"
      >
        <path
          stroke={color}
          strokeWidth="2.55"
          d="M173.625 369.358h409.154c43.939 0 79.678-35.537 80.102-79.649l1.615-168.379c.42-43.876-34.89-79.671-78.596-79.671-43.41 0-78.6 35.33-78.6 78.911v70.217c0 23.734-10.199 45.037-26.535 59.807-14.22 12.858-32.969 20.645-53.601 20.645-20.632 0-39.381-7.787-53.602-20.645-16.336-14.77-26.534-36.073-26.534-59.807v-68.704c0-44.417-35.865-80.424-80.106-80.424h-55.047"
        ></path>

        <path
          stroke="#1B3945"
          strokeWidth="1.751"
          d="M2.876 295.022V119.978C2.876 54.164 53.987.876 116.958.876h143.698c62.971 0 114.082 53.288 114.082 119.102v72.077c0 27.398 21.29 49.673 47.631 49.673S470 219.453 470 192.055v-73.663C470 53.454 520.431.876 582.562.876c62.555 0 113.16 53.27 112.557 118.648l-1.63 176.645c-.603 65.363-51.534 117.955-114.077 117.955H116.958c-62.971 0-114.082-53.288-114.082-119.102zm63.448 0c0 29.128 22.635 52.806 50.634 52.806h462.454c27.808 0 50.364-23.369 50.631-52.298l1.63-176.645c.263-28.444-21.766-51.713-49.111-51.713-27.159 0-49.113 22.967-49.113 51.22v73.663c0 34.23-14.204 64.988-36.784 86.212-19.686 18.503-45.733 29.757-74.296 29.757-28.563 0-54.611-11.254-74.296-29.757-22.58-21.224-36.784-51.982-36.784-86.212v-72.077c0-29.128-22.634-52.806-50.633-52.806H116.958c-28 0-50.633 23.678-50.633 52.806v175.044z"
          opacity="0.25"
        ></path>
        <path
          stroke="#1B3945"
          strokeWidth="1.751"
          d="M6.876 292.624V121.376c0-64.358 51.093-116.5 114.082-116.5h143.698c62.988 0 114.082 52.142 114.082 116.5v70.514c0 26.832 21.308 48.615 47.631 48.615S474 218.722 474 191.89v-72.066C474 56.323 524.413 4.876 586.562 4.876c62.573 0 113.16 52.124 112.557 116.055l-1.63 172.815c-.603 63.918-51.517 115.378-114.077 115.378H120.958c-62.989 0-114.082-52.142-114.082-116.5zm63.448 0c0 28.525 22.653 51.68 50.634 51.68h462.454c27.791 0 50.364-22.853 50.631-51.183l1.63-172.814c.263-27.855-21.784-50.61-49.111-50.61-27.142 0-49.113 22.46-49.113 50.127v72.066c0 33.475-14.198 63.56-36.777 84.322-19.684 18.1-45.734 29.113-74.303 29.113-28.569 0-54.619-11.013-74.303-29.113-22.579-20.762-36.777-50.847-36.777-84.322v-70.514c0-28.525-22.652-51.68-50.633-51.68H120.958c-27.981 0-50.634 23.156-50.634 51.68v171.248z"
          opacity="0.5"
        ></path>
        <path
          fill="#03212D"
          stroke="#1B3945"
          strokeWidth="1.7"
          d="M10.85 288.118v-166.2C10.85 59.472 61.472 8.85 123.918 8.85h142.396c62.446 0 113.068 50.622 113.068 113.067v68.436c0 26.058 21.124 47.182 47.182 47.182 26.058 0 47.182-21.124 47.182-47.182v-69.942c0-61.613 49.947-111.561 111.561-111.561 62.033 0 112.153 50.605 111.555 112.635l-1.615 167.722c-.597 62.018-51.041 111.978-113.062 111.978H123.918c-62.446 0-113.068-50.622-113.068-113.067zm62.91 0c0 27.701 22.456 50.158 50.158 50.158h458.267c27.513 0 49.89-22.163 50.155-49.675l1.616-167.721c.26-27.052-21.597-49.12-48.649-49.12-26.869 0-48.651 21.782-48.651 48.651v69.942c0 32.483-14.067 61.679-36.444 81.831-19.508 17.569-45.328 28.261-73.648 28.261-28.32 0-54.141-10.692-73.649-28.261-22.377-20.152-36.443-49.348-36.443-81.831v-68.436c0-27.7-22.456-50.157-50.158-50.157H123.918c-27.702 0-50.158 22.456-50.158 50.158v166.2z"
        ></path>
        <path
          stroke="#1B3945"
          strokeWidth="1.7"
          d="M418.85 338.28H435v62.432h-16.15V338.28zM335.85 338.28H352v62.432h-16.15V338.28zM435.15 338.28h16.15v62.432h-16.15V338.28z"
        ></path>
        <path
          stroke="#1B3945"
          strokeWidth="1.7"
          d="M351.999 338.28h16.15v62.432h-16.15V338.28z"
        ></path>
        <path
          id="path-start"
          stroke="#1B3945"
          strokeWidth="1.7"
          d="M319.4 338.28h146.2v62.903H319.4V338.28z"
        ></path>

        <path
          stroke="#1B3945"
          strokeWidth="1.7"
          d="M319.4 338.08h16.15v62.432H319.4V338.08z"
        ></path>
        <path
          id="path"
          stroke={color}
          strokeWidth="2.55"
          d="M124.532 369.358c-44.242 0-81.382-36.007-81.382-80.425v-166.85c0-44.417 37.14-80.424 81.382-80.424h142.39c44.242 0 80.107 36.007 80.107 80.424v68.704c0 23.734 10.198 45.037 26.533 59.807 14.221 12.858 32.97 20.645 53.603 20.645 20.632 0 39.38-7.787 53.601-20.645 16.335-14.77 26.534-36.073 26.534-59.807V120.57c0-43.581 35.19-78.911 78.6-78.911 43.706 0 79.017 35.795 78.597 79.671l-1.615 168.379c-.424 44.112-36.163 79.649-80.103 79.649H124.532z"
        ></path>

        <g stroke={color} strokeWidth="1.7" filter="url(#filter0_d_0_1)">
          <path
            fill="#02131B"
            d="M60.3 90.45c8.92 0 16.15-7.23 16.15-16.15 0-8.92-7.23-16.15-16.15-16.15-8.92 0-16.15 7.23-16.15 16.15 0 8.92 7.23 16.15 16.15 16.15z"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M61.716 76.425l-3.541 3.542-3.542-3.542"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M65.966 68.633h-4.958a2.833 2.833 0 00-2.834 2.834v8.5"
          ></path>
        </g>
        <g stroke={color} strokeWidth="1.7" filter="url(#filter1_d_0_1)">
          <path
            fill="#02131B"
            d="M61.6 359.2c8.92 0 16.15-7.231 16.15-16.15 0-8.919-7.23-16.15-16.15-16.15-8.92 0-16.15 7.231-16.15 16.15 0 8.919 7.23 16.15 16.15 16.15z"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M63.725 341.633l3.541 3.542-3.541 3.542"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M55.933 337.383v4.959a2.832 2.832 0 002.834 2.833h8.5"
          ></path>
        </g>
        <path
          fill="#02131B"
          stroke={color}
          strokeWidth="1.7"
          d="M283.35 387.45c8.919 0 16.15-7.231 16.15-16.15 0-8.919-7.231-16.15-16.15-16.15-8.92 0-16.15 7.231-16.15 16.15 0 8.919 7.23 16.15 16.15 16.15z"
        ></path>
        <g clipPath="url(#clip0_0_1)">
          <path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.7"
            d="M289.583 374.7a1.416 1.416 0 01-1.417 1.417h-12.041c-.78 0-.921-.425-.284-.921l12.609-10.2c.637-.496 1.133-.283 1.133.496v9.208z"
          ></path>
        </g>
        <path
          fill="#02131B"
          stroke={color}
          strokeWidth="1.7"
          d="M619.1 376.55c8.919 0 16.15-7.231 16.15-16.15 0-8.919-7.231-16.15-16.15-16.15-8.92 0-16.15 7.231-16.15 16.15 0 8.919 7.23 16.15 16.15 16.15z"
        ></path>
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
          d="M617.684 358.275l3.541-3.542 3.542 3.542"
        ></path>
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
          d="M613.434 366.067h4.958a2.834 2.834 0 002.833-2.834v-8.5"
        ></path>
        <g filter="url(#filter2_d_0_1)">
          <ellipse
            cx="653.1"
            cy="92.8"
            fill="#02131B"
            rx="15.3"
            ry="15.3"
          ></ellipse>
          <path
            stroke={color}
            strokeWidth="1.7"
            d="M653.1 108.95c8.919 0 16.15-7.231 16.15-16.15 0-8.92-7.231-16.15-16.15-16.15-8.92 0-16.15 7.23-16.15 16.15 0 8.919 7.23 16.15 16.15 16.15z"
          ></path>
        </g>
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
          d="M650.975 94.217l-3.542-3.542 3.542-3.542"
        ></path>
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
          d="M658.767 98.466v-4.958a2.835 2.835 0 00-2.834-2.833h-8.5"
        ></path>
        <g filter="url(#filter3_d_0_1)">
          <ellipse
            cx="486.501"
            cy="236.45"
            fill="#02131B"
            rx="15.3"
            ry="15.3"
          ></ellipse>
          <path
            stroke={color}
            strokeWidth="1.7"
            d="M486.501 252.6c8.92 0 16.15-7.23 16.15-16.15 0-8.919-7.23-16.15-16.15-16.15-8.919 0-16.15 7.231-16.15 16.15 0 8.92 7.231 16.15 16.15 16.15z"
          ></path>
        </g>
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
          d="M484.376 235.033l-3.542 3.542 3.542 3.542"
        ></path>
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
          d="M492.167 230.783v4.959a2.83 2.83 0 01-2.833 2.833h-8.5"
        ></path>
        <g filter="url(#filter4_d_0_1)">
          <ellipse
            cx="327.85"
            cy="74.5"
            fill="#02131B"
            rx="15.3"
            ry="15.3"
          ></ellipse>
          <path
            stroke={color}
            strokeWidth="1.7"
            d="M327.85 90.65c8.919 0 16.15-7.23 16.15-16.15 0-8.92-7.231-16.15-16.15-16.15-8.92 0-16.15 7.23-16.15 16.15 0 8.92 7.23 16.15 16.15 16.15z"
          ></path>
        </g>
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
          d="M325.725 75.917l-3.542-3.542 3.542-3.542"
        ></path>
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
          d="M333.517 80.167v-4.959a2.835 2.835 0 00-2.834-2.833h-8.5"
        ></path>

        {data.timer_started && (
          <g id="rect">
            <Car objectDetected={objectDetected} />
          </g>
        )}

        <defs>
          <filter
            id="filter0_d_0_1"
            width="119"
            height="119"
            x="0.8"
            y="18.2"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dy="3.4"></feOffset>
            <feGaussianBlur stdDeviation="21.25"></feGaussianBlur>
            <feComposite in2="hardAlpha" operator="out"></feComposite>
            <feColorMatrix values="0 0 0 0 0.439216 0 0 0 0 0.486275 0 0 0 0 0.509804 0 0 0 0.25 0"></feColorMatrix>
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_1"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_0_1"
              result="shape"
            ></feBlend>
          </filter>
          <filter
            id="filter1_d_0_1"
            width="119"
            height="119"
            x="2.1"
            y="286.95"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dy="3.4"></feOffset>
            <feGaussianBlur stdDeviation="21.25"></feGaussianBlur>
            <feComposite in2="hardAlpha" operator="out"></feComposite>
            <feColorMatrix values="0 0 0 0 0.439216 0 0 0 0 0.486275 0 0 0 0 0.509804 0 0 0 0.25 0"></feColorMatrix>
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_1"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_0_1"
              result="shape"
            ></feBlend>
          </filter>
          <filter
            id="filter2_d_0_1"
            width="134"
            height="134"
            x="586.1"
            y="29.8"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dy="4"></feOffset>
            <feGaussianBlur stdDeviation="25"></feGaussianBlur>
            <feComposite in2="hardAlpha" operator="out"></feComposite>
            <feColorMatrix values="0 0 0 0 0.439216 0 0 0 0 0.486275 0 0 0 0 0.509804 0 0 0 0.25 0"></feColorMatrix>
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_1"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_0_1"
              result="shape"
            ></feBlend>
          </filter>
          <filter
            id="filter3_d_0_1"
            width="134"
            height="134"
            x="419.501"
            y="173.45"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dy="4"></feOffset>
            <feGaussianBlur stdDeviation="25"></feGaussianBlur>
            <feComposite in2="hardAlpha" operator="out"></feComposite>
            <feColorMatrix values="0 0 0 0 0.439216 0 0 0 0 0.486275 0 0 0 0 0.509804 0 0 0 0.25 0"></feColorMatrix>
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_1"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_0_1"
              result="shape"
            ></feBlend>
          </filter>
          <filter
            id="filter4_d_0_1"
            width="134"
            height="134"
            x="260.85"
            y="11.5"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dy="4"></feOffset>
            <feGaussianBlur stdDeviation="25"></feGaussianBlur>
            <feComposite in2="hardAlpha" operator="out"></feComposite>
            <feColorMatrix values="0 0 0 0 0.439216 0 0 0 0 0.486275 0 0 0 0 0.509804 0 0 0 0.25 0"></feColorMatrix>
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_1"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_0_1"
              result="shape"
            ></feBlend>
          </filter>
          <clipPath id="clip0_0_1">
            <path
              fill="#fff"
              d="M0 0H17V17H0z"
              transform="translate(274 361.95)"
            ></path>
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}
