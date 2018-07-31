import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './routes/Home';
import Create from './routes/Create';
import Pelicula from './routes/Pelicula';
import Navbar from './components/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Route exact path = '/' component = {Home}/>
          <Route exact path = '/create' component ={Create}/>
          <Route exact path = '/pelicula/:uid' component = {Pelicula}/>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
