import { NextSeo } from 'next-seo'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { SEO } from 'src/lib/next-seo'
import 'styles/globals.css'

const isProd = () => process.env.NODE_ENV === 'production'

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
      <Script async defer src="https://buttons.github.io/buttons.js"></Script>
      {isProd() && (
        <Script
          async
          defer
          data-website-id="1399c1da-1ee7-4c74-a87b-747bacbe1785"
          src="https://u-ma.vercel.app/u.js"
        ></Script>
      )}
    </>
  )
}
