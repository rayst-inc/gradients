import Link from 'next/link'
import { LogoWide } from './Logo'

export const Footer = () => (
  <div className="mt-24 mb-12 grid w-full grid-cols-2 gap-8 border-t border-white/10 px-16 pt-12 md:grid-cols-4">
    <div className="flex flex-col md:col-span-3">
      <Link
        href="https://ray.st"
        className={
          'transition-default mr-8 flex flex-row opacity-100 duration-200 ease-in-out hover:opacity-50'
        }
        target="_blank"
      >
        <LogoWide />
      </Link>
    </div>
    <div className="flex flex-col">
      <span className="grid h-4 w-full grid-flow-col place-content-end gap-2">
        <Link href="mailto:team@ray.st">
          <svg
            className="umami--click-email icon icon-tabler icon-tabler-mail  h-4 w-4 cursor-pointer opacity-50 transition-all hover:opacity-100"
            role="button"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <rect x={3} y={5} width={18} height={14} rx={2}></rect>
            <polyline points="3 7 12 13 21 7"></polyline>
          </svg>
        </Link>
        <Link href="https://twitter.com/rayst_inc" target="_blank">
          <svg
            className="umami--click-twitter icon icon-tabler icon-tabler-brand-twitter h-4 w-4 cursor-pointer opacity-50 transition-all hover:opacity-100"
            role="button"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
          </svg>
        </Link>
        <Link href="https://github.com/rayst-inc" target="_blank">
          <svg
            className="umami--click-github icon icon-tabler icon-tabler-brand-github h-4 w-4 cursor-pointer opacity-50 transition-all hover:opacity-100"
            role="button"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
          </svg>
        </Link>
        <Link href="https://discord.com/invite/GmdkBp9VPX" target="_blank">
          <svg
            className="umami--click-discord icon icon-tabler icon-tabler-brand-discord h-4 w-4 cursor-pointer opacity-50 transition-all hover:opacity-100"
            role="button"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx={9} cy={12} r={1}></circle>
            <circle cx={15} cy={12} r={1}></circle>
            <path d="M7.5 7.5c3.5 -1 5.5 -1 9 0"></path>
            <path d="M7 16.5c3.5 1 6.5 1 10 0"></path>
            <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-1 2.5"></path>
            <path d="M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l1 2.5"></path>
          </svg>
        </Link>
      </span>
    </div>
  </div>
)

export default Footer
