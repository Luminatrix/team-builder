import React, { useState } from 'react';
import './App.css';
import TeamBuilder from "./Form"
import Card from "./Card"

function App() {
  const [teamMember, setTeamMember] = useState([
    {
      Name: "Magical McMythicson",
      Email: "UnicornDev@Team.com",
      Role: "Head Unicorn Dev"
    }
  ])

  const addNewMember = member => {
    const newTeamMember = setTeamMember([...teamMember, member]);
  };

  return (
    <div className="App">
     <h1>Mystical Team Members</h1>

     <TeamBuilder addNewMember={addNewMember}/>
     <Card teamMember={teamMember} />

    </div>
  );
}

export default App;