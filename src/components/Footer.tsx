export function Footer() {
  return (
    <div className={`mb-16 flex w-full flex-row place-content-center`}>
      <a
        href="https://ray.st"
        target={'_blank'}
        rel="noreferrer"
        className="umami--click--footer-rayst mr-8 opacity-50 hover:underline hover:opacity-80"
      >
        ray.st
      </a>
      <span className="text-bold mr-2 bg-gradient-to-r from-amber-100 to-amber-400 bg-clip-text text-xs text-transparent">
        {'new '}
      </span>
      <a
        href="https://emojis.ray.st"
        target={'_blank'}
        rel="noreferrer"
        className="umami--click--footer-emoji-rayst opacity-50 hover:underline hover:opacity-80"
      >
        emojis
      </a>
    </div>
  )
}
