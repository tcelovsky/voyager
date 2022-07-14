import "./App.css";
import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { fb } from "./lib/firebase";
import NewTripButton from "./components/newTripButton";

function App() {
  // const ref = fb.firestore().collection("Trips").doc("w8uTSUrJJttkUTChjwIJ");
  // .collection("Trips")
  // .doc(item.itemName);

  return (
    <div className="App">
      <header className="App-header">Voyager</header>
      <main>
        <NewTripButton></NewTripButton>
      </main>
    </div>
  );
}

export default App;
