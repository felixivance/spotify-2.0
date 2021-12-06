import Head from "next/head";
import Center from "../components/Center";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Spotify 2.0 | Felix Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex">
        {/* sidebar */}
        <Sidebar />
        <Center />
      </main>

      {/* div for player */}
    </div>
  );
}
