import Alerts from '@/components/notification/Alerts'
import { client } from '@/services/api'
import '@/styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import { AuthProvider } from '@/services/auth'

export default function App({ Component, pageProps }) {
  return <ApolloProvider client={client} >
    <AuthProvider>
      <Alerts />
      <Component {...pageProps} />
    </AuthProvider></ApolloProvider>
}
