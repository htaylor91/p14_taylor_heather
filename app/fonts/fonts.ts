import { Roboto } from 'next/font/google'
import localFont from 'next/font/local';

export const copperplate = localFont({
  src: './copperplate.woff2',
  weight: '400',
  variable: '--font-copperplate',
});

export const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-roboto',
})