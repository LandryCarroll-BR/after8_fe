import { gql } from '@apollo/client'

// Menus
export const GET_MENU_DATA = gql`
  query GetMenuData($slug: String!) {
    menus(where: { slug: $slug }) {
      nodes {
        menuItems(after: "0") {
          nodes {
            label
            url
            path
          }
        }
      }
    }
  }
`

// Seo fragment
export const SEO_FIELDS = gql`
  fragment SeoFields on Page {
    seo {
      fullHead
      title
      opengraphPublishedTime
    }
  }
`

// Template fragments
export const HOME_TEMPLATE_FIELDS = gql`
  fragment HomeTemplateFields on Template_Home {
    home {
      hero {
        headingLine1
        headingLine2
        bgImageDesktop {
          sourceUrl
        }
        bgImageMobile {
          sourceUrl
        }
        blurb
        cta {
          title
          url
        }
      }
      content1 {
        blurb
        heading
        image1 {
          sourceUrl
        }
        image2 {
          sourceUrl
        }
        image3 {
          sourceUrl
        }
        cta {
          title
          url
        }
      }
      awards {
        body
        fieldGroupName
        heading
        theknot
        weddingWire
      }
      cta {
        heading
        bgImage {
          sourceUrl
        }
        button {
          title
          url
        }
      }
    }
  }
`

export const ABOUT_TEMPLATE_FIELDS = gql`
  fragment AboutTemplateFields on Template_About {
    about {
      hero {
        headingLine1
        headingLine2
        body
        image1 {
          sourceUrl
        }
        image2 {
          sourceUrl
        }
        image3 {
          sourceUrl
        }
      }
      content1 {
        heading
        body
      }
      calloutBox {
        heading
        body
        link {
          title
          url
        }
      }
      cta {
        heading
        body
        imageDesktop {
          sourceUrl
        }
        button {
          title
          url
        }
      }
    }
  }
`

export const UPCOMING_EVENTS_TEMPLATE_FIELDS = gql`
  fragment UpcomingEventsTemplateFields on Template_UpcomingEvents {
    upcomingEvents {
      hero {
        bgImage {
          sourceUrl
        }
      }
    }
  }
`

export const DEFAULT_TEMPLATE_FIELDS = gql`
  fragment DefaultTemplateFields on DefaultTemplate {
    templateName
  }
`

//Page queries
export const GET_All_PAGES = gql`
  query getAllPages {
    pages(after: "0") {
      nodes {
        uri
      }
    }
  }
`

export const GET_PAGE_DATA = gql`
  ${SEO_FIELDS}
  ${ABOUT_TEMPLATE_FIELDS}
  ${HOME_TEMPLATE_FIELDS}
  ${UPCOMING_EVENTS_TEMPLATE_FIELDS}
  ${DEFAULT_TEMPLATE_FIELDS}

  query getPageData($uri: String!) {
    nodeByUri(uri: $uri) {
      ... on Page {
        ...SeoFields
        template {
          templateName
          ... on Template_About {
            ...AboutTemplateFields
          }
          ... on Template_Home {
            ...HomeTemplateFields
          }
          ... on Template_UpcomingEvents {
            ...UpcomingEventsTemplateFields
          }
          ... on DefaultTemplate {
            ...DefaultTemplateFields
          }
        }
        content
      }
    }
  }
`

//Post queries
export const GET_All_POSTS = gql`
  query getAllPosts {
    posts(after: "0") {
      nodes {
        uri
      }
    }
  }
`

export const GET_SOME_POSTS = gql`
  query getPageData {
    posts(first: 10) {
      nodes {
        title
        slug
        seo {
          fullHead
          title
          opengraphPublishedTime
          metaDesc
        }
        template {
          templateName
          ... on DefaultTemplate {
            templateName
          }
        }
        content
      }
    }
  }
`

export const GET_POST_DATA = gql`
  ${DEFAULT_TEMPLATE_FIELDS}

  query getPageData($uri: String!) {
    nodeByUri(uri: $uri) {
      ... on Post {
        seo {
          fullHead
          title
          opengraphPublishedTime
        }
        template {
          templateName
          ... on DefaultTemplate {
            ...DefaultTemplateFields
          }
        }
        content
      }
    }
  }
`
