export function getTodos(state) {
 
    return state.todos
}

export const tasks= (state) => (id) =>{

    return state.todos.find((todo) => todo.id == id).todos
}
export const taskName = (state) => (id) => {
    return state.todos.find((todo) => todo.id == id).name
}
export const subremaining=(state)  => (id) => {
    return state.todos.find((todo) => todo.id == id).todos.filter(task => !task.completed).length
}
export function remaining(state) {
    if(state.todos)
    {
    let remainings = state.todos.map((todo => todo.todos.filter(task => !task.completed).length))
    return remainings.reduce((a, b) => a + b, 0)
    }
}
export const done = (state) => (id) => {
    return state.todos.find((todo) => todo.id == id).todos.filter(task => task.completed)
}
export const todo = (state) => (id) => {
    return state.todos.find((todo) => todo.id == id).todos.filter(task => !task.completed)
}