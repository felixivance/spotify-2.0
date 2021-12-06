import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import useSpotify from "../hooks/useSpotify";

function Sidebar() {
  const { data: session, status } = useSession();
  console.log(session);

  const [playlists, setPlaylists] = useState([]);
  const spotifyApi = useSpotify();

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        console.log("apa");
        console.log(data);
        setPlaylists(data.body.items);
      });
    }
  }, [session, spotifyApi]);

  return (
    <div>
      <div className="p-5 text-sm border-r border-gray-900 space-y-4 text-gray-500 overflow-y-scroll h-screen scrollbar-hide">
        <button
          onClick={() => signOut()}
          className="flex items-center space-x-2 hover:text-white hover:cursor-pointer"
        >
          <LogoutIcon className="h-5" />
          <p>Logout</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white hover:cursor-pointer">
          <HomeIcon className="h-5" />
          <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white hover:cursor-pointer">
          <SearchIcon className="h-5" />
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white hover:cursor-pointer">
          <LibraryIcon className="h-5" />
          <p>Your Library</p>
        </button>
        <hr className="border-t-[0,1px] border-gray-900" />
        <button className="flex items-center space-x-2 hover:text-white hover:cursor-pointer">
          <PlusCircleIcon className="h-5" />
          <p>Create Playlist</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white hover:cursor-pointer">
          <HeartIcon className="h-5 text-blue-500" />
          <p>Liked Songs</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white hover:cursor-pointer">
          <RssIcon className="h-5" />
          <p>Your Episodes</p>
        </button>
        <hr className="border-t-[0,1px] border-gray-900" />

        {/* playlists */}
        {
          // [ ...Array(20).keys() ].map((i, index)=>
          //     <p className="cursor-pointer hover:text-white" key={index}>
          //         Playlist name...
          //     </p>
          // )
          playlists.map((playlist, index) => (
            <p className="cursor-pointer hover:text-white" key={index}>
              {playlist.name}
            </p>
          ))
        }
      </div>
    </div>
  );
}

export default Sidebar;
