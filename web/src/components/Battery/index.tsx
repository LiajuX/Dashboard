'use client'

import { VariantProps, tv } from 'tailwind-variants'

const battery = tv({
  slots: {
    slotOne: '',
    slotTwo: '',
    slotThree: '',
    slotFour: '',
    slotFive: '',
    slotSix: '',
    slotSeven: '',
  },

  variants: {
    level: {
      0: {
        slotOne: 'fill-white-opacity-5',
        slotTwo: 'fill-white-opacity-5',
        slotThree: 'fill-white-opacity-5',
        slotFour: 'fill-white-opacity-5',
        slotFive: 'fill-white-opacity-5',
        slotSix: 'fill-white-opacity-5',
        slotSeven: 'fill-white-opacity-5',
      },

      1: {
        slotOne: 'fill-white-opacity-5',
        slotTwo: 'fill-white-opacity-5',
        slotThree: 'fill-white-opacity-5',
        slotFour: 'fill-white-opacity-5',
        slotFive: 'fill-white-opacity-5',
        slotSix: 'fill-white-opacity-5',
        slotSeven: 'fill-red-opacity-80',
      },

      2: {
        slotOne: 'fill-white-opacity-5',
        slotTwo: 'fill-white-opacity-5',
        slotThree: 'fill-white-opacity-5',
        slotFour: 'fill-white-opacity-5',
        slotFive: 'fill-white-opacity-5',
        slotSix: 'fill-white-opacity-5',
        slotSeven: 'fill-red-opacity-80',
      },

      3: {
        slotOne: 'fill-white-opacity-5',
        slotTwo: 'fill-white-opacity-5',
        slotThree: 'fill-white-opacity-5',
        slotFour: 'fill-white-opacity-5',
        slotFive: 'fill-white-opacity-5',
        slotSix: 'fill-red-opacity-80',
        slotSeven: 'fill-red-opacity-80',
      },

      4: {
        slotOne: 'fill-white-opacity-5',
        slotTwo: 'fill-white-opacity-5',
        slotThree: 'fill-white-opacity-5',
        slotFour: 'fill-white-opacity-5',
        slotFive: 'fill-yellow-opacity-80',
        slotSix: 'fill-yellow-opacity-80',
        slotSeven: 'fill-yellow-opacity-80',
      },

      5: {
        slotOne: 'fill-white-opacity-5',
        slotTwo: 'fill-white-opacity-5',
        slotThree: 'fill-white-opacity-5',
        slotFour: 'fill-white-opacity-5',
        slotFive: 'fill-yellow-opacity-80',
        slotSix: 'fill-yellow-opacity-80',
        slotSeven: 'fill-yellow-opacity-80',
      },

      6: {
        slotOne: 'fill-white-opacity-5',
        slotTwo: 'fill-white-opacity-5',
        slotThree: 'fill-white-opacity-5',
        slotFour: 'fill-white-opacity-5',
        slotFive: 'fill-yellow-opacity-80',
        slotSix: 'fill-yellow-opacity-80',
        slotSeven: 'fill-yellow-opacity-80',
      },

      7: {
        slotOne: 'fill-white-opacity-5',
        slotTwo: 'fill-white-opacity-5',
        slotThree: 'fill-white-opacity-5',
        slotFour: 'fill-yellow-opacity-80',
        slotFive: 'fill-yellow-opacity-80',
        slotSix: 'fill-yellow-opacity-80',
        slotSeven: 'fill-yellow-opacity-80',
      },

      8: {
        slotOne: 'fill-white-opacity-5',
        slotTwo: 'fill-white-opacity-5',
        slotThree: 'fill-green-opacity-80',
        slotFour: 'fill-green-opacity-80',
        slotFive: 'fill-green-opacity-80',
        slotSix: 'fill-green-opacity-80',
        slotSeven: 'fill-green-opacity-80',
      },

      9: {
        slotOne: 'fill-white-opacity-5',
        slotTwo: 'fill-white-opacity-5',
        slotThree: 'fill-green-opacity-80',
        slotFour: 'fill-green-opacity-80',
        slotFive: 'fill-green-opacity-80',
        slotSix: 'fill-green-opacity-80',
        slotSeven: 'fill-green-opacity-80',
      },

      10: {
        slotOne: 'fill-white-opacity-5',
        slotTwo: 'fill-green-opacity-80',
        slotThree: 'fill-green-opacity-80',
        slotFour: 'fill-green-opacity-80',
        slotFive: 'fill-green-opacity-80',
        slotSix: 'fill-green-opacity-80',
        slotSeven: 'fill-green-opacity-80',
      },

      11: {
        slotOne: 'fill-white-opacity-5',
        slotTwo: 'fill-green-opacity-80',
        slotThree: 'fill-green-opacity-80',
        slotFour: 'fill-green-opacity-80',
        slotFive: 'fill-green-opacity-80',
        slotSix: 'fill-green-opacity-80',
        slotSeven: 'fill-green-opacity-80',
      },

      12: {
        slotOne: 'fill-green-opacity-80',
        slotTwo: 'fill-green-opacity-80',
        slotThree: 'fill-green-opacity-80',
        slotFour: 'fill-green-opacity-80',
        slotFive: 'fill-green-opacity-80',
        slotSix: 'fill-green-opacity-80',
        slotSeven: 'fill-green-opacity-80',
      },
    },
  },

  defaultVariants: {
    level: 0,
  },
})

