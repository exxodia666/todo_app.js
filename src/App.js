import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import { rootReducer } from './reducers/rootReducer'
import TodoListContainer from './containers/TodoListContainer'


export const initialState = [ 

];

const store = createStore(rootReducer, initialState);



export default class App extends Component {
    render(){
      return(<div className='App'>
        <Provider store = { store }>
            <TodoListContainer />
        </Provider>
      </div>
      );
    }
};

