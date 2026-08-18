import { personJsonLd, profilePageJsonLd, websiteJsonLd } from "@/lib/seo";

export default function JsonLd() {
  const schemas = [personJsonLd(), websiteJsonLd(), profilePageJsonLd()];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
