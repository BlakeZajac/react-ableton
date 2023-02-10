import React, { useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import YouTube from "react-youtube";
import "../../App.scss";
import "./video.scss";

const Video = ({ videoId, thumbnailUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [player, setPlayer] = useState(null);

  const handleClick = () => {
    setIsPlaying(true);
    if (player) {
      player.playVideo();
    }
  };

  const onReady = (event) => {
    setPlayer(event.target);
  };

  if (isPlaying) {
    return (
      <YouTube
        videoId={videoId}
        onReady={onReady}
        opts={{
          width: "1280",
          height: "720",
          playerVars: {
            autoplay: 1,
          },
        }}
        className="video row"
      />
    );
  }

  return (
    <div className="video section">
      <div className="video__wrapper row">
        <div onClick={handleClick} className="video__item">
          <img src={thumbnailUrl} alt="Video thumbnail" />

          <div className="video__item__play-icon">
            <AiFillPlayCircle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
