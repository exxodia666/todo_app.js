import React from 'react';
import { Provider } from 'react-redux';
import TodoListContainer from './containers/TodoListContainer'
import { Store } from './Store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About'
//main component
const App = () => {
      return(<div>
                <Provider store = { Store }>
                    <Router>
                        <Header />
                        <Switch>
                        <Route exact path="/">
                            <TodoListContainer />
                        </Route>
                        
                        <Route path="/about">
                            <About />
                        </Route>
                        </Switch>
                    </Router>
                </Provider>
            </div>);
};
export default App;

