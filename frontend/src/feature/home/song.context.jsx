import { createContext, useState } from "react";

export const songContext = createContext();

export const SongProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [playlist, setPlaylist] = useState([])
  const [song, setSong] = useState(null);
  return(
    <songContext.Provider value={{loading,setLoading,song,setSong,playlist,setPlaylist}}>
        {children}
    </songContext.Provider>
  )
};
