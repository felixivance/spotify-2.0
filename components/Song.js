import { useRecoilState } from "recoil";
import { currentTrackIdState, isPlayingState } from "../atoms/songAtom";
import useSpotify from "../hooks/useSpotify";

function Song({ order, track }) {
  const spotifyApi = useSpotify();
  const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState);

  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);

  const playSong = () => {
    setCurrentTrackId(track.track.id);
    setIsPlaying(true);

    spotifyApi.play({
      uris: [track.track.uri],
    });
  };

  return (
    <div
      className="grid grid-cols-2 text-gray-500 py-3 px-5 hover:bg-gray-900 rounded-lg cursor-pointer"
      onClick={() => playSong()}
    >
      <div className="flex items-center space-x-4 ">
        <p>{order + 1}</p>
        <img
          className="h-10 w-10 rounded-md"
          src={track.track.album.images[0].url}
          alt=""
        />
        <div>
          <p className="w-36 lg:w-64 truncate text-white">{track.track.name}</p>
          <p>{track.track.artists[0].name}</p>
        </div>
      </div>
      <div className="flex items-center justify-between ml-auto md:ml-0">
        <p className="hidden md:inline w-40">{track.track.album.name}</p>
        <p className="">
          {millisToMinutesAndSeconds(track.track.duration_ms)}
        </p>
      </div>
    </div>
  );
}

export default Song;

export function millisToMinutesAndSeconds(millis) {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return seconds == 60
    ? minutes + 1 + ":00"
    : minutes + ":" + (seconds < 10 ? 0 : "") + seconds;
}
