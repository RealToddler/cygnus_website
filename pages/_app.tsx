import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const title = "GalaxyTraveller | By Cygnus";
  const description = "GalaxyTraveller, a game made by Cygnus.";
  return (
    <>
      <DefaultSeo
        title={title}
        description={description}
        robotsProps={{
          nosnippet: false,
          notranslate: false,
          noimageindex: false,
          noarchive: false,
          maxSnippet: -1,
          maxImagePreview: "none",
          maxVideoPreview: -1,
        }}
        openGraph={{
          title,
          locale: "fr",
          type: "website",
          url: "https://www.galaxytraveller.fr/",
          images: [
            {
              url: "/logo.png",
            },
          ],
          description,
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/logo_white.png",
          },
        ]}
        additionalMetaTags={[
          {
            name: "robots",
            content: "index, follow",
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}
