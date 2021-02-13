import "./styles.css";
import { useState } from "react";

const emojiDictionary = {
  "1": "Smiling",
  "2": "disbelief",
  "3": "sad",
  "4": "takeout box",
  "5": "love",
  "6": "annoyance"
};
var emojis = Object.keys(emojiDictionary);
export default function App() {
  const [emoji, setEmoji] = useState("no emoji");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    if (emojiDictionary[userInput] === undefined) setEmoji("no emoji");
    else setEmoji(emojiDictionary[userInput]);
  }
  function clickHandler(key) {
    setEmoji(emojiDictionary[key]);
  }
  return (
    <div className="App">
      <h1>Inside Out</h1>
      <input onChange={emojiInputHandler} />
      <h1>the Emoji is {emoji}</h1>
      <h3>Emojis we know</h3>
      {emojis.map((emoji) => {
        return (
          <span
            key={emoji}
            onClick={() => clickHandler(emoji)}
            style={{ fontSize: "larger", padding: "10px" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
