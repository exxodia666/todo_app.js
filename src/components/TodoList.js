import React, { Component } from 'react';
import '../App.css';

export default class TodoList extends Component {
    
  render() {
    console.log('props');
    console.log(this.props);  
    const appState = this.props.store;
    const addTodo = this.props.actions.addTodo;
    const reverseTodo = this.props.actions.reverseTodo;
    const deleteTodo = this.props.actions.deleteTodo;
    
    const listItems = appState.map((item) => {
      console.log(item.completed)
      if(item.completed === true){
        var liStyle = { 'text-decoration': 'line-through' };
      }
      return(
            <li>
              <button onClick = { 
                () => {
                  console.log('Deleting'); 
                  deleteTodo(appState.indexOf(item))
              }} >
                Delete
              </button>
                <p style = { liStyle }  onClick = { 
                  () => { 
                    console.log('Reversing'); 
                    reverseTodo( {completed: item.completed, id: appState.indexOf(item)} ); 
                  }}
                > 
                {item.text} 
                </p>
            </li>);
    }
      
      
    );
    let input = '';
    console.log(listItems);
    return (
            <div>
            <input type='text' ref = { e => this.input = e} />
            <button  onClick = {() => { addTodo(this.input.value)}}>
            Add tip
            </button>
            
                <ul> 
                    { listItems }
                </ul>
           </div>);
    }
  
};
