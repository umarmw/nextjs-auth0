import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Auth0Provider } from '@auth0/auth0-react';
import config from '../config.json';

export default function App({ Component, pageProps }: AppProps) {
  return <Auth0Provider
    domain={config.domain}
    clientId={config.clientId}
    authorizationParams={{
      redirect_uri: config.redirect_uri
    }}
    cacheLocation="localstorage"
  ><Component {...pageProps} /></Auth0Provider>
}
