import React from 'react';
import { Provider } from 'react-redux';
import TodoListContainer from './containers/TodoListContainer'
import { Store } from './Store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import About from './components/About'
//main component
const App = () => {
      return(<div>
                <Provider store = { Store }>
                        <Header />
                        <TodoListContainer />
                </Provider>
            </div>);
};
export default App;

