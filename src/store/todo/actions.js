 
 import axios from 'axios';


 //chargemet des todolistes
 export function loadTodolists({commit},data)
 {
     axios.get('http://138.68.74.39/api/todolists',{headers:{'Authorization':'Bearer '+data.token}})
        .then(res=>{commit('loadTodolists',res.data)})
        .catch(function (error) {
            console.log("error"+error)
        })
 }
 
 export function createTodolist({commit},data)
 {
     axios.post('http://138.68.74.39/api/todolist?name='+data.name,null,{headers:{'Authorization':'Bearer '+data.token}})
     .then(res=>{commit('addTodo',res.data)})
     .catch(function (error) {
        console.log("error"+error)
    })
 }
 export function deleteTodolist({commit},data){
    axios.delete('http://138.68.74.39/api/todolist/'+data.id,{headers:{'Authorization':'Bearer '+data.token}})
    .then(commit('removeTodo',data.id))
    
 }
 
/* export function loadTodos({commit},data)
 {
    axios.get('http://138.68.74.39/api/todos/'+data.id,{headers:{'Authorization':'Bearer '+data.token}})
    .then(res=>{commit('loadTasks',{id:data.id,tasks:res.data})})
 }editTask*/

 export function createTodo({commit},data)
{
    console.log(data.bool)
    axios.post('http://138.68.74.39/api/todo?name='+data.name+'&completed='+data.bool
    +'&todolist_id='+data.liste,null,{headers:{'Authorization':'Bearer '+data.token}})
    .then(res=>{commit('addTask',{task:res.data,id:data.liste})})
   
}

export function deleteTodo({commit},data){
    
    axios.delete('http://138.68.74.39/api/todo/'+data.id,{headers:{'Authorization':'Bearer '+data.token}})
    .then(commit('removeTask',{task:data.id,todo:data.liste}))
}

export function completeTodo({commit},data){
    axios.post('http://138.68.74.39/api/completeTodo/'+data.id+'?name='+data.name+'&completed='+data.bool
    +'&todolist_id='+data.liste,null,{headers:{'Authorization':'Bearer '+data.token}})
    .then(res=>{commit('completeTodo',res.data)})
    .catch(function (error) {
       console.log("error"+error)
   })
}

export function modifyTodo({commit},data){

    console.log(data)
    axios.patch('http://138.68.74.39/api/todo/'+data.id+'?name='+data.name,null,{headers:{'Authorization':'Bearer '+data.token}})
      .then(res=>{commit('editTodo',res.data)})
    .catch(function (error) {
       console.log("error"+error)
   })
}