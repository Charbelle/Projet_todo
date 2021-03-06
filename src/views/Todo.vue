<template>
  <div>
      <h2>My todolist</h2>
      <ul class="filter">
          <li><a href="#" :class="{selected: filter==='all'}" @click.prevent="filter ='all'"> toutes</a> </li>
          <li><a href="#" :class="{selected: filter==='todo'}" @click.prevent="filter ='todo'"> a faire</a> </li>
          <li> <a href="#" :class="{selected: filter==='done'}" @click.prevent="filter ='done'"> restantes</a> </li>
      </ul>
      <div class ="content">
  <ul id="todo" class ="todolist">
  <li class="todo editing" v-for="todo, index in filtered" :key="todo.id" :class="{completed:todo.completed,editing:todo===editing}">
     <div class="view">
      <input type="checkbox" v-on:click="change(index)" v-if="todo.completed" checked class="toggle">
         <input v-on:click="change(index)" type="checkbox" v-else > 
         <label v-on:click="editTodo(todo)">{{ todo.name }}</label>
    

      <button v-on:click="supp(index)">Supprimer</button> 
      <input type="text" class="edit" v-model="todo.name" @keyup.enter="doneEditing">
      </div>
  </li>
  
</ul>
      </div>
      <span class="count"><em> {{remaining}}</em> A faire</span>
<input v-model="newTodoText" class = "newtodo" @keyup.enter="addNewTodo" placeholder="Ajouter nouvelle tache" >
      <button v-on:click="addNewTodo">Ajouter</button>
      

</div>
</template>

<script>
export default {

  name: 'Todo',
  data() {

return{
todos: [
{
id: 1,
name : 'tache 1',
completed : false
},
{
id: 2,
name : 'tache 2',
completed: false
}
]
,
newTodo: '',
filter: 'all',
editing: null,
}
  },

props: {

},
methods: {
    editTodo(todo){
     this.editing= todo
    },

    doneEditing(){
     this.editing= null
    },

change(index){

  this.todos[index].completed=!this.todos[index].completed;

},
supp(index){
  
 this.todos.splice(index)

},
addNewTodo: function () {
       let id= this.todos.length+1
     
      this.todos.push({
        id: id,
        name: this.newTodoText,
        completed: false
      })
      this.newTodoText = ''
    }

},  
computed: {

    filtered(){
     if(this.filter=="todo")
        return this.todos.filter(todo => !todo.completed)
     else 
    if(this.filter=="done")
        return this.todos.filter(todo => todo.completed)
    else
     return this.todos
    },
    remaining(){
        return this.todos.filter(todo => !todo.completed).length
 }
    }
 
}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
    color: #42b983;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>