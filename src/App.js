import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './reducers/rootReducer'
import TodoListContainer from './containers/TodoListContainer'

export const initialState = [
  {id: 1, text: 'text1dasdasdsadsadsadsadasdasdasdasdasdasdasdasd', completed: false},
  {id: 2, text: '.data', completed: false},
  {id: 3, text: 'action.data', completed: false},
];

const store = createStore(rootReducer, initialState);

export default class App extends Component {
    render() {
      return(<div>
                <Provider store = { store }>
                    <TodoListContainer />
                </Provider>
            </div>
      );
    }
};

