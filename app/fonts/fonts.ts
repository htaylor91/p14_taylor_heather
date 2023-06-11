import { Nunito } from 'next/font/google'
import localFont from 'next/font/local';

export const copperplate = localFont({
  src: './copperplate.woff2',
  weight: '400',
  variable: '--font-copperplate',
});

export const nunito = Nunito(
  {
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-nunito',
  }
)