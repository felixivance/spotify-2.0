import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import useSpotify from "../hooks/useSpotify";
import { currentTrackIdState, isPlayingState } from '../atoms/songAtom';
import { useEffect, useState } from "react";
import useSongInfo from "../hooks/useSongInfo";
import {  SwitchHorizontalIcon, HeartIcon, VolumeUpIcon as VolumeDownIcon, PlayIcon } from "@heroicons/react/outline";
import { RewindIcon, FastForwardIcon, PauseIcon, ReplyIcon, VolumeUpIcon } from "@heroicons/react/solid";

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

    const handlePlayPause=()=>{
        spotifyApi.getMyCurrentPlaybackState().then((data)=>{
            if(data.body.is_playing){
                spotifyApi.pause();
                setIsPlaying(false);
            }else{
                spotifyApi.play();
                setIsPlaying(true);
            }
        })
    }

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

            {/* center */}
            <div className="flex items-center justify-evenly">
                <SwitchHorizontalIcon className="h-5 w-5 cursor-pointer hover:scale-125 transition transform duration-100 ease-out" />
                <RewindIcon 
                // onClick={()=> spotifyApi.skipToPrevious()}  ->api not working
                className=" h-5 w-5 cursor-pointer hover:scale-125 transition transform duration-100 ease-out"/>
                {
                    isPlaying ? (
                        <PauseIcon onClick={handlePlayPause} className="button w-10 h-10" />
                    ) : (
                        <PlayIcon onClick={handlePlayPause} className="button w-10 h-10" />
                    )
                }

                <FastForwardIcon 
                // onClick={()=>spotifyApi.skipToNext()} api not working
                className="h-5 w-5 cursor-pointer hover:scale-125 transition transform duration-100 ease-out" />

                <ReplyIcon className="h-5 w-5 cursor-pointer hover:scale-125 transition transform duration-100 ease-out" />
            </div>
            
            
        </div>
    )
}

export default Player
