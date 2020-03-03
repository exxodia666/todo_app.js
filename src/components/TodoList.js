import React, { useState } from 'react'
import '../styles/style.css'
import Item from './Item'


const TodoListNew = props => {
    const ALL = 'ALL';
    const COMPLETED = 'COMPLETED';
    const ACTIVE = 'ACTIVE';
    //hook state
    //filter state
    const [filter, setFilter] = useState(ALL);
    //input state
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
   //filters todos and renders them
    const mapItems = () => {
      switch(filter) {
        //show all todos
        case ALL: return props.store.map((item) => <Item id = {props.store.indexOf(item)} actions = {props.actions} data = {item} />);
        break;
        //show only completed
        case COMPLETED: return props.store.filter(item => item.completed === true).map((item) => <Item id = {props.store.indexOf(item)} actions = {props.actions} data = {item} />);
        break;
        //show only active
        case ACTIVE: return props.store.filter(item => item.completed === false).map((item) => <Item id = {props.store.indexOf(item)} actions = {props.actions} data = {item} />);
        break;
      }
      
    }

    return(
        <div className='App'>
            <input placeholder='Type your task'  type='text' onChange = { e => setInput(e.target.value)} value={input} />
            {/*dispatches addTodo action*/}
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