import React from "react";
import emojipedia from "../emojipedia";
import Header from "./Header";
import Card from "./Card";

function App() {
  return (
    <div>
      <Header />
      <div>
        <dl className="dictionary">
          {emojipedia.map((emojiTerm) => {
            return <Card key={emojiTerm.id} emojiTerm={emojiTerm} />;
          })}
        </dl>
      </div>
    </div>
  );
}

export default App;
