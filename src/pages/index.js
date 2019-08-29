import React from "react"

import { H1, H2, H3, H4, HR, Body1, ExternalLink } from "gregbrimble-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO />
    <div>
      <H1 style={{ fontSize: `3.75rem`, lineHeight: `3.75rem` }}>
        Greg Brimble
      </H1>
      <H2 style={{ fontSize: `3rem`, lineHeight: `3.125rem` }}>
        Technological Engineer
      </H2>
    </div>
    <HR />
    <div>
      <H4>About Me</H4>
      <Body1>
        I'm a Technological Engineer, and a penultimate year student at the
        University of Edinburgh. I'm currently studying
        {` `}
        <ExternalLink href="http://www.drps.ed.ac.uk/17-18/dpt/utaisen.htm">
          Artificial Intelligence and Software Engineering
        </ExternalLink>
        , and have previously studied Electrical and Mechanical Engineering. I
        have been a recipient of
        {` `}
        <ExternalLink href="https://conferences.theiet.org/achievement/scholarships/diamond/1851.cfm">
          The IET Great Exhibition Scholarship 2015
        </ExternalLink>
        , as well as the James Clayton Undergraduate Scholarship 2015 from the
        Institute of Mechanical Engineers.
      </Body1>
      <Body1>
        Most recently, I have worked a Research & Development Software Engineer
        at
        {` `}
        <ExternalLink href="https://www.getadministrate.com/about/our-team/">
          Administrate
        </ExternalLink>
        —a cloud-based, SaaS company based in Edinburgh, developing software for
        training providers.
      </Body1>
      <Body1>
        I have a massive passion for technology, programming, engineering, and
        artificial intelligence; and I have previously volunteered as a
        Technological Engineer at the{` `}
        <ExternalLink href="https://www.icanresearch.com/">
          International Children’s Advisory Network (iCAN Research)
        </ExternalLink>
        , a charity focused on advocating for research and innovation in
        pediatric clinical healthcare.
      </Body1>
      <Body1>
        Check out my social links below, or email me at
        {` `}
        <ExternalLink href="mailto:hello@gregbrimble.com">
          hello@gregbrimble.com
        </ExternalLink>
        .
      </Body1>
    </div>
  </Layout>
)

export default IndexPage
