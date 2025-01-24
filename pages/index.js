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
          <li><a href="https://www.nicotine360.org">Nicotine360</li>
          <li><a href="https://www.atnf.forum">American Tobacco & Nicotine Forum (ATNF)</li>
          <li><a href="https://www.gtnf.org">Global Tobacco & Nicotine Forum (GTNF)</li>
          <li><a href="https://tobaccoreporter.com">Tobacco Reporter</li>
          <li><a href="https://industryguide.org">The Industry Guide</li>
        </ul>
      </main>

      <Footer />
    </div>
  )
}
