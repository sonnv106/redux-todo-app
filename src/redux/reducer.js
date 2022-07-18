import filterReducers from "../components/Filters/FilterSlice";
import todoListReducers from "../components/TodoList/TodolistSlice";
import { combineReducers } from "redux";
// const rootReducer = (state={}, action)=>{
//     return {
//         filters: filterReducers(state.filters, action),
//         todoList: todoListReducers(state.todoList, action)
//     }
// }
const rootReducer = combineReducers({
  filters: filterReducers,
  todoList: todoListReducers,
});
export default rootReducer;
