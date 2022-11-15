import Image from 'next/image'

export const Logo = () => (
  <Image
    src="/rayst-logo.webp"
    width="24"
    height="24"
    alt="ray icon"
    className="mr-2 rounded-md border border-zinc-500"
    priority
  />
)

export const LogoWide = () => (
  <Image
    src="/rayst-logo-wide.webp"
    width="99"
    height="24"
    alt="ray icon"
    priority
  />
)

export default Logo
