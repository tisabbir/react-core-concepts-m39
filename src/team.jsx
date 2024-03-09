import { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState(0);

  const handleIncrease = () => {
    const newTeam = team + 1;
    setTeam(newTeam);
  };
  const handleDecrease = () => {
    const newTeam = team - 1;
    setTeam(newTeam);
  };
  return (
    <div>
      <h3>Player : {team}</h3>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}
