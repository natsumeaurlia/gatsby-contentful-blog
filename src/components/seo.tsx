/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql, PageProps } from "gatsby"
import { WindowLocation } from "@reach/router"

const SEO = ({
  description,
  lang,
  meta,
  title,
  blogImagePath,
  pageImagePath,
  ogImageWidth,
  ogImageHeight,
  location,
}: Props) => {
  const { site } = useStaticQuery<GatsbyTypes.SeoQueryQuery>(
    graphql`
      query SeoQuery {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
            siteUrl
          }
        }
      }
    `
  )

  const currentUrl = typeof window !== "undefined" ? window.location.href : ""
  const metaDescription = description || site?.siteMetadata?.description
  const imgurl = pageImagePath
    ? `${site?.siteMetadata?.siteUrl}${pageImagePath}`
    : blogImagePath || `${site?.siteMetadata?.siteUrl}/assets/images/icon.png`
  const imgw = ogImageWidth
  const imgh = ogImageHeight

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site?.siteMetadata?.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: currentUrl,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:site_title`,
          content: site?.siteMetadata?.title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `article`,
        },
        {
          property: `og:image`,
          content: imgurl,
        },
        {
          property: `og:image:width`,
          content: imgw,
        },
        {
          property: `og:image:height`,
          content: imgh,
        },
        {
          property: `twitter:image`,
          content: imgurl,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site?.siteMetadata?.social?.twitter,
        },
        {
          name: `twitter:site`,
          content: site?.siteMetadata?.social?.twitter,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <link rel="canonical" href={location.pathname} />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `ja`,
  meta: [],
  description: ``,
  ogImageWidth: 1280,
  ogImageHeight: 640,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  blogImagePath: PropTypes.string,
  pageImagePath: PropTypes.string,
  ogImageWidth: PropTypes.number,
  ogImageHeight: PropTypes.number,
  location: PropTypes.object,
}

type Props = {
  description: string
  lang: string
  meta: JSX.IntrinsicElements["meta"]
  title: string
  blogImagePath: string
  pageImagePath: string
  ogImageWidth: number
  ogImageHeight: number
  location: WindowLocation
}

export default SEO
