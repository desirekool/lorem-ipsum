import { useState } from "react";
import text from "./data"; 

const App = () => {
  const [countState, setCountState] = useState(1)
  const [textState, setTextState] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTextState(text.filter((txt, idx) => idx < countState));
    // Setting TextState using slice (a Faster way to get new array)
    // setTextState(text.slice(0, parseInt(countState)));
    console.log(textState);
  }
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="number" min={1} max={8} step={1} value={countState} onChange={(e) => {setCountState(e.target.value)}} />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <article>
        {textState.map(txt => <p>{txt}</p>)}
      </article>
  </main>
  );
};

export default App;
