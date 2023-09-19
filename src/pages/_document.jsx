import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/43719883.js">
        </script>
        <script src="https://cdn.botpress.cloud/webchat/v0/inject.js" async></script>
      </body>
    </Html>
  )
}
