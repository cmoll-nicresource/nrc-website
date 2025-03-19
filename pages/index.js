import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Nicotine Resource Consortium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Nicotine Resource Consortium" />
        <p className="description">
          The Nicotine Resource Consortium is a 501(c)(6) nonprofit dedicated to informing and convening all stakeholders in the tobacco and nicotine industries.
          Please use the following links to access the Consortium's various properties:
        </p>
        <ul>
          <li><a href="https://www.nicotine360.org">Nicotine360</a></li>
          <li><a href="https://www.atnf.forum">American Tobacco &amp; Nicotine Forum (ATNF)</a></li>
          <li><a href="https://www.gtnf.org">Global Tobacco &amp; Nicotine Forum (GTNF)</a></li>
          <li><a href="https://tobaccoreporter.com">Tobacco Reporter</a></li>
        </ul>
      </main>

      <Footer />
    </div>
  )
}
