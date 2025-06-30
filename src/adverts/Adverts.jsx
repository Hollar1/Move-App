import React from "react";
import { useState, useEffect } from "react";
import advertsStyles from "../adverts/Adverts.module.css";
import fashion_store_video from "../../src/assets/videos/fashion_store.mp4";
import fashion_store_video1 from "../../src/assets/videos/fashion_store1.mp4";

function Adverts() {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer); // Clean up the timer
    }
  }, [seconds]);
  return (
    <div className={advertsStyles.parent_wrapper}>
      <div className={advertsStyles.wrapper}>
        <video muted autoPlay loop controls src={fashion_store_video} />

        <div className={advertsStyles.link_div} href="">
          {" "}
          Step into style at ElegantWear Boutique & Browse the latest
          collections @{" "}
          <a className={advertsStyles.link} href="https://studylodge.org/">https://studylodge.org/</a> 💃
        </div>
        <span>Ad {seconds}</span>
      </div>
    </div>
  );
}

export default Adverts;
