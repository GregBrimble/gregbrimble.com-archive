import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

import {
  Fonts,
  Theme9,
  Body1,
  Body2,
  HR,
  H4,
  ExternalLink,
} from "gregbrimble-components"

import Header from "./header"
import "./layout.css"

const Layout = ({ includeFooter, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <>
      <Header title={"gregbrimble.com"} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem`,
          paddingTop: 0,
          paddingBottom: `2rem`
        }}
      >
        <main
          style={{
            marginBottom: `1.45rem`,
          }}
        >
          {children}
        </main>
        {includeFooter ? (
          <footer
            style={
              {
                // paddingBottom: `2rem`
              }
            }
          >
            <H4>Social Links</H4>
            <ul
              style={{
                lineHeight: `1.25rem`,
              }}
            >
              <li>
                <ExternalLink href={`https://uk.linkedin.com/in/gregbrimble`}>
                  LinkedIn
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href={`https://github.com/GregBrimble`}>
                  GitHub
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href={`https://medium.com/@gregbrimble`}>
                  Medium
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href={`https://dev.to/gregbrimble`}>
                  DEV
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href={`https://twitter.com/gregbrimble`}>
                  Twitter
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href={`https://instagram.com/gregbrimble`}>
                  Instagram
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href={`https://facebook.com/gregbrimble`}>
                  Facebook
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href={`mailto:hello@gregbrimble.com`}>
                  Email
                </ExternalLink>
              </li>
            </ul>
          </footer>
        ) : null}
      </div>
      <Fonts />
    </>
  )
}

Layout.defaultProps = {
  includeFooter: true,
}

Layout.propTypes = {
  includeFooter: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Layout
