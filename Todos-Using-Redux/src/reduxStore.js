import {createStore} from 'redux';
import {todoReducer} from './reducers/todoReducer';

let TodoStore = createStore(todoReducer);
export default TodoStore;
