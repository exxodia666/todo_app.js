import React, { Component } from 'react';
import { Provider } from 'react-redux';
import TodoListContainer from './containers/TodoListContainer'
import { Store } from './Store';

export default class App extends Component {
    render() {
      return(<div>
                <Provider store = { Store }>
                    <TodoListContainer />
                </Provider>
            </div>
      );
    }
};

