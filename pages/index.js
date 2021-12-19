import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Pravin Adhav</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="hello!" />
        <p className="description">
         it s great to see you here!.
        </p>
      </main>

      <Footer />
    </div>
  )
}
