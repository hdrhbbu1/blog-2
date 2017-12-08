import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

function TagsPage(props) {
  const allTags = props.data.allMarkdownRemark.group
  return (
    <div>
      <Helmet title={'Tags'} />
      <div>
        <h1>Tags</h1>
        <ul>
          {allTags.map(tag => (
            <li key={tag.fieldValue}>
              <Link
                style={{
                  textDecoration: 'none',
                }}
                to={`/tags/${tag.fieldValue}/`}
              >
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TagsPage

export const pageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
