import { Todos } from '../components/Todos.js'
import { connect } from 'react-redux'
import { todoToggled } from '../actions/todoActions'


const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggled: (id) => {
      dispatch(todoToggled(id))
    }
  }
}

const TodosLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)

export default TodosLink
