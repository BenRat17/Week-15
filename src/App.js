import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import {HouseList} from './components/HouseList.js'
import { NewHouse } from './components/NewHouse';

class App extends Component{
  render() {
    return(
      <div>
        <HouseList />
        <NewHouse/>
      </div>
    )
  }
}

export default App;
