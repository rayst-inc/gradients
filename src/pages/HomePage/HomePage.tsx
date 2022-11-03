import { Footer } from 'components/Footer'
import { AnimatePresence, motion } from 'framer-motion'
import { description, title } from 'lib/next-seo'
import Image from 'next/image'
import { shuffle } from 'utils/shuffle'

export const NUMBER_OF_IMAGES = 52

const CheckIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mr-1 inline-block"
  >
    <path
      d="M7.49991 0.877045C3.84222 0.877045 0.877075 3.84219 0.877075 7.49988C0.877075 11.1575 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1575 14.1227 7.49988C14.1227 3.84219 11.1576 0.877045 7.49991 0.877045ZM1.82708 7.49988C1.82708 4.36686 4.36689 1.82704 7.49991 1.82704C10.6329 1.82704 13.1727 4.36686 13.1727 7.49988C13.1727 10.6329 10.6329 13.1727 7.49991 13.1727C4.36689 13.1727 1.82708 10.6329 1.82708 7.49988ZM10.1589 5.53774C10.3178 5.31191 10.2636 5.00001 10.0378 4.84109C9.81194 4.68217 9.50004 4.73642 9.34112 4.96225L6.51977 8.97154L5.35681 7.78706C5.16334 7.59002 4.84677 7.58711 4.64973 7.78058C4.45268 7.97404 4.44978 8.29061 4.64325 8.48765L6.22658 10.1003C6.33054 10.2062 6.47617 10.2604 6.62407 10.2483C6.77197 10.2363 6.90686 10.1591 6.99226 10.0377L10.1589 5.53774Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    ></path>
  </svg>
)

export function HomePage() {
  return (
    <>
      <div className="flex w-full flex-col gap-8 pt-16 text-white">
        <div className="mx-auto w-full max-w-5xl">
          <div className="flex flex-col">
            <h1 className="bg-gradient-to-r from-amber-200 to-cyan-400 bg-clip-text p-1 text-center text-5xl font-black text-transparent">
              {title}
            </h1>
            <p className="p-4 text-center text-lg">
              {description.replace(
                'Beautiful',
                `${NUMBER_OF_IMAGES} Beautiful`,
              )}
            </p>
          </div>
          <div className="mt-2 flex place-content-center">
            <a
              className="umami--click--product-hunt"
              href="https://www.producthunt.com/posts/rayst-gradients?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-rayst&#0045;gradients"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=365825&theme=dark"
                alt="Rayst&#0032;Gradients - A&#0032;Collection&#0032;of&#0032;Beautiful&#0032;Gradients&#0032;Generated&#0032;By&#0032;AI&#0046; | Product Hunt"
                style={{ width: '250px', height: '54px' }}
                width="250"
                height="54"
              />
            </a>
          </div>
          <div className="grid w-full grid-cols-2 gap-8 p-8 md:grid-cols-3 lg:grid-cols-4">
            <AnimatePresence>
              {shuffle([...Array(NUMBER_OF_IMAGES)].map((_, i) => i + 1)).map(
                (i) => (
                  <motion.a
                    key={i}
                    className={`group grid place-content-center umami--click--${i}-download`}
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    href={`/gradients/${i}.gradients.ray.st.jpeg`}
                    download
                  >
                    <div className="absolute inset-0 z-10 m-auto h-16 w-16 rounded-lg bg-black/50 opacity-0 backdrop-blur transition duration-100 group-hover:opacity-100">
                      <svg
                        width="50%"
                        height="50%"
                        viewBox="0 0 15 15"
                        fill="none"
                        className="absolute inset-0 m-auto"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.50005 1.04999C7.74858 1.04999 7.95005 1.25146 7.95005 1.49999V8.41359L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.994 6.35753 10.994 6.64245 10.8182 6.81819L7.81825 9.81819C7.64251 9.99392 7.35759 9.99392 7.18185 9.81819L4.18185 6.81819C4.00611 6.64245 4.00611 6.35753 4.18185 6.18179C4.35759 6.00605 4.64251 6.00605 4.81825 6.18179L7.05005 8.41359V1.49999C7.05005 1.25146 7.25152 1.04999 7.50005 1.04999ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z"
                          fill="white"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <Image
                      priority
                      className="rounded-lg border-white group-hover:border-4"
                      src={`/gradients/${i}.gradients.ray.st.jpeg`}
                      width={1000}
                      height={1000}
                      alt="gradients"
                    />
                  </motion.a>
                ),
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="self-center">
          <p className="p-4 text-left text-xs leading-6">
            <CheckIcon /> All gradients can be downloaded and used for free{' '}
            <br></br>
            <CheckIcon /> Commercial and non-commercial purposes <br></br>
            <CheckIcon /> No permission needed (though attribution is
            appreciated.)
          </p>
          <div className="mt-4 flex place-content-center">
            <iframe
              className="umami--click--github-star"
              src="https://ghbtns.com/github-btn.html?user=rayst-inc&repo=gradients&type=star&count=false"
              scrolling="0"
              width="54"
              height="20"
              title="GitHub"
            ></iframe>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
