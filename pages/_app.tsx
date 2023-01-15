import { Analytics } from '@vercel/analytics/react'
import { CloudflareAnalytics } from 'components/CloudflareAnalytics'
import { NextSeo } from 'next-seo'
import { AppProps } from 'next/app'
import Head from 'next/head'
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
      {isProd() && (
        <>
          <Analytics />
          <CloudflareAnalytics token="285569a04b43494a89a47efc05a29737" />
        </>
      )}
    </>
  )
}
