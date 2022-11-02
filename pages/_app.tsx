import { NextSeo } from 'next-seo'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { SEO } from 'src/lib/next-seo'
import 'styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>

      <NextSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}
