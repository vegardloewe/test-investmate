import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

export const Seo = ({ title, description, pathname, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
        }
      }
    }
  `)

  const seo = {
    title: data.site.siteMetadata.title,
    description: data.site.siteMetadata.description,
    image: `${data.site.siteMetadata.siteUrl}${data.site.siteMetadata.image}`,
    url: `${data.site.siteMetadata.siteUrl}${pathname || ``}`
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={seo.title} />
      <meta property="og:image:secure_url" content={seo.image} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:alt" content={seo.title} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:image" content={seo.image} />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
      />
      {children}
    </>
  )
}
