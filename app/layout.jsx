import { Layout } from '@/components/dom/Layout'
import '@/global.scss'
import { Geologica } from 'next/font/google'

const font = Geologica({
  subsets: ['latin'],
})

export const metadata = {
  title: 'Landing Page test',
  description: 'Landing Page test',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
      <head />
      <body className={font.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
