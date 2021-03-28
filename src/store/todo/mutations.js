//ajout d'une liste
export function addTodo(state, data) {
    state.todos.push(data)
}

//modification d'une todoliste
export function editTodo(state,data) {
 console.log(data)
}

//ajout d'une tache 
export function addTask(state, data) {
console.log(data)
state.todos.find((todo) => todo.id == data.id).todos.push(data.task);
}

//suppression d'une todoliste
export function removeTodo(state, data) {
    let index = state.todos.findIndex((todo) => todo.id == data.id)
    state.todos.splice(index, 1)
}
//suppression d'une tache 
export function removeTask(state, data) {

    let tasks = state.todos.find((todo) => todo.id == data.todo).todos
    let index = tasks.findIndex((task) => task.id == data.task)
    tasks.splice(index, 1)
}

//completion d'une todo
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

//chargement des listes
export function loadTodolists(state,data)
{

    state.todos=data;
}

