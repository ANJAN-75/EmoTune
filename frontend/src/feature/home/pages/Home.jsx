import React from "react";
import FaceExpression from "../../expression/Facialexpression";
import Player from "../components/Player";
import { useSong } from "../hook/useSong";
import Playlist from "../components/Playlist";
import "./home.scss";

const Home = () => {
  const { handleGetSong } = useSong();

  return (
    <div className="home">
      <div className="home-top">
        <div className="home-left">
          <FaceExpression
            onClick={(expression) => {
              if (expression === "Neutral") {
                return;
              }
              handleGetSong({ mood: expression });
            }}
          />
        </div>

        <div className="home-right">
          <Playlist />
        </div>
      </div>

      <div className="home-bottom">
        <Player />
      </div>
    </div>
  );
};

export default Home;
