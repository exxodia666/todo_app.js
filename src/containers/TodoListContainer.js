import TodoList from '../components/TodoList';
import * as actions from '../actions/actionCreator';
import { connect } from 'react-redux';
import { bindActionCreators  } from 'redux';  
const mapStateToProps = (state) => {
    //console.log(state);
    return{
      store : state
    }
}

/*
const mapDispatchToProps = {
        addTodo: actions.addTodo,
        reverseTodo: actions.reverseTodo,
        deleteTodo: actions.deleteTodo,
}
*/
const mapDispatchToProps = (dispatch) => {
    console.log('Container');
    console.log(actions);
    return {
      actions: bindActionCreators(actions, dispatch)
    }
  }

/*
const mapDispatchToProps = (dispatch) => {
    console.log(actions.addTodo);
    return {
        addTodo: bindActionCreators(actions.addTodo, dispatch),
        reverseTodo: bindActionCreators(actions.reverseTodo, dispatch),
        deleteTodo: bindActionCreators(actions.deleteTodo, dispatch) 
    }
  }
*/

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);


