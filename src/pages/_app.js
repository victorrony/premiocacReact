import Alerts from '@/components/notification/Alerts'
import { client } from '@/services/api'
import '@/styles/globals.css'
import { ApolloProvider } from '@apollo/client'

export default function App({ Component, pageProps }) {
  return <ApolloProvider client={client} >
    <Alerts />
    <Component {...pageProps} />
  </ApolloProvider>
}
