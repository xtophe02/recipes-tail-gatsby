import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

export default function SEO(props) {
  const { site } = useStaticQuery(query)
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${props.title} | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: props.description || site.siteMetadata.description,
        },
      ]}
    ></Helmet>
  )
}

export const query = graphql`
  query SEOQuery {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`
