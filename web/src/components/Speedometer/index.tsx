'use client'

import { twMerge } from 'tailwind-merge'
import ArcProgress from 'react-arc-progress'

import { Value } from '../Value'

interface SpeedometerProps {
  speed: number
  pwm: number
}

export function Speedometer({ speed, pwm }: SpeedometerProps) {
  const maxSpeed = 1.6
  const speedometerProgress = speed / maxSpeed

  return (
    <div className="flex flex-col items-center w-full p-2">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="relative flex items-center justify-center">
          <ArcProgress
            className="rotate-[30deg]"
            progress={speedometerProgress}
            text={''}
            size={130}
            thickness={6}
            fillColor="#0C9CD1"
            emptyColor="#374151"
            arcStart={120}
            arcEnd={360}
          />

          <div className="absolute top-[-20px] right-[-36px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="194"
              height="162"
              fill="none"
              viewBox="0 0 194 162"
            >
              <g filter={speed >= 0 ? 'url(#filter5_d_358_210)' : ''}>
                <path
                  className={
                    speed >= 0 ? 'stroke-brand-blue' : 'stroke-gray-700'
                  }
                  strokeLinecap="round"
                  strokeWidth="3.612"
                  d="M51.985 109.472l4.95-4.95"
                ></path>
              </g>
              <g filter={speed >= 0.23 ? 'url(#filter1_d_358_210)' : ''}>
                <path
                  className={
                    speed >= 0.23 ? 'stroke-brand-blue' : 'stroke-gray-700'
                  }
                  strokeLinecap="round"
                  strokeWidth="3.612"
                  d="M44 81.17h7"
                ></path>
              </g>
              <g filter={speed >= 0.48 ? 'url(#filter3_d_358_210)' : ''}>
                <path
                  className={
                    speed >= 0.48 ? 'stroke-brand-blue' : 'stroke-gray-700'
                  }
                  strokeLinecap="round"
                  strokeWidth="3.612"
                  d="M58.434 51.925l4.95 4.95"
                ></path>
              </g>
              <g filter={speed >= 0.8 ? 'url(#filter0_d_358_210)' : ''}>
                <path
                  className={
                    speed >= 0.8 ? 'stroke-brand-blue' : 'stroke-gray-700'
                  }
                  strokeLinecap="round"
                  strokeWidth="3.612"
                  d="M94 43.434v-7"
                ></path>
              </g>
              <g filter={speed >= 1.1 ? 'url(#filter4_d_358_210)' : ''}>
                <path
                  className={
                    speed >= 1.1 ? 'stroke-brand-blue' : 'stroke-gray-700'
                  }
                  strokeLinecap="round"
                  strokeWidth="3.612"
                  d="M122.302 58.595l6.671-6.67"
                ></path>
              </g>
              <g filter={speed >= 1.37 ? 'url(#filter2_d_358_210)' : ''}>
                <path
                  className={
                    speed >= 1.37 ? 'stroke-brand-blue' : 'stroke-gray-700'
                  }
                  strokeLinecap="round"
                  strokeWidth="3.612"
                  d="M134.566 81.17h7"
                ></path>
              </g>
              <g filter={speed >= 1.6 ? 'url(#filter6_d_358_210)' : ''}>
                <path
                  className={
                    speed >= 1.6 ? 'stroke-brand-blue' : 'stroke-gray-700'
                  }
                  strokeLinecap="round"
                  strokeWidth="3.612"
                  d="M129.345 102.868l4.949 4.95"
                ></path>
              </g>
              <defs>
                <filter
                  id="filter0_d_358_210"
                  width="53.613"
                  height="60.612"
                  x="67.193"
                  y="9.628"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  ></feColorMatrix>
                  <feOffset></feOffset>
                  <feGaussianBlur stdDeviation="12.5"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix values="0 0 0 0 0.0470588 0 0 0 0 0.611765 0 0 0 0 0.819608 0 0 0 1 0"></feColorMatrix>
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_358_210"
                  ></feBlend>
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_358_210"
                    result="shape"
                  ></feBlend>
                </filter>
                <filter
                  id="filter1_d_358_210"
                  width="60.613"
                  height="53.612"
                  x="17.193"
                  y="54.364"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  ></feColorMatrix>
                  <feOffset></feOffset>
                  <feGaussianBlur stdDeviation="12.5"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix values="0 0 0 0 0.0470588 0 0 0 0 0.611765 0 0 0 0 0.819608 0 0 0 1 0"></feColorMatrix>
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_358_210"
                  ></feBlend>
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_358_210"
                    result="shape"
                  ></feBlend>
                </filter>
                <filter
                  id="filter2_d_358_210"
                  width="110.613"
                  height="103.613"
                  x="82.76"
                  y="29.363"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  ></feColorMatrix>
                  <feOffset></feOffset>
                  <feGaussianBlur stdDeviation="25"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix values="0 0 0 0 0.0470588 0 0 0 0 0.611765 0 0 0 0 0.819608 0 0 0 0.5 0"></feColorMatrix>
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_358_210"
                  ></feBlend>
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_358_210"
                    result="shape"
                  ></feBlend>
                </filter>
                <filter
                  id="filter3_d_358_210"
                  width="58.563"
                  height="58.562"
                  x="31.627"
                  y="25.118"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  ></feColorMatrix>
                  <feOffset></feOffset>
                  <feGaussianBlur stdDeviation="12.5"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix values="0 0 0 0 0.0470588 0 0 0 0 0.611765 0 0 0 0 0.819608 0 0 0 1 0"></feColorMatrix>
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_358_210"
                  ></feBlend>
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_358_210"
                    result="shape"
                  ></feBlend>
                </filter>
                <filter
                  id="filter4_d_358_210"
                  width="110.284"
                  height="110.283"
                  x="70.495"
                  y="0.118"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  ></feColorMatrix>
                  <feOffset></feOffset>
                  <feGaussianBlur stdDeviation="25"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix values="0 0 0 0 0.0470588 0 0 0 0 0.611765 0 0 0 0 0.819608 0 0 0 0.5 0"></feColorMatrix>
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_358_210"
                  ></feBlend>
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_358_210"
                    result="shape"
                  ></feBlend>
                </filter>
                <filter
                  id="filter5_d_358_210"
                  width="108.562"
                  height="108.562"
                  x="0.179"
                  y="52.716"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  ></feColorMatrix>
                  <feOffset></feOffset>
                  <feGaussianBlur stdDeviation="25"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix values="0 0 0 0 0.0470588 0 0 0 0 0.611765 0 0 0 0 0.819608 0 0 0 0.5 0"></feColorMatrix>
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_358_210"
                  ></feBlend>
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_358_210"
                    result="shape"
                  ></feBlend>
                </filter>
                <filter
                  id="filter6_d_358_210"
                  width="108.562"
                  height="108.562"
                  x="77.538"
                  y="51.062"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  ></feColorMatrix>
                  <feOffset></feOffset>
                  <feGaussianBlur stdDeviation="25"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix values="0 0 0 0 0.0470588 0 0 0 0 0.611765 0 0 0 0 0.819608 0 0 0 0.5 0"></feColorMatrix>
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_358_210"
                  ></feBlend>
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_358_210"
                    result="shape"
                  ></feBlend>
                </filter>
              </defs>
            </svg>
          </div>

          <Value
            size="lg-md"
            value={speed}
            unit="m/s"
            styles="absolute"
            breakline
          />
        </div>

        <progress
          className={twMerge(
            'h-1.5 w-full mt-[-16px] mb-2 px-5 [&::-moz-progress-bar]:bg-brand-blue [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-bar]:bg-gray-700 [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-value]:bg-brand-blue',
            'transition-width duration-500 ease-in-out',
          )}
          value={pwm}
          max={255}
        />

        <Value size="md" value={pwm} unit="PWM" />
      </div>
    </div>
  )
}