type BatteryProps = VariantProps<typeof battery>

export function Battery({ level }: BatteryProps) {
  const {
    slotOne,
    slotTwo,
    slotThree,
    slotFour,
    slotFive,
    slotSix,
    slotSeven,
  } = battery({ level })

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="84"
      fill="none"
      viewBox="0 0 48 84"
    >
      <rect
        width="71"
        height="47"
        x="0.5"
        y="83.5"
        className="fill-petrol-900 stroke-petrol-500"
        rx="7.5"
        transform="rotate(-90 .5 83.5)"
      ></rect>
      <rect
        width="7"
        height="31"
        x="8.5"
        y="7.5"
        className="fill-petrol-900 stroke-petrol-500"
        rx="3.5"
        transform="rotate(-90 8.5 7.5)"
      ></rect>
      <rect
        width="6"
        height="36"
        x="6"
        y="78"
        className={slotSeven()}
        rx="2"
        transform="rotate(-90 6 78)"
      ></rect>
      <rect
        width="6"
        height="36"
        x="6"
        y="69"
        className={slotSix()}
        rx="2"
        transform="rotate(-90 6 69)"
      ></rect>
      <rect
        width="6"
        height="36"
        x="6"
        y="60"
        className={slotFive()}
        rx="2"
        transform="rotate(-90 6 60)"
      ></rect>
      <rect
        width="6"
        height="36"
        x="6"
        y="51"
        className={slotFour()}
        rx="2"
        transform="rotate(-90 6 51)"
      ></rect>
      <rect
        width="6"
        height="36"
        x="6"
        y="42"
        className={slotThree()}
        rx="2"
        transform="rotate(-90 6 42)"
      ></rect>
      <rect
        width="6"
        height="36"
        x="6"
        y="33"
        className={slotTwo()}
        rx="2"
        transform="rotate(-90 6 33)"
      ></rect>
      <rect
        width="6"
        height="36"
        x="6"
        y="24"
        className={slotOne()}
        rx="2"
        transform="rotate(-90 6 24)"
      ></rect>

      <path
        className="fill-petrol-900 stroke-petrol-500"
        d="M33.572 48.182h.009L20.366 62.341s0 0 0 0a.5.5 0 01-.855-.437s0 0 0 0l1.832-9.165.083-.416-.398-.15-7.204-2.705h0a.5.5 0 01-.188-.813h0l.003-.003 14-14.999s0 0 0 0a.5.5 0 01.855.437s0 0 0 0l-1.837 9.174-.083.417.398.15 7.202 2.7s0 0 0 0a.501.501 0 01.187.81l-.789.841z"
      ></path>
    </svg>
  )
}
