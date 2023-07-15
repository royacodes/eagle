import { Footer, Navbar } from '@/components'
import './globals.css'


export const metadata = {
  title: 'Game Hub',
  description: 'Play the best games in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
