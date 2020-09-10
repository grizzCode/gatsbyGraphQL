
import React from "react"
import { Helmet } from "react-helmet"
import { graphql, StaticQuery } from "gatsby"

const SEO = ({title, description, keywords, image, author}) => {
  return (
    <StaticQuery
      query={query}
      render={({
        site: {
          siteMetadata: {
            defaultTitle,
            defaultDescription,
            defaultImage,
            defaultKeywords,
            url,
            author
          }
        }
      }) => {
        const seo = {
          title: title || defaultTitle,
          description: description || defaultDescription,
          image: image || `${url}${defaultImage}`,
          keywords: keywords || defaultKeywords,
          author: author
        }

        return (
          <Helmet>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="keywords" content={seo.keywords} />
            <meta name="image" content={seo.image}/>
            <meta name="author" content={seo.author}/>
            <meta name="robots" content="index, follow"/>
          </Helmet>
        )
      }}
    />
  )
}

const query = graphql`{
  site {
    siteMetadata {
      defaultTitle: title
      defaultDescription: description
      defaultImage: image
      defaultKeywords: keywords
      url
      author
    }
  }
}
`

export default SEO

