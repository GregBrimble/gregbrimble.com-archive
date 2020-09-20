import React from "react";

import SEO from "../components/SEO";
import Projects from "../components/Projects";
import { useStaticQuery, graphql } from "gatsby";

const IndexPage = () => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          projects {
            name
            href
            status
            description
            date
          }
        }
      }
    }
  `);

  return (
    <>
      <SEO />

      <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-baseline">
        <h1 className="text-3xl leading-8 font-light font-serif text-gray-900 sm:text-3xl sm:leading-9">
          Greg Brimble
        </h1>

        <h2 className="text-xl leading-6 font-medium text-gray-600 mt-2 md:mt-0 md:ml-4">
          Technological Engineer
        </h2>
      </div>
      <div className="mt-6 border-t border-gray-200 grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 lg:gap-6">
        <div className="lg:col-span-4">
          <ul className="sticky top-8 space-y-5 text-sm leading-5 text-gray-900 font-medium">
            <li className="space-y-3">
              <a
                href="#about-me"
                className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
              >
                About Me
              </a>
            </li>
            <li className="space-y-3">
              <a
                href="#open-source"
                className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
              >
                Open Source
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-8">
          <div className="bio">
            <h3 id="about-me">About Me</h3>
            <p>
              I'm currently working as a Product Strategy Software Engineer at{" "}
              <a
                href="https://www.cloudflare.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cloudflare
              </a>
              , specifically as a member of the Speed team.
            </p>
            <p>
              I'm also a final year student at the University of Edinburgh,
              studying
              {` `}
              <a
                href="http://www.drps.ed.ac.uk/17-18/dpt/utaisen.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Artificial Intelligence and Software Engineering
              </a>
              , and previously, Electrical and Mechanical Engineering. I have
              been a recipient of
              {` `}
              <a
                href="https://conferences.theiet.org/achievement/scholarships/diamond/1851.cfm"
                target="_blank"
                rel="noopener noreferrer"
              >
                The IET Great Exhibition Scholarship
              </a>
              , as well as the James Clayton Undergraduate Scholarship from the
              Institute of Mechanical Engineers.
            </p>
            <p>
              Before Cloudflare, I worked as a Research {"&"} Development
              Software Engineer at
              {` `}
              <a
                href="https://www.getadministrate.com/about/our-team/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Administrate
              </a>
              —a cloud-based SaaS company, based in Edinburgh.
            </p>
            <p>
              I have a massive passion for technology, programming, engineering,
              and artificial intelligence; and I have previously volunteered as
              a Technological Engineer at the{` `}
              <a
                href="https://www.icanresearch.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                International Children’s Advisory Network (iCAN Research)
              </a>
              , a charity focused on advocating for research and innovation in
              pediatric clinical healthcare.
            </p>
            <p>
              Check out my social links in the footer, or email me at
              {` `}
              <a
                href="mailto:hello@gregbrimble.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                hello@gregbrimble.com
              </a>
              .
            </p>

            <h3 id="open-source">Open Source</h3>
            <p>
              This is a selection of my projects on{" "}
              <a
                href="https://github.com/GregBrimble"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>{" "}
              and elsewhere across the internet. I welcome any questions or
              comments over{" "}
              <a
                href="mailto:hello@gregbrimble.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                email
              </a>{" "}
              or as a GitHub issue.
            </p>
          </div>
          <Projects projects={site.siteMetadata.projects} />
        </div>
      </div>
    </>
  );
};

export default IndexPage;
