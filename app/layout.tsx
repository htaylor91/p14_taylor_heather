import './global.css'
import { nunito, copperplate } from './fonts/fonts';
import { Metadata } from 'next';
import Header from '@/components/Navigation/Header';
import Footer from '@/components/Navigation/Footer';

export const metadata: Metadata = {
  title: 'HRnet',
  description: 'Employee records application from Wealth Health',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en" className={`${nunito.className} ${copperplate.variable}`}>
      <body className={`root-layout bg-bkg text-content `}>
        <Header className={'border-b-brand-light'} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
