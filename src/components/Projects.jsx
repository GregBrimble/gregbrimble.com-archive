import React from "react";
import PropTypes from "prop-types";

const Badge = ({ status }) => {
  switch (status) {
    case "Active":
      return (
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-green-100 text-green-800">
          Active
        </span>
      );
    case "Completed":
      return (
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-indigo-800">
          Completed
        </span>
      );
    case "Maintained":
      return (
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-indigo-800">
          Maintained
        </span>
      );
    case "Icebox":
      return (
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-gray-100 text-gray-800">
          On Ice
        </span>
      );
    case "Archived":
      return (
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-pink-100 text-pink-800">
          Archived
        </span>
      );
    default:
      return (
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-yellow-100 text-yellow-800">
          {status}
        </span>
      );
  }
};

const Projects = ({ projects }) => (
  <div className="mt-4 grid gap-16 pt-4 lg:grid-cols-3 lg:col-gap-5 lg:row-gap-12">
    {projects.map(({ name, href, status, description, date }) => (
      <div key={name}>
        <div>
          <Badge status={status} />
        </div>
        <a
          href={href}
          className="block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="mt-3 text-md leading-7 font-medium text-gray-900">
            {name}
          </h3>
          <p className="mt-2 text-sm leading-6 text-gray-500">{description}</p>
          {date && (
            <div className="mt-4 flex text-xs leading-5 text-gray-500">
              {date}
            </div>
          )}
        </a>
      </div>
    ))}
  </div>
);

Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      date: PropTypes.node,
    })
  ),
};

Projects.defaultProps = {
  projects: [],
};

export default Projects;
