import React, { useState } from 'react'
import '../styles/style.css'
import Item from './Item'


const TodoListNew = props => {
    const ALL = 'ALL';
    const COMPLETED = 'COMPLETED';
    const ACTIVE = 'ACTIVE';
    //hook state
    const [filter, setFilter] = useState(ALL);
    const [input, setInput] = useState('');

    /*Doesn`t work!!!
    document.addEventListener('keydown', (e) => { 
      console.log("props");
      console.log(input);
      if(e.code === 'Enter' && input) { 
        props.actions.addTodo(input); 
        setInput(''); 
        e.preventDefault()
      }
    });
    */

    const mapItems = () => {
      switch(filter) {
        case ALL: return props.store.map((item) => <Item id = {props.store.indexOf(item)} actions = {props.actions} data = {item} />);
        break;
        case COMPLETED: return props.store.filter(item => item.completed === true).map((item) => <Item id = {props.store.indexOf(item)} actions = {props.actions} data = {item} />);
        break;
        case ACTIVE: return props.store.filter(item => item.completed === false).map((item) => <Item id = {props.store.indexOf(item)} actions = {props.actions} data = {item} />);
        break;
      }
      
    }

    return(
        <div className='App'>
            <input placeholder='Type your task'  type='text' onChange = { e => setInput(e.target.value)} value={input} />

            <a className='add'  
               onClick = {  () => { 
                 if(input) { 
                   props.actions.addTodo(input); 
                   setInput('');
                  }
                }
              } >
            Add
            </a>
            
            <ul> 
              {mapItems()} 
            </ul>

              {/*Todo filtering*/}
              <div className='row'>
                  <a className='filter'  onClick = { () => setFilter(ALL) } >
                  All
                  </a>
                  <a className='filter'  onClick = { () => setFilter(COMPLETED) } >
                  Completed
                  </a>
                  <a className='filter'  onClick = { () =>  setFilter(ACTIVE) } >
                  Active
                  </a>
              </div>

           </div>
    );
}

export default TodoListNew;