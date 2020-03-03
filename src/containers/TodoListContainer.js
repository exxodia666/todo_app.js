import TodoList from '../components/TodoList';
import * as actions from '../actions/actionCreator';
import { connect } from 'react-redux';
import { bindActionCreators  } from 'redux';  

//transfers store to react components
const mapStateToProps = (state) => {
    return{
      store : state
    }
}
//transfers actions to react components
const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
  }
//connects react and redux
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);


