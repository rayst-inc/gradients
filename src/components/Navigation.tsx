import Link from 'next/link'
import { LogoWide } from './Logo'

export const Navigation = () => (
  <div className="fixed inset-0 z-10 mx-auto flex h-16 w-full items-center border-b border-white/10 px-4 font-medium backdrop-blur-lg">
    <Link
      href="https://ray.st"
      className="transition-default mr-8 flex flex-row items-center opacity-100 duration-200 ease-in-out hover:opacity-50"
      target="_blank"
    >
      <LogoWide />
    </Link>
  </div>
)

export default Navigation
