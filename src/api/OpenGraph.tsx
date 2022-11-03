import { ImageResponse } from '@vercel/og'
import { description } from 'lib/next-seo'
import { NextRequest } from 'next/server'
import { getBaseURL } from 'utils/getBaseURL'
import { shuffle } from 'utils/shuffle'
import { NUMBER_OF_IMAGES } from '../pages/HomePage/HomePage'

export const OpenGraph = async (req: NextRequest) => {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
          fontFamily: '"Inter"',
        }}
      >
        <div tw="flex text-center text-white text-6xl font-black leading-normal">
          {description}
        </div>
        <div tw="flex mt-8">
          {shuffle([...Array(NUMBER_OF_IMAGES)].map((_, i) => i + 1))
            .slice(0, 8)
            .map((i) => (
              <div key={i} tw="flex">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  tw="rounded-lg w-24 h-24 m-4"
                  src={`${getBaseURL()}/gradients/${i}.gradients.ray.st.jpeg`}
                  // width={1000}
                  // height={1000}
                  alt="gradients"
                />
              </div>
            ))}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          style: 'normal',
          weight: 900,
          data: await fetch(new URL('./Inter-Black.ttf', import.meta.url)).then(
            (res) => res.arrayBuffer(),
          ),
        },
        {
          name: 'Inter',
          style: 'normal',
          weight: 400,
          data: await fetch(
            new URL('./Inter-Regular.ttf', import.meta.url),
          ).then((res) => res.arrayBuffer()),
        },
      ],
    },
  )
}
