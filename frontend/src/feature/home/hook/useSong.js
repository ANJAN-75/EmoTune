import { getSong } from "../services/song.api";
import { useContext } from "react";
import { songContext } from "../song.context";

export const useSong=()=>{
    const contex=useContext(songContext)

    const {loading,setLoading,song,setSong,playlist,setPlaylist}=contex

    async function handleGetSong({mood}) {
        setLoading(true)
        const data=await getSong({mood})
        setPlaylist(data.song)
        if(data.song.length>0){
            setSong(data.song[0])
        }
        setLoading(false)
        
    }
     return ({ loading, song, handleGetSong,playlist, setSong})
}