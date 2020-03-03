import React, { Component } from 'react';
import { Provider } from 'react-redux';
import TodoListContainer from './containers/TodoListContainer'
import { Store } from './Store';

//main component
const App = () => {
      return(<div>
                <Provider store = { Store }>
                    <TodoListContainer />
                </Provider>
            </div>);
};
export default App;

