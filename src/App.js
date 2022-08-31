import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { db } from "./lib/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import NewTrip from "./components/newTrip";

function App() {
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">Voyager</header>
      <main>
        {console.log(db)}
        <NewTrip></NewTrip>
      </main>
    </div>
  );
}

export default App;
