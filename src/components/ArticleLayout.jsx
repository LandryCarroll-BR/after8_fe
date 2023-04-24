import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'
import { format } from 'date-fns'
import { useRouter } from 'next/router'

function ArrowLeftIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ArticleLayout({ children, meta }) {
  let router = useRouter()

  return (
    <Container className="my-16 lg:my-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <button
            type="button"
            onClick={() => router.back()}
            aria-label="Go back to articles"
            className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700/50 bg-zinc-800 shadow-md shadow-zinc-800/5 ring-0 ring-white/10 transition hover:border-zinc-700 hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"
          >
            <ArrowLeftIcon className="h-4 w-4 stroke-zinc-100 transition group-hover:stroke-zinc-300" />
          </button>
          <article>
            <header className="flex flex-col">
              <h1 className="mt-6 font-display text-5xl tracking-tightest text-zinc-100  sm:text-5xl">
                {meta.title.split(' - After8music')}
              </h1>
              <time
                dateTime={meta.opengraphPublishedTime}
                className="order-first flex items-center text-base text-zinc-400 "
              >
                <span className="h-4 w-0.5 rounded-full bg-zinc-200" />
                <span className="ml-3 font-sans">
                  {format(new Date(meta.opengraphPublishedTime), 'MMM d, yyyy')}
                </span>
              </time>
            </header>
            <Prose className="mt-8 font-sans text-zinc-300">{children}</Prose>
          </article>
        </div>
      </div>
    </Container>
  )
}
