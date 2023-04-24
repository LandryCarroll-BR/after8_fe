import { getMenuData, getSomePostData } from '../../services/api'
import { Card } from '@/components/Card'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { SimpleLayout } from '@/components/SimpleLayout'
import { format } from 'date-fns'
import Head from 'next/head'
import Link from 'next/link'
import { createContext } from 'react'

function Blog({ blog }) {
  return (
    <blog className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`blog/${blog.slug}`}>{blog.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={blog.seo.opengraphPublishedTime}
          className="md:hidden"
          decorate
        >
          {format(new Date(blog.seo.opengraphPublishedTime), 'MMMM d, yyyy')}
        </Card.Eyebrow>
        <Card.Description>{blog.seo.metaDesc}</Card.Description>
        <Card.Cta>
          <Link href={`blog/${blog.slug}`}>Read Blog</Link>
        </Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={blog.seo.opengraphPublishedTime}
        className="mt-1 hidden md:block"
      >
        {format(new Date(blog.seo.opengraphPublishedTime), 'MMMM d, yyyy')}
      </Card.Eyebrow>
    </blog>
  )
}

export const BlogLandingContext = createContext({})

export default function BlogsIndex({ blogs, pageData }) {
  return (
    <>
      <Head>
        <title>Blog - After8</title>
      </Head>

      <BlogLandingContext.Provider value={pageData}>
        <Header />
        <SimpleLayout
          title="Our humble blog for helping others understand and create better music."
          intro="All of our insights and reflections on music performance, production, and more, organized in chronological order."
        >
          <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
            <div className="flex max-w-3xl flex-col space-y-16">
              {blogs.map((blog) => (
                <Blog key={blog.slug} blog={blog} />
              ))}
            </div>
          </div>
        </SimpleLayout>
        <Footer />
      </BlogLandingContext.Provider>
    </>
  )
}

export async function getStaticProps() {
  const primaryNavData = await getMenuData('primary-navigation')
  const footerNavData = await getMenuData('footer-navigation')

  const pageData = { primaryNavData, footerNavData }

  return {
    props: {
      blogs: await getSomePostData(),
      pageData,
    },
  }
}
