import { DefaultSeoProps } from 'next-seo'

export const title = 'Title'

export const URL = 'https://userwebsitename.com'

export const SEO: DefaultSeoProps = {
  titleTemplate: `%s | ${title}`,
  defaultTitle: title,

  openGraph: {
    type: 'website',
    // url: URL,
    site_name: title,
    title,
    images: [
      {
        url: `/thumb.png`,
        alt: title,
        type: 'image/png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    handle: '@handle',
    cardType: 'summary_large_image',
  },
}
