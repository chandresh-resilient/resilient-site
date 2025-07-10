// src/pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
        {/* Basic Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Resilient IT Services" />
        <meta name="robots" content="index, follow" />
        {/* SEO Meta */}
        <meta
          name="description"
          content="Resilient IT Services delivers innovative low-code solutions to accelerate digital transformation."
        />
        <meta
          name="keywords"
          content="Low-Code, Mendix, OutSystems, React, Digital Transformation, Resilient IT Services, Pune"
        />
        {/* Open Graph (for Facebook, LinkedIn) */}
        <meta property="og:title" content="Resilient IT Services" />
        <meta
          property="og:description"
          content="Accelerating digital transformation with cutting-edge low-code solutions."
        />
        <meta
          property="og:image"
          content="https://resilientitservices.com/logo-og.png"
        />{" "}
        {/* Add to /public */}
        <meta property="og:url" content="https://www.resilientitservices.com" />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Resilient IT Services" />
        <meta
          name="twitter:description"
          content="Low-code innovation for fast, scalable digital transformation."
        />
        <meta name="twitter:image" content="/logo-og.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
