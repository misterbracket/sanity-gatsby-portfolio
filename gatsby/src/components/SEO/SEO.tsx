import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

type SEOProps = {
  children?: React.ReactNode;
  location?: { href: string };
  description?: string;
  title?: string;
  image?: string;
  publishDate?: string;
};

const SEO = ({
  children,
  location,
  description,
  title,
  image,
  publishDate,
}: SEOProps) => {
  const { site } = useStaticQuery(graphql`
    query getSiteData {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
      {/** specify in which language your website is in */}
      <html lang="en" />
      <title>{title}</title>
      {/** Canonical Link*/}
      {location?.href && <link rel="canonical" href={location?.href} />}

      <meta name="author" content="Max Klammer" />
      {publishDate && (
        <meta property="article:published_time" content={publishDate} />
      )}
      {/* Fav Icon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alternate icon" href="/favicon.ico" />
      {/* Meta Tags */}
      <meta name="viewport" content="width=device-width" />
      <meta charSet="utf8" />
      <meta
        name="description"
        content={description ?? site.siteMetadata.description}
      />
      {/* Open Graph */}
      <meta property="og:url" content={location?.href} />
      <meta property="og:href" content={location?.href} />
      <meta property="og:image" content={image || "/favicon.svg"} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        property="og:site_name"
        content={site.siteMetadata.title}
        key="ogsitename"
      />
      <meta
        property="og:description"
        content={description ?? site.siteMetadata.description}
        key="ogdesc"
      />
      {publishDate && (
        <meta
          property="og:publish_date"
          name="publish_date"
          content={publishDate}
        />
      )}
      {/* Pass additional Children */}
      {children}
    </Helmet>
  );
};

export default SEO;
