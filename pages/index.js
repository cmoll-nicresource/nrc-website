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
        </p>
      </main>

      <Footer />
    </div>
  )
}
