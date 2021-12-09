import { getSession } from "next-auth/react";
import Head from "next/head";
import Center from "../components/Center";
import Player from "../components/Player";
import Sidebar from "../components/Sidebar";

export default function Home({ session }) {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Spotify 2.0 | Welcome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex">
        {/* sidebar */}
        <Sidebar />
        <Center />
      </main>

      {/* div for player */}
      <div className="flex">
        <p className="text-white">Hello</p>
        <Player />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
