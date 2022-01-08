import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import App from './App';

let url_ = window.location.pathname

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(url_, document.getElementById('titlepage'));
