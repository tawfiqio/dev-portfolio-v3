import Head from 'next/head'
import HomeSection from '../sections/Home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Name | Portfolio</title>
      </Head>
      <main className="bg-white dark:bg-black text-black dark:text-white">
        <HomeSection />
      </main>
    </>
  )
}
