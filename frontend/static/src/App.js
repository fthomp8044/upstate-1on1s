import React from 'react';
import { render } from "react-dom";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {const App = () => (
  <div>
    <FontAwesomeIcon icon={faHome} />
  </div>
);

render(<App />, document.getElementById("root"));
