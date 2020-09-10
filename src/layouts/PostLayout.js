import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'
import SEO from '../components/seo'
import innertext from 'innertext'

const PostLayout = ({data}) => {
  const post = data.wordpressPost
  return (
  <>
  <SEO 
    title={post.title} 
    description={innertext(post.excerpt)} 
    image={post.featured_media.source_url} 
    keywords={post.categories.map(result => result.name).join(', ')} 
    />
  <Header />
  <main>
    <div className="container">
      <div className="row justify-content-md-center">
        <h1 dangerouslySetInnerHTML={{__html: post.title}} />
        <div dangerouslySetInnerHTML={{__html: post.content}}/>
      </div>
    </div>
  </main>
  <Footer />
</>
)}


export default PostLayout

export const query = graphql`
  query($slug: String!) {
    wordpressPost(slug: {eq:$slug}){
      title
      content
      featured_media {
        source_url
      }
      categories 
      excerpt
    }
  }
`