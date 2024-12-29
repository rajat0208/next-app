import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './navBar'
import AuthProvider from './auth/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className={inter.className}>
        <AuthProvider>
        <NavBar/>
        <main className='p-5'>{children}</main>
        </AuthProvider>
       </body>
    </html>
  )
}
