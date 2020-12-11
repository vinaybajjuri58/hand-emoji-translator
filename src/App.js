import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "👋": "Waving Hand",
  "🤚": "Raised Back of Hand",
  "✋": "Raised Hand",
  "🖖": "Vulcan Salute",
  "👌": "OK Hand",
  "🤏": "Pinching Hand",
  "✌": "Victory Hand",
  "🤞": "Crossed Fingers",
  "🤟": "Love-You Gesture",
  "🤘": "Sign of the Horns",
  "🤙": "Call Me Hand",
  "👈": "Backhand Index Pointing Left",
  "👉": "Backhand Index Pointing Right",
  "👆": "Backhand Index Pointing Up",
  "🖕": "Middle Finger",
  "👇": "Backhand Index Pointing Down",
  "👍": "Thumbs Up",
  "👎": "Thumbs Down",
  "✊": "Raised Fist",
  "👊": "Oncoming Fist",
  "🤛": "Left-Facing Fist",
  "🤜": "Right-Facing Fist",
  "👏": "Clapping Hands",
  "🙌": "Raising Hands",
  "👐": "Open Hands",
  "🤲": "Palms Up Together",
  "🤝": "Handshake",
  "🙏": "Folded Hands"
};

const handEmojis = Object.keys(emojiDictionary);

export default function App() {
  const [input, setInput] = useState("");
  const [meaning, setMeaning] = useState("");

  function emojiClickHandler(inputEmoji) {
    setInput(inputEmoji);
    setMeaning(emojiDictionary[inputEmoji]);
  }

  function changeHandler(event) {
    setInput(event.target.value);
    setMeaning("");
  }
  function clickHandler() {
    if (input in emojiDictionary) {
      setMeaning(emojiDictionary[input]);
    } else {
      setMeaning("This emoji is not available in our Database");
    }
  }

  return (
    <div className="App">
      <h1 style={{ color: "#babd0d" }}>Understand Hand Emojis</h1>
      <input onChange={changeHandler} />
      <button onClick={clickHandler}>Find meaning</button>
      <span id="emoji">{input}</span>
      <p>translation will appear here</p>
      <h1>{meaning}</h1>
      {handEmojis.map((emoji) => (
        <span
          key={emoji}
          style={{
            fontSize: "2rem",
            padding: "0.5rem",
            cursor: "pointer"
          }}
          onClick={() => emojiClickHandler(emoji)}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}
