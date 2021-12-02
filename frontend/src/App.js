import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import DesayunosList from './components/DesayunosList'
import CreateDesayuno from './components/CreateDesayuno'
import CreateClient from './components/CreateClient'

import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
        <Route path="/desayunos" exact component={DesayunosList} />
        <Route path="/desayunos/create" component={CreateDesayuno} />
        <Route path="/desayunos/edit/:id" component={CreateDesayuno} />
        <Route path="/client" component={CreateClient} />
      </div>
    </Router>
  );
}

export default App;
