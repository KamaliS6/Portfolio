import { Helmet } from "react-helmet-async";
import { siteConfig } from "../../data/site-config";

interface SEOHeadProps {
  title?: string;
  description?: string;
}

export function SEOHead({ title, description }: SEOHeadProps) {
  const pageTitle = title
    ? `${title} — ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.title}`;
  const pageDescription = description ?? siteConfig.description;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
    </Helmet>
  );
}
