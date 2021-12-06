import Head from 'next/head'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Spotify 2.0 | Felix Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        {/* sidebar */}
        <Sidebar />
        {/* center */}
      </main>

      {/* div for player */}
      
    </div>
  )
}
