import React from "react";
import lottie from "lottie-web";
import animation from "./static/animation.json";

function Animation() {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#react-animation"),
      animationData: animation,
    });
  }, []);

  return (
      <div id="react-animation" style={{ width: 200, height: 200 }} />
  )
}

export default Animation;
