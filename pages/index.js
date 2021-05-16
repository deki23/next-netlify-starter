import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Atelje Cavic</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header title="Dobrodosli" />
        <p className="description">
          Dobrodosli na sajt <code>Ateljea Cavic</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
