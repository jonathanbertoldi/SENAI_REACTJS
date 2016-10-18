import React, { Component } from 'react';
import logo from './logo.svg';
import Card from './Card';
import './App.css';

class App extends Component {
  render() {
    var UmaListaDeTarefa = {
      titulo: "Linguagens de programação para aprender",
      tarefas: [
        {
          descricao: "Javascript",
          feito: true 
        },
        {
          descricao: "PHP",
          feito: false  
        },
        {
          descricao: "C#",
          feito: false
        }
      ]
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Card lista={UmaListaDeTarefa} />
      </div>
    );
  }
}

export default App;
