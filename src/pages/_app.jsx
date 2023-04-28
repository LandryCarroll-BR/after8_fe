import '@/styles/tailwind.css'
import 'focus-visible'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from '@/services/apollo'
import localFont from '@next/font/local'

const caxton = localFont({
  src: '../../public/fonts/caxton.woff2',
  display: 'swap',
  variable: '--font-caxton',
})

const neueHaasDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/neuehaasdisplayroman.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/neuehaasdisplaymedium.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-nhd',
})

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <main className={`${caxton.variable} ${neueHaasDisplay.variable}`}>
        <Component {...pageProps} />
        <blink></blink>
      </main>
    </ApolloProvider>
  )
}
