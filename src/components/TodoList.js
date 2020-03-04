import React, { Component } from 'react'

import Item from './Item';


const ALL = 'ALL';
const COMPLETED = 'COMPLETED';
const ACTIVE = 'ACTIVE';
export default class TodoList extends Component {
  
   state = {
     filter: ALL
    };

    mapItems = () => {
      switch(this.state.filter) {
        //show all todos
        case ALL:
          return  this.props.store.map((item) => <Item id = { this.props.store.indexOf(item)} actions = { this.props.actions} data = {item} />);
        break;
        //show only completed
        case COMPLETED:  
          return  this.props.store.filter(item => item.completed === true).map((item) => <Item id = { this.props.store.indexOf(item)} actions = {this.props.actions} data = {item} />);
        break;
        //show only active
        case ACTIVE:  
          return  this.props.store.filter(item => item.completed === false).map((item) => <Item id = { this.props.store.indexOf(item)} actions = {this.props.actions} data = {item} />);
        break;
        default: 
          return  this.props.store.map((item) => <Item id = { this.props.store.indexOf(item)} actions = { this.props.actions} data = {item} />);
        break;
      }
      
    }

  render() {
    
    //const appState    = this.props.store;
    const addTodo     = this.props.actions.addTodo;
    //const reverseTodo = this.props.actions.reverseTodo;
    //const deleteTodo  = this.props.actions.deleteTodo;

    
    document.addEventListener('keydown', (e) => { 
      if(e.code === 'Enter' && this.input.value) { 
        addTodo(this.input.value); 
        this.input.value = ''; 
        e.preventDefault()
      }
    });
    let input = '';
    return (
            <div className='container mt-3 mb-3'>
              <div className="btn-group btn-group-toggle mt-3 mb-3" data-toggle="buttons">
                
                  <button type="button" class="btn btn-outline-secondary" onClick = { () => this.setState({filter: ALL}) } >All</button>
                
                  <button type="button" class="btn btn-outline-secondary"onClick = { () => this.setState({filter: COMPLETED}) }>Completed</button>
                
                  <button type="button" class="btn btn-outline-secondary" onClick = { () => this.setState({filter: ACTIVE}) }>Active</button>
                
              </div>
              <>
              <div className="input-group mb-3 input-group-lg">
                <input placeholder='Type your task' 
                type='text' 
                ref =  { e => this.input = e} 
                className="form-control" 
                id="inputGroup-sizing-lg"
                aria-label="Recipient's username" 
                aria-describedby="button-addon2"/>
                <div className="input-group-append">
                <button className="btn btn-outline-success" 
                type="button" 
                id="button-addon2"
                onClick = {  () => { if(this.input.value) { addTodo(this.input.value); this.input.value = '';}}}
                >
                  ADD
                </button>
                </div>
              </div>
              </>
              
              <ul className="list-group ">  
                {this.mapItems()} 
              </ul>
           </div>);
  }
};