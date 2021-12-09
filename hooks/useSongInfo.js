import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { currentTrackIdState } from "../atoms/songAtom";
import useSpotify from "./useSpotify"

function useSongInfo(){
    const spotifyApi = useSpotify();
    const [ currentTrackId, setCurrentTrackId ] = useRecoilState(currentTrackIdState)
    const [ songInfo, setSongInfo] = useState(null);


    useEffect(()=>{
        const fetchSongInfo = async ()=>{
            
        }
    },[currentTrackId, spotifyApi])

    return songInfo;
}

export default useSongInfo