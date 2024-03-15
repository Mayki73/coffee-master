import { NextSeo } from "next-seo";
import React from "react";

interface IProps {
  title: string;
  description?: string;
  link?: string;
  children: React.ReactNode;
}

const SEOWrapper: React.FC<IProps> = ({
  title,
  description,
  link,
  children,
}) => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={link}
        openGraph={{
          url: link,
          title: title,
          description: description,
          site_name: "CoffeeRemont24",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/icon.png",
          },
        ]}
      />
      {children}
    </>
  );
};

export default SEOWrapper;
