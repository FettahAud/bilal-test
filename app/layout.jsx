import { Layout } from '@/components/dom/Layout'
import '@/global.scss'

export const metadata = {
  title: 'Landing Page test',
  description: 'Landing Page test',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
      <head />
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
