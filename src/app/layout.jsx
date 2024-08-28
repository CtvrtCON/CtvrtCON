import { Inter, Montserrat_Alternates } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const montserratAlternates = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-montserrat_alternates',
})

export const metadata = {
  title: {
    template: '%s - ČtvrtCON',
    default: 'ČtvrtCON - 1. celodenní Čtvrtkon konference',
  },
  description: 'Historicky první celodenní Čtvrtkon konference',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        montserratAlternates.variable,
      )}
    >
      <body className="flex min-h-full">
        <div className="flex w-full flex-col">{children}</div>
      </body>
    </html>
  )
}
