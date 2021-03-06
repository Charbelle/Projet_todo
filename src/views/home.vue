<template>

  <div>
    <sidebar/><div class="main">


      <h2>My todolist</h2>

  <ul id="todo">

  <li v-for="(element,index) in list" :key="element.id">

        {{element.name }} 

      <button v-on:click="supp(index)" >Supprimer</button>
  </li>
</ul>
<input v-model="newList" >
      <button v-on:click="addNewList">Ajouter</button>

  ...
</div>
</div>

</template>

<script>
import sidebar from "./components/menu/Sidebar.vue"


export default {
  components: { sidebar },
  name: 'App',
 
   data() {

return{
list: [
{
id: 1,
name : 'tache 1',
},
{
id: 2,
name : 'tache 2',

}
]
,
newList: '',
filter: 'all',
}
  },

props: {

},
methods: {

supp(element){
 
 this.list.splice(element,1)

},


},  
computed: {
 filtre(){
   return this.todos.filter()
 }

}



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

