import { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import { ArduinoDataProvider } from '../contexts/ArduinoDataContext'

import { Header } from '../components/Header'

import '../styles/global.css'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Dashboard | CarAI',
  description: 'Challenge 2023 - CarAI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="bg-petrol-900 antialiased">
      <body className={roboto.className}>
        <Header />

        <ArduinoDataProvider>
          <main>{children}</main>
        </ArduinoDataProvider>
      </body>
    </html>
  )
}
