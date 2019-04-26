import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link, useStaticQuery } from "gatsby"
import { H1, Body1, ExternalLink, HR } from "gregbrimble-components"

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
      <SEO title={`404 Not Found`}/>
      <H1 style={{ fontSize: `3.75rem`, lineHeight: `3.75rem` }}>404 Not Found</H1>
      <Body1>The page you're looking for doesn't exist.</Body1>
      <Link to="/">Go home</Link> or{` `}
      <ExternalLink
        href={`mailto:${site.siteMetadata.emailAddress}?subject=404%20on%20gregbrimble.com&body=404%20found%20at…`}>email
        Greg about it</ExternalLink>.
    </Layout>
  )
}

export default NotFoundPage
