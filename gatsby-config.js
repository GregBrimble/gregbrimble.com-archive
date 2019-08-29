const ThemeDefault = require("gregbrimble-components").ThemeDefault

const title = `Greg Brimble`
const description = `Personal website of Greg Brimble, Technological Engineer & penultimate year student at the University of Edinburgh`
const url = `https://gregbrimble.com/`
const name = `gregbrimble.com`
const emailAddress = `hello@gregbrimble.com`
const backgroundColor = ThemeDefault.neutral["700"]
const primaryColor = ThemeDefault.primary["400"]
const facebook = {
  profileId: `100005449818562`,
  pageId: `1015371751844897`,
}
const twitter = {
  handle: `@gregbrimble`,
}

module.exports = {
  siteMetadata: {
    title: title,
    description: description,
    url: url,
    name: name,
    emailAddress: emailAddress,
    facebook: facebook,
    twitter: twitter,
    logoUrl: `${url}logo.png`,
    profilePictureUrl: `${url}img/Profile_Picture.jpg`
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
  ],
}
