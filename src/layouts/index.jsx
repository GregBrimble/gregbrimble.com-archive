import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";

import "./index.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LinkedIn from "../components/icons/LinkedIn";
import GitHub from "../components/icons/GitHub";
import DEV from "../components/icons/DEV";
import Twitter from "../components/icons/Twitter";
import Instagram from "../components/icons/Instagram";
import Facebook from "../components/icons/Facebook";
import Mail from "../components/icons/Mail";

const Layout = ({ children }) => {
  const { site } = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            name
          }
        }
      }
    `
  );

  return (
    <>
      <Header title={site.siteMetadata.name} />
      <div>
        <main className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8 md:py-12">
          {children}
        </main>
        <Footer
          copyright="© Greg Brimble. All rights reserved."
          links={[
            {
              href: "https://uk.linkedin.com/in/gregbrimble",
              icon: <LinkedIn />,
              label: "LinkedIn",
            },
            {
              href: "https://github.com/GregBrimble",
              icon: <GitHub />,
              label: "GitHub",
            },
            {
              href: "https://dev.to/gregbrimble",
              icon: <DEV />,
              label: "DEV",
            },
            {
              href: "https://twitter.com/gregbrimble",
              icon: <Twitter />,
              label: "Twitter",
            },
            {
              href: "https://instagram.com/gregbrimble",
              icon: <Instagram />,
              label: "Instagram",
            },
            {
              href: "https://facebook.com/gregbrimble",
              icon: <Facebook />,
              label: "Facebook",
            },
            {
              href: "mailto:hello@gregbrimble.com",
              icon: <Mail />,
              label: "Email",
            },
          ]}
        />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
