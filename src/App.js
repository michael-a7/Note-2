
import React from 'react'
import './App.css';
import Home from "./Application/home"
import {Route} from "react-router-dom";
function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;
