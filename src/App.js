import "./App.css";
import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { fb } from "./lib/firebase";

function App() {
  // const ref = fb.firestore().collection("Trips").doc("w8uTSUrJJttkUTChjwIJ");
  // .collection("Trips")
  // .doc(item.itemName);

  return (
    <div className="App">
      <header className="App-header">Voyager</header>
    </div>
  );
}

export default App;
