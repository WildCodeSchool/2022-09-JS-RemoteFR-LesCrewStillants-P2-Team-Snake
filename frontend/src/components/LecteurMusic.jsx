/* eslint-disable */
import YouTube from "react-youtube";
import React, { useEffect, useState } from "react";
import axios from "axios";

function LecteurMusic({
  videoId,
  diffusionDuration,
  setDiffusionDurantion,
  setVideoPlaying,
  setShowButtonPlaying,
}) {
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (videoId) {
      axios
        .get(
          `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=contentDetails&key=${
            import.meta.env.YOUTUBE_DATA_API_KEY
          }`
        )
        // Extract the DATA from the received response
        .then((response) => response.data)
        // Use this data to update the state
        .then((data) => {
          setDuration(
            Math.ceil(
              // eslint-disable-next-line no-eval
              eval(
                // eslint-disable-line no-eval

                data.items[0].contentDetails.duration // 166
                  .replace("PT", "")
                  .replace("S", "")
                  .replace("M", "*60+")
              ) / 2
            )
          );
        });
    }
  }, []);

  if (JSON.parse(localStorage.getItem("userDifficulty")) > 1) {
    setDiffusionDurantion(10);
  }

  const opts = {
    height: "0",
    width: "0",
    playerVars: {
      autoplay: 1,
      start: duration,
      end: duration + diffusionDuration,
    },
  };

  function playvideo() {
    setVideoPlaying(true);
    setShowButtonPlaying(true);
  }

  return (
    <div>
      <YouTube videoId={videoId} onPlay={playvideo} opts={opts} />
    </div>
  );
}

export default LecteurMusic;
