import { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState(0);

  const teamStyle = {
    border: "2px solid purple",
    margin: "15px",
    padding: "15px",
    borderRadius: "16px",
  };
  const handleIncrease = () => {
    const newTeam = team + 1;
    setTeam(newTeam);
  };
  const handleDecrease = () => {
    const newTeam = team - 1;
    setTeam(newTeam);
  };
  return (
    <div style={teamStyle}>
      <h3>Player : {team}</h3>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}
