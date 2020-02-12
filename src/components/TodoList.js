import React, { Component } from 'react'
import '../styles/style.css'
export default class TodoList extends Component {

  render() {

    document.addEventListener('keydown', (e) => { if(e.code === 'Enter' && this.input.value) { addTodo(this.input.value); this.input.value = ''; e.preventDefault()}});

    const appState    = this.props.store;
    const addTodo     = this.props.actions.addTodo;
    const reverseTodo = this.props.actions.reverseTodo;
    const deleteTodo  = this.props.actions.deleteTodo;

    const listItems   = appState.map((item) => {
      if(item.completed === true) { var liStyle = { 'textDecoration': 'line-through' }};
      return (<li className = 'todo'>
                              <a className = 'delete' onClick = { () => { deleteTodo(appState.indexOf(item))} }> Delete</a> 
                              <div style = { liStyle }  onClick = { () => { reverseTodo({ completed: item.completed, id: appState.indexOf(item) });}}> 
                                {item.text} 
                              </div>
              </li>);
    });

    let input = '';
    return (
            <div className='App'>
                  <input placeholder=' Type your task'  type='text' ref =  { e => this.input = e} />
                  <a className='add'  onClick = {  () => { if(this.input.value) { addTodo(this.input.value); this.input.value = '';}}} >
                  Add
                  </a>
              <ul> 
                { listItems }
              </ul>
              
                
           </div>);
  }
};