'use client'

import Image from 'next/image'
import Link from 'next/link'
import { LayoutDashboard, Map } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Home', title: 'Dashboard', icon: LayoutDashboard, href: '/' },
  { name: 'Location', title: 'Localização', icon: Map, href: '/location' },
]

export function Header() {
  const currentTab = usePathname()

  return (
    <header className="flex-1 items-center p-4">
      <div className="flex items-center justify-between max-w-[1120px] mx-auto">
        <Image src="/assets/logo.svg" alt="CarAI" width={96} height={28} />

        <nav>
          <ul className="flex align-center justify-center gap-4 p-2 rounded-full bg-petrol-800 font-medium text-sm">
            {navigation.map(({ name, title, icon: Icon, href }) => (
              <Link
                key={name}
                href={href}
                className={twMerge(
                  'flex items-center gap-2 px-4 py-2.5 rounded-full',
                  currentTab === href
                    ? 'text-petrol-900 bg-gradient-to-r from-brand-aqua to-brand-blue drop-shadow-blue'
                    : 'text-lightgreen-200 hover:text-lightgreen-300',
                )}
              >
                <Icon size={20} />

                {title}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
