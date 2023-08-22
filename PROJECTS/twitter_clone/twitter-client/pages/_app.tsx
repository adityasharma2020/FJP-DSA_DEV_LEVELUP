import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter ,Quicksand} from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
const   quickSand = Quicksand({subsets:["latin"]})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={quickSand.className}>
      <Component {...pageProps} />
    </div>
  )
}
