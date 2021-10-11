import { useState } from "react";

export default function App() {
  const [inputText, setInputText] = useState("");

  function buttonClick(e) {
    e.preventDefault();
    fetch(
      "https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1&fbclid=IwAR3iF448FeQ3sPODFI9MchLXZ80wdBS9mH-GkI10_ELVnUpAsD6XjozcX0c"
    )
      .then((r) => r.json())
      .then((words) => setInputText(words));
  }

  return (
    <div>
      <form onSubmit={buttonClick}>
        <input type="text" onChange={(e) => setInputText(e.target.value)} />
        <button>Click Me!</button>
      </form>
      <p
        style={{
          textTransform: "uppercase",
          textDecoration: "underline overline wavy red",
          lineHeight: "3rem"
        }}
      >
        {inputText}
      </p>
    </div>
  );
}
