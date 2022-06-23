import * as React from 'react'
import { graphql } from 'gatsby'

export default function Page (props) {
  const { page } = props.data
  console.log('Page', props)

  return (
    <>
      <h1>{page.title}</h1>
      {page.blocks?.map(block => (
        <div key={block.id}>
          <h2>{block.title}</h2>
        </div>
      ))}
    </>
  )
}

export const query = graphql`
  fragment Block on ContentfulBlock {
    id
    title
    subhead
    text
    # image
  }

  query ContentfulPageQuery($slug: String!) {
    page: contentfulPage(slug: { eq: $slug }) {
      id
      slug
      title
      description
      # image
      blocks {
        ...Block
      }
    }
  }
`
