import { Container } from '@/components/Container'

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="my-32 mt-16">
      <header className="max-w-2xl">
        <h1 className="font-display text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 font-sans text-base text-zinc-400">{intro}</p>
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  )
}
