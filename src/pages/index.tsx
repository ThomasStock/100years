import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { useLifeStore } from '../store'
import { getSeed, setSeed } from '../store/seed'

const Home: NextPage = () => {
  const { random, getRandom } = useLifeStore()
  const [asked, setAsked] = useState(false)

  const seed = getSeed()

  return (
    <>
      <Head>
        <title>100 years</title>
      </Head>

      <main>
        <h2>Seed: {seed}</h2>
        <button onClick={() => setSeed(seed + 1)}>Set seed to {seed + 1}</button>
        <br />
        <button
          onClick={() => {
            setAsked(true)
            getRandom()
          }}
        >
          {asked ? random : 'click to generate'}
        </button>
      </main>
    </>
  )
}

export default Home
