import React from "react";
import { Link } from "gatsby";

import SEO from "../components/seo";

const NotFoundPage = () => {
  return (
    <>
      <SEO title={`404 Not Found`} />
      <h1>404 Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Go home</Link> or{` `}
      <a
        href={`mailto:hello@gregbrimble.com?subject=404%20on%20gregbrimble.com&body=404%20found%20at…`}
        target="_blank"
        rel="noopener noreferrer"
      >
        email Greg about it
      </a>
      .
    </>
  );
};

export default NotFoundPage;