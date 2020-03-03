/*
import React, { Component } from 'react'
import '../styles/style.css'
//todo hooks
import Item from './Item';



export default class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {filter: ALL};
  }

  render() {
    const checkFilter = () => {
      switch(this.state.filter) {
        case ALL: showAll(); 
        break;
        case COMPLETED: showCompleted();
        break;
        case ACTIVE: showActive();
        break;
        default: showAll();
        break;
      }
    }
  const showActive = () => { 
    return appState.map((item) => {
        return (<Item data = {item} />
        );
    });
  }
  const showAll = () => {
    return appState.map((item) => {
      if(item.completed === true) { 
        var liStyle = { 'textDecoration': 'line-through' }
      }
        return (<li className = 'todo'>
                              <a className = 'delete' onClick = { () => { deleteTodo(appState.indexOf(item))} }> Delete</a> 
                              <div style = { liStyle }  onClick = { () => { reverseTodo({ completed: item.completed, id: appState.indexOf(item) });}}> 
                                {item.text} 
                              </div>
                </li>);
    });
  }
  
  const showCompleted = () => {
    return appState.map((item) => {
      if(item.completed === true) { 
        var liStyle = { 'textDecoration': 'line-through' }
        return (<li className = 'todo'>
                              <a className = 'delete' onClick = { () => { deleteTodo(appState.indexOf(item))} }> Delete</a> 
                              <div style = { liStyle }  onClick = { () => { reverseTodo({ completed: item.completed, id: appState.indexOf(item) });}}> 
                                {item.text} 
                              </div>
                </li>);
      };
    });
  };

  document.addEventListener('keydown', (e) => { if(e.code === 'Enter' && this.input.value) { addTodo(this.input.value); this.input.value = ''; e.preventDefault()}});

    const appState    = this.props.store;
    const addTodo     = this.props.actions.addTodo;
    const reverseTodo = this.props.actions.reverseTodo;
    const deleteTodo  = this.props.actions.deleteTodo;

    

    let input = '';
    return (
            <div className='App'>
                  <input placeholder=' Type your task'  type='text' ref =  { e => this.input = e} />
                  <a className='add'  onClick = {  () => { if(this.input.value) { addTodo(this.input.value); this.input.value = '';}}} >
                  Add
                  </a>
              <ul> 
                {checkFilter()} 
              </ul>

              <div className='row'>
                  <a className='filter'  onClick = { () => this.setState({filter: ALL}) } >
                  All
                  </a>
                  <a className='filter'  onClick = { () => this.setState({filter: COMPLETED}) } >
                  Completed
                  </a>
                  <a className='filter'  onClick = { () =>  this.setState({filter: ACTIVE}) } >
                  Active
                  </a>
              </div>

           </div>);
  }
};*/