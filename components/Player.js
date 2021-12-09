import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import useSpotify from "../hooks/useSpotify";
import { currentTrackIdState, isPlayingState } from '../atoms/songAtom';

function Player() {

    const spotifyApi = useSpotify();
    const { data: session, status } = useSession();
    const [ currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState)
    const [ isPlaying, setIsPlaying] = useRecoilState(isPlayingState);

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
