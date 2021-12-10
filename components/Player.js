import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import useSpotify from "../hooks/useSpotify";
import { currentTrackIdState, isPlayingState } from '../atoms/songAtom';
import { useEffect, useState } from "react";
import useSongInfo from "../hooks/useSongInfo";

function Player() {

    const spotifyApi = useSpotify();
    const { data: session, status } = useSession();
    const [ currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState)
    const [ isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [ volume, setVolume] = useState(50);

    const songInfo = useSongInfo();

    console.log("song info");
    console.log(songInfo);

    const fetchCurrentSong = () =>{
        if(!songInfo){
            spotifyApi.getMyCurrentPlayingTrack().then(data=>{
                setCurrentTrackId(data.body?.item?.id);
                spotifyApi.getMyCurrentPlaybackState().then((data)=>{
                    setIsPlaying(data.body?.is_playing);
                })
            })
        }
    }

    useEffect(()=>{
        if(spotifyApi.getAccessToken() && !currentTrackId){
            // fetchCurrentSong();
            setVolume(50);
        }
    },[currentTrackIdState, spotifyApi, session])

    return (
        <div className="text-white bg-gradient-to-b from-black to-gray-900 h-24 grid grid-cols-3 text-xs md:text-base px-2 md:px-8 ">
            {/* left */}
            <div className="flex items-center space-x-4">
                <img className="hidden md:inline-flex h-10 w-10" src={songInfo?.album?.images?.[0]?.url} alt=""/>
                <div>
                    <h3 className=""> {songInfo?.name} </h3>
                    <p>{songInfo?.artists?.[0]?.name}</p>
                </div>
            </div>
            
            
        </div>
    )
}

export default Player
