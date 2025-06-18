import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
