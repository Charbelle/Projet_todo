export function addTodo(state, data) {
    console.log(data)
    state.todos.push(data)
}

export function editTodo(state,data) {
 console.log(data)
}

export function addTask(state, data) {
console.log(data)
state.todos.find((todo) => todo.id == data.id).todos.push(data.task);
}

export function removeTodo(state, data) {
    let index = state.todos.findIndex((todo) => todo.id == data.id)
    state.todos.splice(index, 1)
}

export function removeTask(state, data) {

    let tasks = state.todos.find((todo) => todo.id == data.todo).todos
    let index = tasks.findIndex((task) => task.id == data.task)
    tasks.splice(index, 1)
}

export function completeTodo(state, data) {

    state.todos.find((todo) => todo.id == data.todolist_id).todos.find((task) => task.id === data.id).completed =
        /*on retrouve la valeur completed de la task */
        !state.todos.find((todo) => todo.id == data.todolist_id).todos.find((task) => task.id === data.id).completed;
    /*et on lui attribue la valeur inverse */
}

/*export function editTask(state,data){
  
   
     let edit = state.todos.find((todo) =>todo.id==data.todo).tasks
     .find((task) =>task.id===data.task.id)
     console.log(edit)
   
    }
*/

export function loadTodolists(state,data)
{

    state.todos=data;
}
export function setTodo(state,data)
{
    console.log(data)
}
