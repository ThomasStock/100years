import dayjs from 'dayjs'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useLifeStore } from '../store'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)

const Home: NextPage = () => {
  const { random, getRandom } = useLifeStore()

  const dateString = random ? dayjs(random).format('LLLL') : ''

  useEffect(() => {
    getRandom()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Head>
        <title>100 years</title>
      </Head>

      <main>
        <button
          onClick={() => {
            getRandom()
          }}
        >
          {dateString}
        </button>
      </main>
    </>
  )
}

export default Home
