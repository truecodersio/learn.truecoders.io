import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Sidebar from '../components/Sidebar'
import 'prismjs/themes/prism-okaidia.css'

const sidebarSize = '200px'

const IndexLayout = ({ children, data }) => {
  const sidebarItems = data.allMarkdownRemark.edges.map(({ node }, index) => (
    { path: node.fields.slug, title: node.frontmatter.title }
  )).filter(item => item.path != '/')

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
          marginLeft: '256px',
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

IndexLayout.propTypes = {
  children: PropTypes.func,
}

export default IndexLayout

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
          }
        }
      }
    }
  }
`
