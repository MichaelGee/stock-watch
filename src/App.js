import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BasicCard from "./components/card";

function App() {
  //  const button = {backgroundColor: '#2fbf71', borderColor: '#2fbf71'}

  return (
    <div className='App'>
      <header className='App-header'>
        <BasicCard />
      </header>
    </div>
  );
}

export default App;
