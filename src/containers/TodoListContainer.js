import TodoList from '../components/TodoList';
import * as actions from '../actions/actionCreator';
import { connect } from 'react-redux';
import { bindActionCreators  } from 'redux';  

const mapStateToProps = (state) => {
    return{
      store : state
    }
}
const mapDispatchToProps = (dispatch) => {
    console.log('Container');
    console.log(actions);
    return {
      actions: bindActionCreators(actions, dispatch)
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);


