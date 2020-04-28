import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ title }) => (
  <header>
    <nav className="bg-gregbrimble-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="items-center">
            <div className="my-4 w-auto text-white text-2xl">
              <Link to="/">{title}</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
);

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: ``,
};

export default Header;
