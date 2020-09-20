const title = `Greg Brimble`;
const description = `Personal website of Greg Brimble, Technological Engineer & final year student at the University of Edinburgh`;
const url = `https://gregbrimble.com/`;
const name = `gregbrimble.com`;
const emailAddress = `hello@gregbrimble.com`;
const backgroundColor = `#3E4C59`;
const primaryColor = `#40C3F7`;
const facebook = {
  profileId: `100005449818562`,
  pageId: `1015371751844897`,
};
const twitter = {
  handle: `@gregbrimble`,
};

module.exports = {
  siteMetadata: {
    title,
    description,
    url,
    name,
    emailAddress,
    facebook,
    twitter,
    logoUrl: `${url}logo.png`,
    profilePictureUrl: `${url}img/Profile_Picture.jpg`,
    projects: [
      {
        name: "kv-orm",
        href: "https://github.com/kv-orm/core",
        status: "Active",
        description:
          "A Node.js ORM (object relational mapper) for key-value datastores.",
        date: "2019–2020",
      },
      {
        name: "kv-orm Cloudflare Workers",
        href: "https://github.com/kv-orm/cf-workers",
        status: "Maintained",
        description: "A datastore plugin for kv-orm for Cloudflare Workers KV.",
        date: "2019–2020",
      },
      {
        name: "kv-orm Cloudflare Workers Example",
        href: "https://github.com/GregBrimble/kv-orm-cf-workers-example",
        status: "Active",
        description:
          "An example showcasing kv-orm running on Cloudflare Workers.",
        date: "2019–2020",
      },
      {
        name: "The 2020 Web Almanac",
        href: "https://almanac.httparchive.org/en/2020/",
        status: "Active",
        description:
          "Analysis for the CMS chapter of the 2020 Web Alamanc by HTTP Archive.",
        date: "2020",
      },
      {
        name: "workers.sh",
        href: "https://workers.sh/",
        status: "Active",
        description: "A featureful dashboard for managing Cloudflare Workers.",
        date: "2020",
      },
      {
        name: "Cloudflare Workers Git Gateway",
        href:
          "https://github.com/glenstack/glenstack/tree/master/packages/cf-workers-git-gateway",
        status: "Active",
        description: "Perform git actions from within a Cloudflare Worker.",
        date: "2020",
      },
      {
        name: "Cloudflare Workers GraphQL",
        href:
          "https://github.com/glenstack/glenstack/tree/master/packages/cf-workers-graphql",
        status: "Maintained",
        description: "A lightweight GraphQL Server for Cloudflare Workers.",
        date: "2020",
      },
      {
        name: "Cloudflare Workers Access",
        href:
          "https://github.com/glenstack/glenstack/tree/master/packages/cf-workers-access",
        status: "Maintained",
        description:
          "Authenticate with Cloudflare Access from within a Cloudflare Worker.",
        date: "2020",
      },
      {
        name: "Cloudflare Workers hCaptcha",
        href:
          "https://github.com/glenstack/glenstack/tree/master/packages/cf-workers-hcaptcha",
        status: "Maintained",
        description: "Verify a hCaptcha token from within a Cloudflare Worker.",
        date: "2020",
      },
      {
        name: "Cloudflare Workers Router",
        href:
          "https://github.com/glenstack/glenstack/tree/master/packages/cf-workers-router",
        status: "Maintained",
        description: "A router for Cloudflare Workers.",
        date: "2020",
      },
      {
        name: "Cloudflare Workers Fetch Helpers",
        href:
          "https://github.com/glenstack/glenstack/tree/master/packages/cf-workers-fetch-helpers",
        status: "Maintained",
        description:
          "A collection of chainable helpers to adapt the Fetch API.",
        date: "2020",
      },
      {
        name: "Cloudflare Workers CustomEvent",
        href:
          "https://github.com/glenstack/glenstack/tree/master/packages/cf-workers-customevent",
        status: "Maintained",
        description:
          "A polyfill CustomEvent implementation for Cloudflare Workers.",
        date: "2020",
      },
      {
        name: 'Cloudflare TV: Say "Hello" to the Class of 2020',
        href: "https://cloudflare.tv/event/2KbnUNcBZUacOLjFynOyzo",
        status: "Completed",
        description:
          "A television segment about internships in the summer of 2020.",
        date: "2020",
      },
      {
        name: "wait-until-all",
        href: "https://github.com/GregBrimble/wait-until-all",
        status: "Maintained",
        description:
          "A Promise registration and execution utility, useful within a FetchEvent context.",
        date: "2020",
      },
      {
        name: "TailwindUI Crawler Action",
        href: "https://github.com/GregBrimble/tailwindui-crawler-action",
        status: "Maintained",
        description:
          "A GitHub Action to automate the crawling and cataloging of the Tailwind UI components into a private GitHub repository.",
        date: "2020",
      },
      {
        name: "Cloudflare Workers Typescript Template",
        href: "https://github.com/GregBrimble/cf-workers-typescript-template",
        status: "Maintained",
        description:
          "A template Cloudflare Workers Typescript server & client.",
        date: "2020",
      },
      {
        name: "Typescript Template",
        href: "https://github.com/GregBrimble/typescript-template",
        status: "Maintained",
        description:
          "A template Typescript project with Prettier and Jest built-in.",
        date: "2019–2020",
      },
      {
        name: "Dark Static Assets Action",
        href: "https://github.com/GregBrimble/dark-static-assets-action",
        status: "Maintained",
        description:
          "A GitHub Action to upload static assets to a Dark (darklang) canvas.",
        date: "2019",
      },
      {
        name: "gregbrimble.com",
        href: "https://github.com/GregBrimble/gregbrimble.com",
        status: "Maintained",
        description: `${description}.`,
        date: "2014–2020",
      },
      {
        name: "Typed Tables",
        href: "https://www.youtube.com/watch?v=I31QyCll80w",
        status: "Icebox",
        description:
          "A follow-up to 'Leveraging the Power of a Typed Schema: Dynamic User Interfaces with GraphQL'.",
        date: "",
      },
      {
        name:
          "Leveraging the Power of a Typed Schema: Dynamic User Interfaces with GraphQL",
        href: "https://www.youtube.com/watch?v=I31QyCll80w",
        status: "Completed",
        description: "A talk presented at Byteconf GraphQL 2020.",
        date: "2020",
      },
      {
        name: "Unary",
        href: "https://unary.gregbrimble.com/",
        status: "Icebox",
        description:
          "A weekly software engineering and technology newsletter featuring a single item from each category (hence Unary).",
        date: "2019",
      },
      {
        name: "helpe.rs",
        href: "https://helpe.rs/",
        status: "Icebox",
        description:
          "Personal productivity tools inspired by software development processes.",
        date: "2018",
      },
      {
        name: "Wrangler Cloudflared Template",
        href: "https://github.com/GregBrimble/wrangler-cloudflared-template",
        status: "Archived",
        description:
          "A template repo demonstrating Wrangler's new local development server, working with a cloudflared tunnel. Superceded by 'Cloudflare Workers Typescript Template'.",
        date: "2020",
      },
      {
        name: "contributeto.tech",
        href: "https://github.com/GregBrimble/contributeto.tech",
        status: "Archived",
        description:
          "A hackathon submission to HackUPC: recommends repositories and their open issues to first-time contributors to open-source.",
        date: "2018",
      },
      {
        name: "DreamHost Runner",
        href: "https://github.com/GregBrimble/dreamhost-runner",
        status: "Archived",
        description:
          "A wrapper for running a Python application on DreamHost's shared server.",
        date: "2017",
      },
      {
        name: "Boilerplate Web Service",
        href: "https://github.com/GregBrimble/boilerplate-web-service",
        status: "Archived",
        description: "A template Python web application.",
        date: "2017",
      },
      {
        name: "WSGI Micro Web Framework",
        href: "https://github.com/GregBrimble/wsgi-micro-web-framework",
        status: "Archived",
        description:
          "A tiny WSGI-compatible micro web framework written in Python.",
        date: "2016",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: title,
        start_url: `/`,
        background_color: backgroundColor,
        theme_color: primaryColor,
        display: `standalone`,
        icon: `static/logo.png`,
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-layout",
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [{ family: `Lora` }, { family: `Open Sans` }],
      },
    },
  ],
};
