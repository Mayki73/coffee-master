import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

interface IProps {
  title: string;
  description: string;
  link: string;
  children: React.ReactNode;
}

const SEOWrapper: React.FC<IProps> = ({
  title,
  description,
  link,
  children,
}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          favicon
        }
      }
    }
  `);

  return (
    <>
      <Helmet>
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={link} />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <link rel="icon" href={data.site.siteMetadata.favicon} />
        <meta property="og:url" content={link} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="CoffeeRemont24" />
        <meta
          property="og:image"
          content="https://coffeeremont24.by/favicon.ico"
        />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:title" content={title} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Organization",
            name: "CoffeeRemont24",
            logo: "https://coffeeremont24.by/favicon.ico",
            url: link,
          })}
        </script>
      </Helmet>
      {children}
    </>
  );
};

export default SEOWrapper;
