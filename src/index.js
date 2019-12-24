import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import BoundingBox from "./BoundingBox";

const routing = (
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/customImage" component={BoundingBox} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));


serviceWorker.unregister();
