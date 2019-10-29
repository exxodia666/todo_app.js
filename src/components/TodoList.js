import React, { Component } from 'react';
import '../App.css';

export default class TodoList extends Component {

  render() {
    document.addEventListener('keydown', (e) => {
      if(e.code === 'Enter' && this.input.value){
        addTodo(this.input.value);
        this.input.value = '';
        e.preventDefault();
      }
      
    });

    const appState    = this.props.store;
    const addTodo     = this.props.actions.addTodo;
    const reverseTodo = this.props.actions.reverseTodo;
    const deleteTodo  = this.props.actions.deleteTodo;
    const listItems   = appState.map((item) => {
      if(item.completed === true) {
        var liStyle = { 'text-decoration': 'line-through' };
      }
      return (<li>
                <button onClick = {() => { deleteTodo(appState.indexOf(item))}}>
                  Delete
                </button>
                <p style = { liStyle }  onClick = { () => { reverseTodo({ completed: item.completed, id: appState.indexOf(item) });}}> 
                  {item.text} 
                </p>
              </li>);
    });

    let input = '';
    return (
            <div>
              <input   type='text' ref =  { e => this.input = e} />
              <button  onClick = {  () => { 
                if(this.input.value) { 
                  addTodo(this.input.value)
                  this.input.value = '';
                }}}>
              Add tip
              </button>
              <ul> 
                { listItems }
              </ul>
           </div>);
  }
};