import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>THONK!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="To batendo a nave..." />
        <p className="description">
          Curtindo a <code>solidão.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
