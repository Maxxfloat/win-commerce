import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Win Commerce</title>
      <meta charSet="UTF-8" />
      <meta
        name="description"
        content="win-commerce e-cmommerce webapp for Resume"
      />
      <meta
        name="keywords"
        content="Typescript, Nextjs, Tailwindcss, Next-Auth, React-Query, Axios, "
      />
      <meta name="author" content="Omid Neshati" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
