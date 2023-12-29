import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import { getServerSession } from 'next-auth'
import SessionProvider from '@/utils/SessionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Snippify',
  description: 'Share your code snippets!',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
        <Nav />
        {children}
        </SessionProvider>
        </body>
    </html>
  )
}
