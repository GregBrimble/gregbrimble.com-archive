import React from "react";

import SEO from "../components/SEO";
import Fonts from "../components/Fonts";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

const HomebrewPage = () => {
  return (
    <>
      <Helmet meta={[{ name: "robots", content: "noindex" }]} />
      <SEO />
      <Fonts />

      <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-baseline">
        <h1 className="text-3xl leading-8 font-light font-serif text-gray-900 sm:text-3xl sm:leading-9">
          Greg Brimble
        </h1>
      </div>
      <div className="mt-6 border-t border-gray-200 grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 lg:gap-6">
        <div className="lg:col-span-4">
          <ul className="sticky top-8 space-y-5 text-sm leading-5 text-gray-900 font-medium">
            <li className="space-y-3">
              <a
                href="#application"
                className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
              >
                Homebrew PLC Application
              </a>
            </li>
            <li className="space-y-3">
              <a
                href="#links"
                className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
              >
                Links
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-8">
          <div className="bio">
            <h3 id="application">Homebrew PLC Application</h3>
            <p>
              Hello! 👋 For those of you that I haven't had the opportunity to
              get to know yet, I'm Greg Brimble. I'm applying for a position on
              the Homebrew PLC this year. I'm new to the project, and I hope
              that regardless of the outcome of this election, that I have the
              opportunity to contribute to Homebrew for the foreseeable future.
            </p>
            <p>
              I've personally used Homebrew for several years, and love how
              simple it makes using macOS for developers such as myself.
              Currently, I'm a final-year student at the University of Edinburgh
              in Scotland studying Artificial Intelligence and Software
              Engineering. I graduate in a couple of months, and then I will be
              returning to{" "}
              <a
                href="https://www.cloudflare.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cloudflare
              </a>
              , where I interned last summer. Previously, I have also worked for
              three years at a local SaaS start-up,{" "}
              <a
                href="https://www.getadministrate.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Administrate
              </a>
              .
            </p>
            <p>
              I believe I am well-suited to a primarily{" "}
              <a
                href="https://twitter.com/MikeMcQuaid/status/1336626627103567874"
                target="_blank"
                rel="noopener noreferrer"
              >
                non-technical
              </a>{" "}
              role on the PLC. Having worked in a number of different teams, in
              both academia and in industry, organization is one of the
              responsibilities that I most naturally fulfill. I happily work to
              organize the team: scheduling meetings, taking minutes, and
              dealing with any other administrative duties, in order to enable
              the team to function as best as they can. I previously volunteered
              for{" "}
              <a
                href="https://www.icanresearch.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                iCAN Research
              </a>
              , a US non-profit advocating for pediatric clinical research,
              managing their technologies in a similar role. Between iCAN,
              working part-time, and my full-time studies, I have required
              excellent time management skills, and I believe this would be
              directly applied as a Homebrew PLC member.
            </p>
            <p>
              As I mentioned previously, I'm new to the Homebrew organization,
              but to date, I have:
              <ul className="mt-2">
                <li>helped to organize this AGM,</li>
                <li>researched and proposed these election methods, and</li>
                <li>
                  helped to arrange an offer from Cloudflare to freely handle
                  Homebrew's traffic, given the recent sunset announcement from
                  Bintray (it's yet to be seen if this is the direction we go,
                  however).
                </li>
              </ul>
            </p>
            <p>
              Finally, I have always loved open-source software, and it is a
              space <Link to="/">I regularly contribute to</Link>. I hope that
              working at Homebrew will only offer more opportunities to do so.
            </p>

            <h3 id="links">Links</h3>
            <p>
              If you want to know anything more about me, I have a more general
              "About Me" available on <Link to="/">my homepage</Link> and/or I
              am more than happy to hear from you on Slack—just ping me a
              message!
            </p>
            <p>
              Thank you for your consideration. I hope you consider me a
              suitable candidate for the PLC.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomebrewPage;
