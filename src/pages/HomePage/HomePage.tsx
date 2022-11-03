import { AnimatePresence, motion } from 'framer-motion'
import { description, title } from 'lib/next-seo'
import Image from 'next/image'
import { shuffle } from 'utils/shuffle'
import { Footer } from '../../components/Footer'

export function HomePage() {
  return (
    <>
      <div className="flex w-full flex-col gap-8 pt-16 text-white">
        <div className="mx-auto w-full max-w-5xl">
          <div className="flex flex-col">
            <h1 className="bg-gradient-to-r from-amber-200 to-cyan-400 bg-clip-text p-1 text-center text-5xl font-black text-transparent">
              {title}
            </h1>
            <p className="p-4 text-center text-lg">{description}</p>
            <div className="mt-2 self-center">
              <a
                className="github-button"
                href="https://github.com/rayst-inc/gradients"
                data-color-scheme="no-preference: dark; light: dark; dark: dark;"
                data-icon="octicon-star"
                aria-label="Star rayst-inc/gradients on GitHub"
              >
                Star
              </a>
            </div>
          </div>
          <div className="grid w-full grid-cols-2 gap-8 p-8 md:grid-cols-3 lg:grid-cols-4">
            <AnimatePresence>
              {shuffle([...Array(44)].map((_, i) => i + 1)).map((i) => (
                <motion.a
                  key={i}
                  className={`group grid place-content-center umami—-click—-${i}—-download`}
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
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="self-center">
          <p className="p-4 text-left text-xs leading-5">
            ✅ All gradients can be downloaded and used for free <br></br>✅
            Commercial and non-commercial purposes <br></br>✅ No permission
            needed (though attribution is appreciated.)
          </p>
        </div>
        <Footer />
      </div>
    </>
  )
}
