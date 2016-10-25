import React, { Component } from 'react';
import Card from '../Card';
import './App.css';

class App extends Component {
  render() {
    var UmaListaDeTarefa = {
      titulo: "Lista de estudos",
      tarefas: [
        {
          descricao: "Javascript",
          feito: true 
        },
        {
          descricao: "PHP",
          feito: true 
        },
        {
          descricao: "C#",
          feito: false
        }
      ]
    }

    var UmaListaDeTarefa2 = {
      titulo: "Lista de estudos",
      tarefas: [
        {
          descricao: "Javascript",
          feito: false
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

    var UmaListaDeTarefa3 = {
      titulo: "Lista de estudos",
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
          feito: true
        }
      ]
    }

    const style = {
      left: "0px",
      top: "0px",
      display: "block",
      boxShadow: "10px 10px 5px #CCC"
    }

    return (
      <div className="App" style={style}>
        <Card lista={UmaListaDeTarefa} />
        <Card lista={UmaListaDeTarefa2} />
        <Card lista={UmaListaDeTarefa3} />
      </div>
    );
  }
}

export default App;
