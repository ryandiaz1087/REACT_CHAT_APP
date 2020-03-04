import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from './Root';
import './index.module.css';

const App = (
  <Router>
    <Root />
  </Router>
);

ReactDOM.render(App, document.querySelector('#root'));
