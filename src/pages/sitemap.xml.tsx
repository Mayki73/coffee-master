const Brands = require("../data/brands.json");
const Mulfunctions = require("../data/mulfunctions.json");
const brands: any = [];
Brands["machines"].forEach((type: any) => {
  type.brands.forEach((brand: any) => {
    brands.push(brand);
  });
});

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
        <loc>https://www.coffeeremont24.by/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
     </url>
     <url>
        <loc>https://www.coffeeremont24.by/mulfunctions/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
     </url>
    <url>
        <loc>https://www.coffeeremont24.by/delivery-and-payment/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.coffeeremont24.by/about/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.coffeeremont24.by/contacts/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.coffeeremont24.by/prices/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://www.coffeeremont24.by/repair/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
    </url>
     ${Brands["machines"]
       .map((brand: any) => {
         return `
         <url>
            <loc>${`https://www.coffeeremont24.by/repair/${brand?.type}/`}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.9</priority>
         </url>
      `;
       })
       .join("")}
     ${Mulfunctions["mulfunctions"]
       .map((mulfunction: any) => {
         return `
            <url>
                <loc>${`https://www.coffeeremont24.by/mulfunctions/${mulfunction?.link}/`}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>daily</changefreq>
                <priority>0.9</priority>
            </url>
        `;
       })
       .join("")}
     ${brands.map((brand: any) => {
       return `
                <url>
                 <loc>${brand.seo.link}</loc>
                 <lastmod>${new Date().toISOString()}</lastmod>
                 <changefreq>daily</changefreq>
                 <priority>0.9</priority>
                </url>
          `;
     })}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: any) {
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
