import { ArticleLayout } from '@/components/ArticleLayout'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { usePageContext } from '@/hooks/usePageContext'
import parse from 'html-react-parser'
import Head from 'next/head'

export default function DefaultTemplate(props) {
  const pageData = usePageContext()

  const seo = pageData.seo
  const content = pageData.content

  return (
    <>
      <Head>{parse(seo?.fullHead)}</Head>
      <Header />
      <ArticleLayout meta={seo} {...props}>
        {parse(content.toString())}
      </ArticleLayout>
      <Footer />
    </>
  )
}
