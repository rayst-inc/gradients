import { DefaultSeoProps } from 'next-seo'

export const title = 'Rayst Gradients'

export const description =
  'A Collection of Beautiful Gradients Generated by AI.'

export const URL = 'https://gradients.ray.st'

export const SEO: DefaultSeoProps = {
  titleTemplate: `%s | ${title}`,
  defaultTitle: title,
  description,

  openGraph: {
    type: 'website',
    url: URL,
    site_name: title,
    title,
    description,
    images: [
      {
        url: `/api/og`,
        alt: title,
        type: 'image/png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    handle: '@rayst_inc',
    cardType: 'summary_large_image',
  },
}
