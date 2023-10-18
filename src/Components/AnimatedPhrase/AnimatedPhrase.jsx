import React, { useState, useEffect } from "react";
import "./AnimatedPhrase.css";

export default function AnimatedPhrase(props) {
  const { phrase } = props; //get my phrase
  /* 
  set phraseNow
    - phraseNow is the current state of the phrase
    - setPhraseNow set the new state of the phrase 
  */
  const [phraseNow, setPhraseNow] = useState("");

  /* 
  set count
    - count is the current position in the phrase
    - setCount set the new position in the phrase 
  */
  const [count, setCount] = useState(0);

  /*   
  set isRendering
    - isRendering start rendering
    - setPhraseNow set if it must render or stop render
  when isRendering === false
    - means the phrase has already been displayed
      - it will be setted again to true, so the phrase will be displayed again 
  */
  const [isRendering, setIsRendering] = useState(true);

  useEffect(() => {
    const phraseLength = phrase.length;

    const timer = setInterval(() => {
      //if its not rendering (reached the end), must restart
      if (!isRendering) {
        // restarting my variables
        setCount(0);
        setPhraseNow("");
        setIsRendering(true);
      } else {
        //stop if it reaches the end
        if (count === phraseLength) {
          setIsRendering(false);
        } else {
          //get the letter of the current position and add it to the phraseNow
          setPhraseNow((prevPhraseNow) => prevPhraseNow + phrase[count]);

          /* 
          update position
            - prevCount is the current position int the phrase
            - +1 set the new position
          */
          setCount((prevCount) => prevCount + 1);
        }
      }
    }, 500);

    return () => clearInterval(timer); //clear when reaches the end
  }, [count, isRendering, phrase]);

  return <p className="phrase">{phraseNow}</p>;
}
