import { client } from '@/app/api'
import '@/styles/globals.css'
import { ApolloProvider } from '@apollo/client'

export default function App({ Component, pageProps }) {
  return
  <ApolloProvider client={client} >
    <Alerts />
    <Component {...pageProps} />
  </ApolloProvider>
}
