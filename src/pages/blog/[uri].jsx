import TemplateSwitcher from '@/components/TemplateSwitcher'
import {
  getAllPostPaths,
  getMenuData,
  getPostTemplateData,
} from '@/services/api'
// import { calendarAPI } from '@/services/axios'
import { createContext } from 'react'

export const BlogContext = createContext({})

export default function BlogPage({ pageData }) {
  if (!pageData) return

  return (
    <BlogContext.Provider value={pageData}>
      <TemplateSwitcher />
    </BlogContext.Provider>
  )
}

export const getStaticProps = async ({ params }) => {
  const primaryNavData = await getMenuData('primary-navigation')
  const footerNavData = await getMenuData('footer-navigation')
  const templateData = await getPostTemplateData(params.uri)

  const pageData = { ...templateData, primaryNavData, footerNavData }

  return {
    props: { pageData },
  }
}

export const getStaticPaths = async () => {
  const data = await getAllPostPaths()
  // const events = await calendarAPI.fetchEvents()

  const paths =
    data.posts.nodes.map(({ uri }) => ({
      params: { uri },
    })) || []

  return {
    paths,
    fallback: true,
  }
}
