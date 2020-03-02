import React, { useState } from 'react'
import '../styles/style.css'

//todo hooks


const TodoList = props => {
  let input = '';
  //const [input, setInput] = useState('');

  document.addEventListener('keydown', (e) => { 
    if(e.code === 'Enter' && input.value) { 
      addTodo(input.value); 
      input.value = ''; 
      e.preventDefault()
    }
  });

    const appState    = props.store;
    const addTodo     = props.actions.addTodo;
    const reverseTodo = props.actions.reverseTodo;
    const deleteTodo  = props.actions.deleteTodo;

    const mapState = state => {
      return state.map((item) => {
        if(item.completed === true) { 
          var liStyle = { 
            'textDecoration': 'line-through' }
        };
        return (<li className = 'todo'>
                                <a className = 'delete' 
                                href='/' 
                                onClick = { () => { 
                                  deleteTodo(appState.indexOf(item))
                                  } 
                                }>Delete</a> 

                                <div style = { liStyle }  
                                     onClick = { () => { 
                                     reverseTodo({ completed: item.completed, id: appState.indexOf(item) });}}> 
                                  {item.text} 
                                </div>
                </li>);
    });}


 
/*
    const handleChange = event => {
      setInput('');
      setInput(event.target.value);
    }
*/
    return (
            <div className='App'>
                  <input placeholder='Type your task'  
                         type='text' 
                         ref = { e => { 
                           input = e; 
                          }  
                        }
                  />

                  <a className='add' 
                    onClick = {  
                      () => { 
                        if(input.value) { 
                        addTodo(input.value);
                        input.value = ''; 
                      } else { 
                        alert('type your message')}}} >
                  Add
                  </a>
              <ul> 
                { mapState(appState) }
              </ul>

              {/*Todo filtering
              <div className='row'>
                  <a className='add' href='/'  onClick = {  () => { if(this.input.value) { addTodo(this.input.value); this.input.value = '';}}} >
                  All
                  </a>
                  <a className='add' href='/'  onClick = {  () => { if(this.input.value) { addTodo(this.input.value); this.input.value = '';}}} >
                  Completed
                  </a>
                  <a className='add' href='/'  onClick = {  () => { if(this.input.value) { addTodo(this.input.value); this.input.value = '';}}} >
                  Active
                  </a>
              </div>*/
              }
           </div>);
};

export default TodoList;