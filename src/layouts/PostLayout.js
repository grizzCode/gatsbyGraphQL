import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'

const PostLayout = ({data}) => {
  const post = data.wordpressPost
  return (
  <>
  <Header />
  <div className="container">
    <div className="row justify-content-md-center">
      <h1 dangerouslySetInnerHTML={{__html: post.title}} />
      <div dangerouslySetInnerHTML={{__html: post.content}}/>
    </div>
  </div>
  <Footer />
</>
)}


export default PostLayout

export const query = graphql`
  query($slug: String!) {
    wordpressPost(slug: {eq:$slug}){
        title
        content
    }
  }
`