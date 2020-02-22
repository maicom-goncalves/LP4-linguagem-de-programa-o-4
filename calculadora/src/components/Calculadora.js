import React, { Component } from 'react';
import Calculadora from './components/Calculadora.css'
import Display from './components/Display';
import Button from './components/Button';

const estadoInicial = {
    valorExibido:'0'
  }
export default class componentName extends Component {
state {...estadoInicial} 

  constructor (props){
          super(props);

          this.adicionarDigito=this.adicionarDigito.bind(this);
  }

  adicionarDigito(n){
    const valor =this.state.valorExibido +n;
    this.setState({valorExibido:valor});
  }

  limpar(){
    this.setState({...estadoInicial})
  }
  
  render() {
    return (
      <div className="calculator"> 
          <Display  />
          <Button label="AC" click={this.limpar}/>
          <Button label="/" />
          <Button label="%" />
          <Button label="7" click={this.adicionarDigito}/>
          <Button label="8" click={this.adicionarDigito}/>
          <Button label="9" click={this.adicionarDigito}/>
          <Button label="*" click={this.adicionarDigito}/>
          <Button label="4" />
          <Button label="5" />
          <Button label="6" />
          <Button label="-" />
          <Button label="1" />
          <Button label="2" />
          <Button label="3" />
          <Button label="+" />
          <Button label="0" />
          <Button label="." />
          <Button label="=" />
      </div>
    );
    }
}

