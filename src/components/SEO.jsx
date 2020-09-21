import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ description, lang, meta, keywords, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          buildTime(formatString: "YYYY-MM-DD")
          siteMetadata {
            title
            description
            emailAddress
            logoUrl
            profilePictureUrl
            facebook {
              profileId
              pageId
            }
            twitter {
              handle
            }
          }
        }
      }
    `
  );

  const metaTitle = title || site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;

  const jsonld = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    "@id": "https://gregbrimble.com/#GregBrimbleWebsite",
    about: {
      "@type": "Person",
      "@id": "https://gregbrimble.com/#GregBrimble",
      affiliation: {
        "@type": "Organization",
        "@id": "https://gregbrimble.com/#TheUniversityOfEdinburgh",
        name: "The University of Edinburgh",
        sameAs: [
          "https://en.wikipedia.org/wiki/University_of_Edinburgh",
          "https://www.wikidata.org/wiki/Q160302",
          "https://www.ed.ac.uk/",
        ],
        url: "https://www.ed.ac.uk/",
      },
      alumniOf: {
        "@type": "Organization",
        "@id": "https://gregbrimble.com/#CultsAcademy",
        name: "Cults Academy",
        sameAs: [
          "https://en.wikipedia.org/wiki/Cults_Academy",
          "https://www.wikidata.org/wiki/Q5193175",
          "https://cults-academy.aberdeen.sch.uk/",
        ],
        url: "https://cults-academy.aberdeen.sch.uk/",
      },
      award: [
        "The IET Great Exhibition Diamond Jubilee Scholarship",
        "The James Clayton Undergraduate Scholarship",
      ],
      brand: {
        "@type": "Brand",
        "@id": "https://gregbrimble.com/#GregBrimbleBrand",
        logo: site.siteMetadata.logoUrl,
        description: "gregbrimble.com",
        image: site.siteMetadata.logoUrl,
        name: "gregbrimble.com",
        url: "https://gregbrimble.com/",
      },
      email: site.siteMetadata.emailAddress,
      familyName: "Brimble",
      gender: "http://schema.org/Male",
      givenName: "Greg",
      height: "1.74 meters",
      homeLocation: {
        "@type": "Place",
        "@id": "https://gregbrimble.com/#Edinburgh",
        name: "Edinburgh",
        sameAs: [
          "https://en.wikipedia.org/wiki/Edinburgh",
          "https://www.wikidata.org/wiki/Q23436",
          "https://wikitravel.org/en/Edinburgh",
        ],
        url: "https://wikitravel.org/en/Edinburgh",
      },
      honorificPrefix: "Mr.",
      jobTitle: "Technological Engineer",
      nationality: {
        "@type": "Country",
        "@id": "https://gregbrimble.com/#UK",
        name: "United Kingdom",
        sameAs: [
          "https://en.wikipedia.org/wiki/United_Kingdom",
          "https://www.wikidata.org/wiki/Q145",
          "https://wikitravel.org/en/United_Kingdom",
        ],
        url: "https://wikitravel.org/en/United_Kingdom",
      },
      workLocation: {
        "@type": "Place",
        "@id": "https://gregbrimble.com/#Edinburgh",
      },
      // worksFor: {
      //   "@type": "Organization",
      //   "@id": "https://gregbrimble.com/#Administrate",
      //   name: "Administrate",
      //   sameAs: "https://www.getadministrate.com/",
      //   url: "https://www.getadministrate.com/",
      // },
      description:
        "Technological Engineer & final year student at the University of Edinburgh",
      image: site.siteMetadata.profilePictureUrl,
      mainEntityOfPage: "http://gregbrimble.com/",
      name: "Greg Brimble",
      sameAs: [
        "https://www.wikidata.org/wiki/Q52444075",
        "https://twitter.com/gregbrimble",
        "https://uk.linkedin.com/in/gregbrimble",
        "https://github.com/GregBrimble",
        "https://instagram.com/gregbrimble",
        "https://facebook.com/gregbrimble",
        "https://medium.com/@gregbrimble",
      ],
      url: "https://gregbrimble.com/",
    },
    accountablePerson: {
      "@type": "Person",
      "@id": "https://gregbrimble.com/#GregBrimble",
    },
    alternativeHeadline:
      "Personal Website of Greg Brimble, Technological Engineer & final year student at the University of Edinburgh",
    author: {
      "@type": "Person",
      "@id": "https://gregbrimble.com/#GregBrimble",
    },
    copyrightHolder: {
      "@type": "Person",
      "@id": "https://gregbrimble.com/#GregBrimble",
    },
    copyrightYear: "2015",
    dateCreated: "2015-02-06",
    dateModified: site.buildTime,
    datePublished: "2015-02-06",
    headline: site.siteMetadata.title,
    inLanguage: "en",
    isAccessibleForFree: "http://schema.org/True",
    isFamilyFriendly: "http://schema.org/True",
    keywords: "greg brimble,technology,website,internet,technological engineer",
    license: "https://github.com/GregBrimble/gregbrimble.com/LICENSE",
    mainEntity: {
      "@type": "Person",
      "@id": "https://gregbrimble.com/#GregBrimble",
    },
    description: site.siteMetadata.description,
    name: "gregbrimble.com",
    sameAs: "https://www.facebook.com/gregbrimblewebsite",
    url: "https://gregbrimble.com/",
  };

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: site.siteMetadata.url,
        },
        {
          property: `og:site_name`,
          content: site.siteMetadata.name,
        },
        {
          property: `og:image`,
          content: site.siteMetadata.logoUrl,
        },
        {
          property: `fb:admins`,
          content: site.siteMetadata.facebook.profileId,
        },
        {
          property: `fb:pages`,
          content: site.siteMetadata.facebook.pageId,
        },
        {
          property: `fb:profile_id`,
          content: site.siteMetadata.facebook.profileId,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:site`,
          content: site.siteMetadata.twitter.handle,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.twitter.handle,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: site.siteMetadata.logoUrl,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`,`),
              }
            : []
        )
        .concat(meta)}
    >
      <script type="application/ld+json">{JSON.stringify(jsonld)}</script>
    </Helmet>
  );
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
};

export default SEO;
