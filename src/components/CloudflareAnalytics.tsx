import Script from 'next/script'
import { useEffect } from 'react'

type Props = {
  origin?: string
  token: string
}

const isServer = () => typeof window === 'undefined'

export const CloudflareAnalytics = ({
  origin = 'https://gradients.ray.st',
  token,
}: Props) => {
  useEffect(() => {
    if (!isServer()) {
      let oldXHROpen = XMLHttpRequest.prototype.open
      // @ts-ignore
      XMLHttpRequest.prototype.open = function (
        method,
        url,
        async,
        user,
        password,
      ) {
        let newURL = url
        if (
          (typeof url === 'string' && url.includes('cloudflareinsights.com')) ||
          (typeof url === 'object' &&
            url.hostname.includes('cloudflareinsights.com'))
        ) {
          const { pathname, search } = new URL(url)
          newURL = `${origin}/cf${pathname}${search}`
        }

        // @ts-ignore
        return oldXHROpen.apply(this, [
          arguments[0],
          newURL,
          ...[...arguments].slice(2),
        ])
      }

      let oldSendBeacon = navigator.sendBeacon

      navigator.sendBeacon = function (url, data) {
        let newURL = url
        if (
          (typeof url === 'string' && url.includes('cloudflareinsights.com')) ||
          (typeof url === 'object' &&
            url.hostname.includes('cloudflareinsights.com'))
        ) {
          const { pathname, search } = new URL(url)
          newURL = `${origin}/cf${pathname}${search}`
        }

        return oldSendBeacon.apply(this, [newURL, data])
      }
    }
  }, [])

  return (
    <Script
      defer
      src={`${origin}/cf`}
      data-cf-beacon={JSON.stringify({ token })}
    />
  )
}
