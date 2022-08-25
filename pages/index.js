import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Photography Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading='LOCALS ONLY! // Skateboarding Photography' message='"You dont stop skating because you grew old, you grew old because you stopped skating."'/>
    </div>
  )
}
