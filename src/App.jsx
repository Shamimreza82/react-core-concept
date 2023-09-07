import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Actor from "../Actor";
import Singer from "../Singer";
import Person from "./Person";


function App() {

const AllSingers = [
  {id: 1, name: "mahfux", age: 52},
  {id: 1, name: "mamun", age: 45},
  {id: 1, name: "hasan", age: 77},
  {id: 1, name: "rakib", age: 33},
  {id: 1, name: "onnonba", age: 12}
]

  const person = {
    name: " shamim Reza", 
    age: 85, 
    address: " duet"
  }


  return (
    <div>s
        <Person ></Person>
        <Person name=" Reza" age='87' address="duet1" ></Person>
        <Person name=" shamim " age='845' address="duet56" ></Person>
        <Person name=" shamim " age='845' address="duet56" ></Person>
        <Person name=" shamim " age='845' address="duet56" ></Person>
        <Person name=" shamim " age='845' address="duet56" ></Person>
        <Person name=" shamim " age='845' address="duet56" ></Person>
        <Person name=" shamim " age='845' address="duet56" ></Person>




      {
        AllSingers.map (music => <Singer singer1= {music} ></Singer> )
      }

    </div>
  );
}

export default App;
