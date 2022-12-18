import Image from 'next/image'

export const Logo = () => (
  <Image
    src="/logo/rayst-circle.png"
    width="24"
    height="24"
    alt="ray icon"
    className="mr-4"
    priority
  />
)

export const LogoLarge = () => (
  <Image
    src="/logo/rayst-ios.png"
    width="128"
    height="128"
    alt="ray icon"
    className="mr-2"
    priority
  />
)

export const LogoWide = () => (
  <div className="grid-row flex items-center justify-center">
    <Logo />
    <span className="font-display text-xl font-bold">Rayst</span>
  </div>
)
