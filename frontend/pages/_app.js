import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as Sentry from '@sentry/browser'


export default class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <title>GameShow</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}
