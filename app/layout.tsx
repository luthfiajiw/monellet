import { Toaster } from 'react-hot-toast'
import './globals.css'
import { Karla } from 'next/font/google'

const inter = Karla({ weight: "400", subsets: ["latin"] })

export const metadata = {
  title: 'SilaWallet',
  description: 'Luthfi\'s personal budget tracker',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className={inter.className}>
        <Toaster
          position='top-center'
        />
        {children}
      </body>
    </html>
  )
}
