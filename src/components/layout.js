/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

import { Fonts, Theme9, Body1, Body2, HR, H4, ExternalLink } from "gregbrimble-components"

// import Header from "./header"
// import "./layout.css"

const Layout = ({ children }) => {
  const { site } = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  )

  return (
    <>
      {/*<Header siteTitle={site.siteMetadata.title}/>*/}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem`,
          paddingTop: 0,
        }}
      >
        <main
          style={{
            // marginBottom: `1.45rem`
          }}>{children}</main>
        {/*<HR />*/}
        <footer style={{
          paddingBottom: `2rem`
        }}>
          <H4>Social Links</H4>
          <Body1><ExternalLink href={`https://uk.linkedin.com/in/gregbrimble`}>LinkedIn</ExternalLink></Body1>
          <Body1><ExternalLink href={`https://github.com/GregBrimble`}>GitHub</ExternalLink></Body1>
          <Body1><ExternalLink href={`https://www.npmjs.com/~gregbrimble`}>npm</ExternalLink></Body1>
          <Body1><ExternalLink href={`https://medium.com/@gregbrimble`}>Medium</ExternalLink></Body1>
          <Body1><ExternalLink href={`https://dev.to/gregbrimble`}>DEV</ExternalLink></Body1>
          <Body1><ExternalLink href={`https://twitter.com/gregbrimble`}>Twitter</ExternalLink></Body1>
          <Body1><ExternalLink href={`https://instagram.com/gregbrimble`}>Instagram</ExternalLink></Body1>
          <Body1><ExternalLink href={`https://facebook.com/gregbrimble`}>Facebook</ExternalLink></Body1>
        </footer>
      </div>
      <Fonts/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
