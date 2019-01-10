// Imports

import * as React from 'react'
import Helmet from 'react-helmet'

import Sidebar, { SidebarProps } from '../components/Sidebar'
import 'prismjs/themes/prism-coy.css'

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

export default ({ children, data }: IndexLayoutProps) => {
  const sidebarProps: SidebarProps = {
    items: data.allMarkdownRemark.edges
      .map(({ node }, index) => ({
        module: node.frontmatter.module,
        path: node.fields.slug,
        title: node.frontmatter.title,
      }))
      .filter(item => item.path != '/'),
  }

  return (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'TrueCoders' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Sidebar {...sidebarProps} />
      <div
        style={{
          margin: '40px 40px 40px 384px',
          maxWidth: '1200px',
        }}
      >
        {' '}
        {children()}{' '}
      </div>
    </div>
  )
}

// GraphQL

export const query = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___module, frontmatter___order] }
    ) {
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
