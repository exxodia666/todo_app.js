import React from 'react'
import '../styles/style.css'
//List Item Component
const Item = props => {
    //switches styles when todo has been done or not
    if(props.data.completed === true) { 
        var liStyle = { 'textDecoration': 'line-through' }
        var checkStyle = 'checked';
    }
    return(
        <li className = 'todo'>
            {/*dispatches deleteTodo action*/}
            <a className = 'delete' onClick = { () => { props.actions.deleteTodo(props.id)} }> Delete</a> 
            <input type='checkbox' 
                   className='checkbox' 
                   checked={checkStyle} 
                   onClick = { () => {
                    //dispatches reverseTodo action 
                    props.actions.reverseTodo({ completed: props.data.completed, id: props.id})
                   }
            }/>
            <div style={liStyle}> 
                {props.data.text} 
            </div>

        </li>);;
}
export default Item;