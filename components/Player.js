import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import useSpotify from "../hooks/useSpotify";
import { currentTrackIdState, isPlayingState } from '../atoms/songAtom';
import { useState } from "react";
import useSongInfo from "../hooks/useSongInfo";

function Player() {

    const spotifyApi = useSpotify();
    const { data: session, status } = useSession();
    const [ currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState)
    const [ isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [ volume, setVolume] = useState(50);

    const songInfo = useSongInfo();
    
    return (
        <div className="">
            {/* left */}
            <div>

            </div>
            <div>

            </div>
            
        </div>
    )
}

export default Player
