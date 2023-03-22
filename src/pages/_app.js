import Alerts from "@/components/notification/Alerts";
import { client } from "@/services/api";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { AuthProvider } from "@/services/auth";
import { AppProvider } from "@/services/context";

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <AppProvider>
          <Alerts />
          <Component {...pageProps} />
        </AppProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}
