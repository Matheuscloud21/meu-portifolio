import type { Metadata } from 'next'
import { Poppins, Inter, DM_Sans, Urbanist } from 'next/font/google'
import './globals.css'

// Configuração das fontes
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-dm-sans',
})

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-urbanist',
})

export const metadata: Metadata = {
  title: 'Portfólio | Dev Web',
  description: 'Desenvolvedor Full Stack especializado em React, Next.js e tecnologias modernas',
  generator: 'Next.js',
  icons: {
    icon: '/icon03.png',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} ${inter.variable} ${dmSans.variable} ${urbanist.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
