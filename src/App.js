import React, { Component } from 'react';
//import logo from './logo.svg';                //Calculator in reactJS using concept of 'refs'
import './App.css';
import './DottedBox.css'


class App extends Component {
  constructor(props){
    super(props);
    this.myInput=React.createRef();
    this.input=React.createRef();
    this.new=React.createRef();
  };
  increment=()=>{
    let num1=parseInt(this.myInput.current.value);
    let num2=parseInt(this.input.current.value);
    this.new.current.value=num1+num2;
  };
  multiply=()=>{
    let num1=parseInt(this.myInput.current.value);
    let num2=parseInt(this.input.current.value);
    this.new.current.value=num1*num2;
  };
  divide=()=>{
    let num1=parseInt(this.myInput.current.value);
    let num2=parseInt(this.input.current.value);
    this.new.current.value=num1/num2;
  };
  decrement=()=>{
    let num1=parseInt(this.myInput.current.value);
    let num2=parseInt(this.input.current.value);
    this.new.current.value=num1-num2;
  };
  render() {
    return (
        <div className='App'>
          <div className='Body'>
            <h1><b>CALCULATOR</b></h1>

            <button className='DottedBox_b' onClick={this.increment} ><b><big>ADD</big></b></button>
            <button className='DottedBox_b' onClick={this.decrement} ><b><big>SUBTRACT</big></b></button>
            <button className='DottedBox_b' onClick={this.multiply} ><b><big>MULTIPLY</big></b></button>
            <button className='DottedBox_b' onClick={this.divide} ><b><big>DIVIDE</big></b></button>
            <br/><br/>
            <b><input type='text' defaultValue={0} ref={this.myInput} /></b>
            <b><input type='text' defaultValue={0} ref={this.input} /></b>
            <b><input type='text' defaultValue={0} ref={this.new} /></b>
            <br/>
            <br/>

        </div>
        </div>
    );
  }
}

export default App;
