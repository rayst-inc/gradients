import { description, title } from 'lib/next-seo'
import Image from 'next/image'
import { shuffle } from 'utils/shuffle'

export function HomePage() {
  return (
    <>
      <div className="flex w-full flex-col gap-8 py-16 text-white">
        <div className="mx-auto w-full max-w-5xl">
          <div className="flex flex-col">
            <h1 className="p-1 text-center text-3xl font-black">{title}</h1>
            <p className="p-4 text-center text-lg">{description}</p>
          </div>
          <div className="grid w-full grid-cols-2 gap-8 p-8 md:grid-cols-3 lg:grid-cols-4">
            {shuffle([...Array(32)].map((_, i) => i + 1)).map((i) => (
              <div key={i} className="grid place-content-center">
                <Image
                  priority
                  className="rounded-lg"
                  src={`/${i}.jpeg`}
                  width={1000}
                  height={1000}
                  alt="gradients"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
