import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Quicksand } from 'next/font/google'
import { GoogleOAuthProvider } from '@react-oauth/google'

const inter = Inter({ subsets: ['latin'] })
const quickSand = Quicksand({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider clientId='97487289553-bc27am2dlbfoue41hlhotvc3g26d2jr1.apps.googleusercontent.com'>
      <div className={quickSand.className}>
        <Component {...pageProps} />
      </div>
    </GoogleOAuthProvider>
  )
}
