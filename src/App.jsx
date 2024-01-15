import { useState } from "react";
import text from "./data"; 
import { nanoid } from 'nanoid';

const App = () => {
  const [countState, setCountState] = useState(1)
  const [textState, setTextState] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTextState(text.filter((txt, idx) => idx < countState));
    // Setting TextState using slice (a Faster way to get new array)
    // setTextState(text.slice(0, parseInt(countState)));    
  }
  return (
    <section className="section-center">
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">
          paragraphs:
          <input type="number" name='amount' id="amount" min={1} max={8} step={1} value={countState} onChange={(e) => {setCountState(e.target.value)}} />
        </label>
        <input type="submit" value="Submit" className="btn"/>
      </form>

      <article className="lorem-text">
        {textState.map(txt => <p key={nanoid()}>{txt}</p>)}
      </article>
  </section>
  );
};

export default App;
