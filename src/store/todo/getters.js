 //todolists
export function getTodos(state) {
    return state.todos
}

 //taches d'une liste d'id
export const tasks= (state) => (id) =>{
    return state.todos.find((todo) => todo.id == id).todos
}

 //Nom de la todoliste
export const taskName = (state) => (id) => {
    return state.todos.find((todo) => todo.id == id).name
}

//retourne les taches restantes d'une liste
export const subremaining=(state)  => (id) => {
    try
    {return state.todos.find((todo) => todo.id == id)
        .todos.filter(task => !task.completed).length}//nombre de todos correspondant au filtre completed=false;
    catch(error){
        console.log(error)
        return 'Loading ...'
    }
}

//retourne toutes les taches restantes
export function remaining(state) {
 let remainings //compteur 
    try
    {
        if(state.todos)
          remainings= state.todos.map((todo => todo.todos.filter(task => !task.completed).length))//tableau des todos non complétés de chaque liste
    return remainings.reduce((a, b) => a + b, 0)//somme des elements du tableau
    }
    catch(error){
        console.log(error)
        return 'Loading ...'
    }
}
//retourne les todos faites
export const done = (state) => (id) => {
    return state.todos.find((todo) => todo.id == id).todos.filter(task => task.completed)
}

//retourne les todos non faites
export const todo = (state) => (id) => {
    return state.todos.find((todo) => todo.id == id).todos.filter(task => !task.completed)
}