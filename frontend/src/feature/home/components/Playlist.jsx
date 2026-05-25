import React from "react";
import "./playlist.scss";
import { useSong } from "../hook/useSong";

const Playlist = () => {
  const { playlist, setSong } = useSong();

  return (
    <div className="playlist-container">

      {playlist.map((song) => (
        <div
          className="song-contain"
          key={song._id}
          onClick={() => setSong(song)}
        >
          <div className="song-poster">
            <img
              src={song.posterUrl}
              alt={song.title}
            />
          </div>

          <div className="song-info">
            <h3>{song.title}</h3>
            <h5>{song.artist}</h5>
          </div>

        </div>
      ))}

    </div>
  );
};

export default Playlist;