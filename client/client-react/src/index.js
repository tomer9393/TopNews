import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import io from "socket.io-client";

const socket = io.connect("http://localhost:8081");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);