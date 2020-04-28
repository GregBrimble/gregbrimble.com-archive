import React from "react";
import { Link } from "gatsby";

import SEO from "../components/SEO";

const NotFoundPage = () => {
  return (
    <>
      <SEO title={`404 Not Found`} />

      <div className="prose">
        <h1 className="font-serif">404 Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <p>
          <Link to="/">Go home</Link> or{` `}
          <a
            href={`mailto:hello@gregbrimble.com?subject=404%20on%20gregbrimble.com&body=404%20found%20at…`}
            target="_blank"
            rel="noopener noreferrer"
          >
            email Greg about it
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default NotFoundPage;
