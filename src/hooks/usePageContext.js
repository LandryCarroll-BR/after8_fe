import { HomeContext } from '@/pages'
import { PageContext } from '@/pages/[uri]'
import { BlogContext } from '@/pages/blog/[uri]'
import { BlogLandingContext } from '@/pages/blog'
import { useContext } from 'react'

export function usePageContext() {
  const homeData = useContext(HomeContext)
  const pageData = useContext(PageContext)
  const blogData = useContext(BlogContext)
  const blogLandingData = useContext(BlogLandingContext)

  function exists(context) {
    if (context) {
      return Object.entries(context).length > 0
    }
  }

  if (exists(homeData)) {
    return homeData
  }

  if (exists(pageData)) {
    return pageData
  }

  if (exists(blogData)) {
    return blogData
  }

  if (exists(blogLandingData)) {
    return blogLandingData
  }
}
