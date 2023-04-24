import { apolloClient } from './apollo'
import {
  GET_All_PAGES,
  GET_All_POSTS,
  GET_MENU_DATA,
  GET_PAGE_DATA,
  GET_POST_DATA,
  GET_SOME_POSTS,
} from './pageQueries'

export async function getMenuData(slug) {
  const { data } = await apolloClient.query({
    query: GET_MENU_DATA,
    variables: { slug },
  })
  return data?.menus?.nodes[0]
}

export async function getAllPaths() {
  const { data } = await apolloClient.query({
    query: GET_All_PAGES,
  })
  return data
}

export async function getAllPostPaths() {
  const { data } = await apolloClient.query({
    query: GET_All_POSTS,
  })
  return data
}

export async function getPageTemplateData(uri) {
  const { data } = await apolloClient.query({
    query: GET_PAGE_DATA,
    variables: { uri },
  })
  return data?.nodeByUri
}

export async function getPostTemplateData(uri) {
  const { data } = await apolloClient.query({
    query: GET_POST_DATA,
    variables: { uri },
  })
  return data?.nodeByUri
}

export async function getSomePostData() {
  const { data } = await apolloClient.query({
    query: GET_SOME_POSTS,
  })
  return data?.posts.nodes
}
