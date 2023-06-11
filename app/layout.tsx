import { Nunito } from 'next/font/google'
import { Metadata } from 'next';
import Header from '@/components/Navigation/Header';
import Footer from '@/components/Navigation/Footer';
import './global.css'

export const metadata: Metadata = {
  title: 'HRnet',
  description: 'Employee records application from Wealth Health',
}

export const nunito = Nunito(
  {
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-nunito',
  }
)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en" className={`${nunito.className} `}>
      <body className={`root-layout bg-bkg text-content `}>
        <Header className={'border-b-brand-light'} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
