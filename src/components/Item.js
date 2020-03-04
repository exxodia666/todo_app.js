import React from 'react'

//List Item Component
const Item = props => {
    //switches styles when todo has been done or not
    let liStyle;
    let checkStyle;

    if(props.data.completed === true) { 
         liStyle = { 'textDecoration': 'line-through' }
         checkStyle = 'checked';
    } else {
         liStyle = {}
         checkStyle = '';
    }
    return(
        <li className="list-group-item d-flex justify-content-between note text-break shadow-sm p-4 mb-5 bg-white rounded " >
                {/*dispatches deleteTodo action*/}
                <div className='row'>
                    <input type='checkbox' 
                        className='ml-5 mr-3' 
                        checked={checkStyle} 
                        onClick = { () => {
                            //dispatches reverseTodo action 
                            props.actions.reverseTodo({ completed: props.data.completed, id: props.id})
                        }
                    }/>
                    <h3 className="d-inline p-2 bg-primar display-5 font-weight-light" style={liStyle}>{props.data.text}</h3>
                </div>
                <button type="button" class="close mr-4" aria-label="Close" onClick = { () => { 
                    //event.preventDefault();
                    props.actions.deleteTodo(props.id)} }>
                    <span aria-hidden="true">&times;</span>
                </button>
        </li>);;
}
export default Item;