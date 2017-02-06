import { Todos } from '../components/Todos.js'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: ''
  }
}

const TodosLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)

export default TodosLink
