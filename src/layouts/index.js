import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Sidebar from '../components/Sidebar'

const sidebarSize = '200px'

const IndexLayout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'TrueCoders' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Sidebar />
    <div
      style={{
        marginLeft: '256px',
        marginTop: '40px',
      }}
    >
      {' '}
      {children()}{' '}
    </div>
  </div>
)

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
  }
`
