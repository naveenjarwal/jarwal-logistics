// @ts-ignore: global CSS import handled by Next/PostCSS
import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Jarwal Logistics',
  description: 'Jarwal Logistics — Trusted rail cargo & logistics across India.'
}

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}