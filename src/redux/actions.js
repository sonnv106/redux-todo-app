
export const addTodo = (data)=>{
    return {
        type: 'todoList/addTodo',
        payload:  data
    }
}
export const searchFilterChange = (text)=>{
    return {
        type: 'filters/searchFilterChange',
        payload: text
    }
}
export const statusFilterchange = (status)=>{
    return{
        type: 'filters/statusFilterChange',
        payload: status
    }
}
export const prioritiesFilterchange = (priorities)=>{
    return{
        type: 'filters/prioritiesFilterChange',
        payload: priorities
    }
}
export const toggleTodoStatus = (todoId)=>{
    return {
        type: 'todoList/toggleTodoStatus',
        payload: todoId
    }
}