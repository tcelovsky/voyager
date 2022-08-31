import "./App.css";
import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { fb } from "./lib/firebase";
import firebase from "firebase/app";
import "firebase/firestore";
import { getDatabase } from "firebase/database";
import NewTrip from "./components/newTrip";

function App() {
  const db = getDatabase();

  return (
    <div className="App">
      <header className="App-header">Voyager</header>
      <main>
        {console.log(db)}
        <NewTripModal></NewTripModal>
      </main>
    </div>
  );
}

export default App;
