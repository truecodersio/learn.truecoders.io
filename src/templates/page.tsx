import * as React from 'react'

interface PageTemplateData {
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        title: string
      }
    }
  }
}

export default ({ data }: PageTemplateData) => {
  const page = data.markdownRemark
  return (
    <div>
      <h1>{page.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.html }} />
    </div>
  )
}

export const query = graphql`
  query PageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
