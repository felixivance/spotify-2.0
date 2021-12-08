import { ChevronDownIcon } from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { shuffle } from "lodash";
import {  useRecoilState, useRecoilValue } from "recoil";
import { playlistIdState,playlistState } from "../atoms/playlistAtom";
import useSpotify from "../hooks/useSpotify";
import Songs from "./Songs";

function Center() {
  const { data: session } = useSession();
  const [color, setColor] = useState(null);
  const playlistId = useRecoilValue(playlistIdState);
  const [playlist, setPlaylist] = useRecoilState(playlistState);
  const spotifyApi = useSpotify();

  const colors = [
    "from-indigo-500",
    "from-blue-500",
    "from-green-500",
    "from-red-500",
    "from-yellow-500",
    "from-pink-500",
    "from-purple-500",
  ];


  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, [playlistId]);

  useEffect(()=>{
    spotifyApi.getPlaylist(playlistId).then((data)=>{
        setPlaylist(data.body)
    }).catch((error)=> console.log("something went wrong getting the playlist ", error))  
  },[spotifyApi, playlistId])

  console.log(playlist);

  return (
    <div className="flex-grow h-screen overflow-y-scroll scrollbar-hide">
      <header className="absolute top-5 right-8">
        <div className="flex items-center bg-clack space-x-3 opacity-90 hover:opacity-80 rounded-full p-1 pr-2 bg-gray-700 cursor-pointer"
         onClick={() => signOut()}>
          <img
            className="rounded-full w-10 h-10"
            src={session?.user.image}
            alt=""
          />
          <h2 className="text-white">{session?.user.name}</h2>
          <ChevronDownIcon className="h-5 w-5 text-white" />
        </div>
      </header>

      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8 w-full`}
      >
        <img src={playlist?.images?.[0]?.url} alt="" className="h-44 w-44 shadow-2xl rounded-md" />
        <div className="flex flex-col">
            <p className="tracking-wider">PLAYLIST</p>
            <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold">{playlist?.name}</h1>
        </div>
      </section>
      <div>
          <Songs />
      </div>
    </div>
  );
}

export default Center;
