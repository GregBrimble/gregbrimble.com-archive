import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link, useStaticQuery } from "gatsby"

const NotFoundPage = (props) => {
  const { site } = useStaticQuery(
    graphql`
        query {
          site {
            buildTime(formatString: "YYYY-MM-DD")
            siteMetadata {
              title
              description
              emailAddress
              logoUrl
              facebook {
                profileId
                pageId
              }
              twitter {
                handle
              }
            }
          }
        }
      `,
  )

  return (
    <Layout>
      <SEO title="404"/>
      <h1>404 Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Go home</Link><br/>
      <a
        href={`mailto:${site.siteMetadata.emailAddress}?subject=404%20on%20gregbrimble.com&body=404%20found%20on%3A%20${props.location.pathname}`}
        target="_blank" rel="noopener noreferrer">Or email Greg about it</a>
    </Layout>
  )
}

export default NotFoundPage
