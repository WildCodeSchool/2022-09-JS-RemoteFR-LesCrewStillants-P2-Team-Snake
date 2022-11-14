import YouTube from "react-youtube";
import axios from "axios";
import { useEffect } from "react";

function LecteurMusic({ videoId }) {
  let duration = 0;

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=contentDetails&key=AIzaSyAMVJZ9qc7mcB3XLT3xb3N6fon2LuwPypE`
      )
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        const reg1 = data.items[0].contentDetails.duration.replace("PT", "");
        const reg2 = reg1.replace("S", "");
        const arr = reg2.split("M");
        duration = +arr[0] * 60 + +arr[1];

        // console.warn(data.items[0].contentDetails.duration);
      });
  }, []);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      start: duration / 2,
    },
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
}

export default LecteurMusic;
