// Imports

import * as React from 'react'
import Helmet from 'react-helmet'

import Sidebar from '../components/Sidebar'
import 'prismjs/themes/prism-okaidia.css'

// Interfaces

interface IndexLayoutProps {
  children(): any
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
    allMarkdownRemark: {
      edges: {
        node: {
          fields: {
            slug: string
          }
          frontmatter: {
            title: string
            module: string
            order: number
          }
        }
      }[]
    }
  }
}

// React Components

const IndexLayout = ({ children, data }: IndexLayoutProps) => {
  const sidebarItems = data.allMarkdownRemark.edges
    .map(({ node }, index) => ({
      path: node.fields.slug,
      title: node.frontmatter.title,
    }))
    .filter(item => item.path != '/')

  return (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'TrueCoders' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Sidebar items={sidebarItems} />
      <div
        style={{
          marginLeft: '384px',
          marginTop: '40px',
          marginRight: '40px',
          maxWidth: '1200px',
        }}
      >
        {' '}
        {children()}{' '}
      </div>
    </div>
  )
}

export default IndexLayout

// GraphQL

export const query = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            module
            order
          }
        }
      }
    }
  }
`
