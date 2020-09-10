import React from 'react'
import Post from '../components/post'
import PrimaryLayout from '../layouts/PrimaryLayout'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
// import Image from "../components/image"
// import SEO from "../components/seo"

export default (props) => {
  console.log(props.data)

  return (
    <>
      <PrimaryLayout grid="col-xs-6">
   
        {props.data.allWordpressPost.nodes.map(node => (
          <Post 
            title={node.title} 
            preview={node.excerpt} 
            img={node.featured_media.source_url}
            readMore={node.slug} />
        ))}
      </PrimaryLayout>
    </>
  )
}


export const query = graphql`
  {
    allWordpressPost {
       nodes {
         slug
         title
         excerpt
         featured_media {
           source_url
         }
       }
     }
   }`
