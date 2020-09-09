import React from 'react'
import Post from '../components/post'
import PrimaryLayout from '../layouts/PrimaryLayout'
import { graphql } from 'gatsby'
// import Image from "../components/image"
// import SEO from "../components/seo"

export default (props) => {
  console.log(props.data)

  return (
    <>
      <PrimaryLayout grid="col-xs-6">
        {props.data.allMarkdownRemark.nodes.map(node => (
          <Post 
            title={node.frontmatter.title} 
            preview={node.excerpt} 
            img={node.frontmatter.image} />
        ))}
      </PrimaryLayout>
    </>
  )
}


export const query = graphql`{
  allMarkdownRemark {
    nodes {
      frontmatter {
        title
        date
        keywords
        image
      }
      excerpt
      html
    }
  }
}`
