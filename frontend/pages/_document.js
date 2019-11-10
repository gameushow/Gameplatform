import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }
  render () {
    return (
      <html>
        <Head>
        <link href="https://fonts.googleapis.com/css?family=Chakra+Petch:400,500,600,700|Staatliches&display=swap" rel="stylesheet"/>

          <link
            rel="icon"
            type="image/x-icon"
            href=""
          />
          <meta httpEquiv="Content-Type" content="text/html charset=utf-8" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
          />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NFZH4C8" height="0" width="0" style="display:nonevisibility:hidden"></iframe>`
            }}
          />
        </body>
      </html>
    )
  }
}
