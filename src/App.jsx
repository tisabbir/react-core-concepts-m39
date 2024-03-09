import "./App.css";
import Counter from "./counter";
import Friends from "./friends";
import Team from "./team";
import User from "./user";

function App() {
  const handleClick = () => {
    alert("btn1 clicked");
  };

  const addToFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h3>Vite + React</h3>

      <Friends></Friends>
      <User></User>
      <button onClick={handleClick}>Btn 1</button>

      <button
        onClick={() => {
          alert("btn 2 clicked");
        }}
      >
        Btn 2
      </button>

      <button
        onClick={() => {
          addToFive(3);
        }}
      >
        Add to 5
      </button>

      <Counter> </Counter>
      <Team></Team>
    </>
  );
}

export default App;
