import YouTube from "react-youtube";
import React, { Component, useEffect, useState } from "react";
import axios from "axios";

function LecteurMusic({ videoId, selectedDifficulty }) {
  const [duration, setDuration] = useState(0);
  const [diffusionDuration, setDiffusionDurantion] = useState(15);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=contentDetails&key=AIzaSyAMVJZ9qc7mcB3XLT3xb3N6fon2LuwPypE`
      )
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setDuration(
          Math.ceil(
            eval(
              data.items[0].contentDetails.duration // 166
                .replace("PT", "")
                .replace("S", "")
                .replace("M", "*60+")
            ) / 2
          )
        );

        if (selectedDifficulty == 3) {
          setDiffusionDurantion(10);
        }
      });
  }, [videoId]);

  console.warn(duration);

  const opts = {
    height: "0",
    width: "0",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      start: duration,
      end: duration + diffusionDuration,
    },
  };

  console.warn(videoId);

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
}

export default LecteurMusic;
