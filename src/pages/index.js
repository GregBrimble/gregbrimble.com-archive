import React from "react"

import { H1, H2, H3, H4, Body1 } from "gregbrimble-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO/>
    <div>
      <H1 style={{ fontSize: `3.75rem`, lineHeight: `3.75rem` }}>Greg Brimble</H1>
      <H2 style={{ fontSize: `3rem`, lineHeight: `3.125rem` }}>Technological Engineer</H2>
    </div>
    <hr />
    <div>
      <H4>About Me</H4>
      <Body1>
        I'm a Technological Engineer, and a Student at the University of Edinburgh.
        I'm currently studying
        {` `}
        <a href="http://www.drps.ed.ac.uk/17-18/dpt/utaisen.htm" target="_blank" rel="noopener noreferrer">
          Artificial Intelligence and Software Engineering
        </a>, and have previously studied Electrical and Mechanical Engineering.
        During that time, I have been a recipient of
        {` `}
        <a href="https://conferences.theiet.org/achievement/scholarships/diamond/1851.cfm" target="_blank"
           rel="noopener noreferrer">
          The IET Great Exhibition Scholarship 2015
        </a>, as well as the James Clayton
        Undergraduate Scholarship 2015 from the Institute of Mechanical Engineers.
      </Body1>
      <Body1>
        I work part-time as a Technical Engineer at
        {` `}
        <a href="https://www.getadministrate.com/about/our-team/" target="_blank" rel="noopener noreferrer">
          Administrate
        </a> — a cloud-based, SaaS company based in Edinburgh, developing software for training providers.
      </Body1>
      <Body1>
        I have a massive passion for engineering, technology, programming and artificial intelligence; and I have
        previously volunteered as a
        {` `}
        <a href="https://www.icanresearch.com/" target="_blank" rel="noopener noreferrer">
          Technological Engineer at the International Children’s Advisory Network (iCAN Research)
        </a>, a charity focused on advocating for research and innovation in paediatric clinical healthcare.
      </Body1>
      <Body1>
        Check out my social links below, or email me at
        {` `}
        <a href="mailto:hello@gregbrimble.com" target="_blank" rel="noopener noreferrer">
          hello@gregbrimble.com
        </a>.
      </Body1>
    </div>
  </Layout>
)

export default IndexPage
