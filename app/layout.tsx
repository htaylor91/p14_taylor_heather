import './global.css'
import { roboto, copperplate } from './fonts/fonts'
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
    <html lang="en" className={`${roboto.variable} ${copperplate.variable}`}>
      <body className="bg-bkg text-content font-Roboto">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
