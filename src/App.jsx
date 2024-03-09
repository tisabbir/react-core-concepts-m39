import "./App.css";
import Counter from "./counter";
import Team from "./team";

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
